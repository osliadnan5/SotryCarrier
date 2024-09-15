"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/toggleMode";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
const NavLinks = [
  { label: "Home", href: "/" },
  { label: "Share your story", href: "/story" },
  { label: "Browse stories", href: "/stories" },
];

const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className="py-5 fixed z-50 w-full">
      <div className="flex max-w-7xl mx-auto px-5 items-center justify-between">
        <Image
          src="/osteam.png"
          alt={"osteam"}
          width={80}
          height={80}
          className="dark:hidden"
        />
        <Image
          src="/osteam.png"
          alt={"osteam"}
          width={80}
          height={80}
          className="dark:block hidden"
        />
        <div className="md:flex hidden items-center gap-x-3">
          {NavLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-sm text-muted-foreground hover:text-primary transition-colors",
                pathname === href && "text-primary font-semibold"
              )}
            >
              {label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-x-2">
          <ModeToggle />
          <span className="hidden md:flex">Login</span>
          <Sheet>
            <SheetTrigger className="md:hidden block">
              <Menu className="w-8 h-8"></Menu>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <Image
                  src="/osteam.png"
                  alt={"osteam"}
                  width={80}
                  height={80}
                  className="dark:hidden"
                />
                <Image
                  src="/osteam.png"
                  alt={"osteam"}
                  width={80}
                  height={80}
                  className="dark:block hidden"
                />
              </SheetHeader>
              <div className="flex flex-col items-start gap-y-3 my-10">
                {NavLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={cn(
                      "text-sm text-muted-foreground hover:text-primary transition-colors",
                      pathname === href && "text-primary font-semibold"
                    )}
                  >
                    {label}
                  </Link>
                ))}
              </div>
              <span>Login</span>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
