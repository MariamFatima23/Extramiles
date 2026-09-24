export type NavigationLink = {
  to: string;
  label: string;
  width: string;
  end?: boolean;
};

export const navigationLinks: NavigationLink[] = [
  { to: "/", label: "Home", width: "xl:w-[62px]", end: true },
  { to: "/partners", label: "Partners", width: "xl:w-[82px]" },
  { to: "/members", label: "Members", width: "xl:w-[89px]" },
  { to: "/government", label: "Government", width: "xl:w-[111px]" },
  { to: "/blog", label: "Blog", width: "xl:w-[52px]" },
  { to: "/about", label: "About us", width: "xl:w-[86px]" },
];
