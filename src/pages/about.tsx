import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import AnimatedPage from "../components/PageWrapper";
import Link from "next/link";

export default function About() {
  return (
    <AnimatedPage>
      <Head>
        <title>cody — about</title>
        <meta
          name="description"
          content="Hi, I’m Abdullah — a passionate learner with a deep interest in science, technology, and
       creative problem-solving. I’m currently exploring opportunities to grow my skills and
      contribute to meaningful projects. Whether it's building efficient software, diving into
        the mysteries of space, or solving real-world problems, I love turning ideas into reality."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="title__wrapper">
        <AnimatedText element="h1" text="About" />
      </div>
      <p>
        Hi, I’m Abdullah — a passionate learner with a deep interest in science, technology, and
       creative problem-solving. I’m currently exploring opportunities to grow my skills and
      contribute to meaningful projects. Whether it's building efficient software, diving into
        the mysteries of space, or solving real-world problems, I love turning ideas into reality.
      </p>

      <br />
      <p>
        I'm currently working at{" "}
        <Link href="https://cside.dev/" target="_blank">
          c/side
        </Link>
      </p>
    </AnimatedPage>
  );
}
