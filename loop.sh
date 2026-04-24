#!/usr/bin/env bash
# Ralph outer loop: pipe PROMPT_*.md to Claude Code CLI each iteration.
# Usage: ./loop.sh [plan] [max_iterations]
# Examples:
#   ./loop.sh              # Build mode, unlimited outer iterations
#   ./loop.sh 20           # Build mode, max 20
#   ./loop.sh plan         # Plan mode, unlimited
#   ./loop.sh plan 5       # Plan mode, max 5
#
# Set SKIP_GIT_PUSH=1 to skip git push after each iteration.
# See: https://github.com/ghuntley/how-to-ralph-wiggum

if [ "${1:-}" = "plan" ]; then
  MODE="plan"
  PROMPT_FILE="PROMPT_plan.md"
  MAX_ITERATIONS=${2:-0}
elif [[ "${1:-}" =~ ^[0-9]+$ ]]; then
  MODE="build"
  PROMPT_FILE="PROMPT_build.md"
  MAX_ITERATIONS=$1
else
  MODE="build"
  PROMPT_FILE="PROMPT_build.md"
  MAX_ITERATIONS=0
fi

ITERATION=0
CURRENT_BRANCH=$(git branch --show-current 2>/dev/null || echo "unknown")
SKIP_GIT_PUSH="${SKIP_GIT_PUSH:-0}"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "Mode:   $MODE"
echo "Prompt: $PROMPT_FILE"
echo "Branch: $CURRENT_BRANCH"
if [ "${MAX_ITERATIONS:-0}" -gt 0 ]; then
  echo "Max:    $MAX_ITERATIONS iterations"
fi
[ "$SKIP_GIT_PUSH" = "1" ] && echo "Push:   skipped (SKIP_GIT_PUSH=1)" || true
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [ ! -f "$PROMPT_FILE" ]; then
  echo "Error: $PROMPT_FILE not found" >&2
  exit 1
fi

if ! command -v claude >/dev/null 2>&1; then
  echo "Error: 'claude' not on PATH. Install the Claude Code CLI and auth per Anthropic docs." >&2
  exit 1
fi

while true; do
  if [ "$MAX_ITERATIONS" -gt 0 ] && [ "$ITERATION" -ge "$MAX_ITERATIONS" ]; then
    echo "Reached max iterations: $MAX_ITERATIONS"
    break
  fi

  # shellcheck disable=SC2002
  cat "$PROMPT_FILE" | claude -p \
    --dangerously-skip-permissions \
    --output-format=stream-json \
    --model opus \
    --verbose

  if [ "$SKIP_GIT_PUSH" != "1" ] && [ "$CURRENT_BRANCH" != "unknown" ]; then
    git push origin "$CURRENT_BRANCH" || {
      echo "Note: push failed; trying to set upstream..."
      git push -u origin "$CURRENT_BRANCH" || true
    }
  fi

  ITERATION=$((ITERATION + 1))
  printf '\n\n======================== LOOP %s ========================\n\n' "$ITERATION"
done
