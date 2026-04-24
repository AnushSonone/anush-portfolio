import Image from "next/image";

export default function Home() {
  return (
    <main className="home" id="content">
      <div className="home__intro">
        <p>
          <Image
            className="home__logo--invert"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
        </p>
        <h1>To get started, edit the page.tsx file.</h1>
        <p>
          Looking for a starting point or more instructions? Head over to{" "}
          <a href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app">
            Templates
          </a>{" "}
          or the{" "}
          <a href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app">
            Learning
          </a>{" "}
          center.
        </p>
      </div>
      <p className="home__actions">
        <a
          className="home__btn-primary"
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="home__btn-primary-icon"
            src="/vercel.svg"
            alt="Vercel logomark"
            width={16}
            height={16}
          />
          Deploy Now
        </a>
        <a
          className="home__btn-secondary"
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentation
        </a>
      </p>
    </main>
  );
}
