import { MailIcon } from "lucide-react";
import Navigation from "./Navigation";

const Header: React.FC = () => {
  return (
    <header className="flex flex-row justify-between w-full pt-10 px-10">
      <Navigation />

      <div className="items-center gap-2.5 hidden sm:flex">
        <MailIcon size="1.25rem" className="shrink-0" />
        <a href="mailto:isaac2001clark@gmail.com">Contact Me</a>
      </div>
    </header>
  );
};

export default Header;
