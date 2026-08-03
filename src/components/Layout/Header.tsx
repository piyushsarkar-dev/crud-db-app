import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "../shadcnui/button";
import ThemeToggleButton from "./ThemeToggleButton";

const Header = () => {
  return (
    <header
      className="bg-background/95 fixed top-0 right-0 left-0 z-50 border-b shadow backdrop-blur"
      aria-label="Main">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href={"/"}>
          <span
            className="text-2xl font-semibold"
            aria-label="App Name">
            CRUD
          </span>
        </Link>

        <nav className="flex items-center gap-4">
          <Link
            href={"/create"}
            className={buttonVariants({ variant: "secondary" })}>
            <PlusIcon /> Create
          </Link>

          <ThemeToggleButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;
