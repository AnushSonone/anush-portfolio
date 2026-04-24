# Ralph outer loop (PowerShell): same behavior as loop.sh
# Usage (repo root):
#   .\loop.ps1
#   .\loop.ps1 -MaxIterations 20
#   .\loop.ps1 -Plan
#   .\loop.ps1 -Plan -MaxIterations 5
# Skip push: $env:SKIP_GIT_PUSH = "1"
# See: https://github.com/ghuntley/how-to-ralph-wiggum

[CmdletBinding()]
param(
  [switch] $Plan,
  [int] $MaxIterations = 0
)

$ErrorActionPreference = "Stop"

$mode = if ($Plan) { "plan" } else { "build" }
$promptFile = if ($Plan) { "PROMPT_plan.md" } else { "PROMPT_build.md" }
$iter = 0

try {
  $branch = git branch --show-current 2>$null
  if (-not $branch) { $branch = "unknown" }
} catch {
  $branch = "unknown"
}

$skipPush = $env:SKIP_GIT_PUSH -eq "1"

Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
Write-Host "Mode:   $mode"
Write-Host "Prompt: $promptFile"
Write-Host "Branch: $branch"
if ($MaxIterations -gt 0) { Write-Host "Max:    $MaxIterations iterations" }
if ($skipPush) { Write-Host "Push:   skipped (SKIP_GIT_PUSH=1)" }
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if (-not (Test-Path -LiteralPath $promptFile)) {
  Write-Error "File not found: $promptFile"
  exit 1
}

$claude = Get-Command claude -ErrorAction SilentlyContinue
if (-not $claude) {
  Write-Error "'claude' not on PATH. Install the Claude Code CLI and complete auth (see Anthropic docs)."
  exit 1
}

while ($true) {
  if ($MaxIterations -gt 0 -and $iter -ge $MaxIterations) {
    Write-Host "Reached max iterations: $MaxIterations"
    break
  }

  Get-Content -Raw -LiteralPath $promptFile | & claude -p `
    --dangerously-skip-permissions `
    --output-format=stream-json `
    --model opus `
    --verbose

  if (-not $skipPush -and $branch -ne "unknown") {
    try {
      git push origin $branch
    } catch {
      Write-Host "Note: push failed; trying to set upstream..."
      try { git push -u origin $branch } catch { }
    }
  }

  $iter++
  Write-Host ""
  Write-Host "======================== LOOP $iter ========================"
  Write-Host ""
}
