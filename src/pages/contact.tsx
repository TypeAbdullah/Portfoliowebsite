import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import {
  GitHubIcon,
  InstagramIcon,
  TelegramIcon,
  MailIcon,
  TwitterIcon,
} from "../components/Icons";
import AnimatedPage from "../components/PageWrapper";
import { GITHUB, INSTAGRAM, LINKEDIN, TWITTER } from "../utils/constants";

const SOCIAL_ITEMS = [
  {
    platform: "twitter",
    icon: <TwitterIcon width={30} height={30} />,
    link: TWITTER,
    handle: "@beacuseunkown",
  },
  {
    platform: "github",
    icon: <GitHubIcon width={30} height={30} className="fill-primary-300" />,
    link: GITHUB,
    handle: "@TypeAbdullah",
  },
  {
    platform: "telegram",
    icon: <TelegramIcon width={30} height={30} />,
    link: TELEGRAM,
    handle: "@NaapaExtra",
  },
  {
    platform: "instagram",
    icon: <InstagramIcon width={30} height={30} />,
    link: INSTAGRAM,
    handle: "@TypeAbdullah",
  },
];

export default function Contact() {
  return (
    <AnimatedPage>
      <Head>
        <title>cody — contact</title>
        <meta
          name="description"
          content="contact me through any of my socials"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="title__wrapper">
        <AnimatedText element="h1" text="Contact" />
      </div>

      <ul className="flex flex-col gap-6 list-none">
        {SOCIAL_ITEMS.map((item) => (
          <li key={item.platform} className="flex gap-4 items-center">
            {item.icon}
            <a
              href={item.link}
              className="text-xl"
              target="_blank"
              rel="noreferrer"
            >
              {item.handle}
            </a>
          </li>
        ))}
      </ul>
    </AnimatedPage>
  );
}
