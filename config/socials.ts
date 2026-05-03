import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@Dominion116",
    icon: Icons.gitHub,
    link: "https://github.com/Dominion116",
  },
  {
    name: "LinkedIn",
    username: "Oyewale Dominion",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/dominionoyewale",
  },
  {
    name: "Twitter",
    username: "@dominionlii",
    icon: Icons.twitter,
    link: "https://twitter.com/dominionlii",
  },
  {
    name: "Gmail",
    username: "limbotech116",
    icon: Icons.gmail,
    link: "mailto:limbotech116@gmail.com",
  },
];
