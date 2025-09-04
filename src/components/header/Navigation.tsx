"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navigation: React.FC = () => {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState(pathname);

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  return (
    <nav>
      <ul className="flex gap-7.5">
        <li>
          <Link
            href="/"
            className={activePath === "/" ? "border-b-2 border-green-600" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={
              activePath === "/about" ? "border-b-2 border-green-600" : ""
            }
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className={
              activePath === "/projects" ? "border-b-2 border-green-600" : ""
            }
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
