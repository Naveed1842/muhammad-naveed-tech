"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site-config";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const homePrefix = isHome ? "" : "/";

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-[92vw] max-w-[1120px] items-center justify-between gap-4">
        <Link
          href={isHome ? "#top" : "/"}
          className="flex items-center gap-2.5 text-foreground no-underline"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[7px] bg-[var(--band-bg)] font-mono text-sm font-semibold text-white">
            {siteConfig.initials}
          </span>
          <span className="text-[15px] font-semibold tracking-tight">{siteConfig.name}</span>
        </Link>

        <div className="hidden items-center gap-7 nav:flex">
          <div className="flex items-center gap-5.5 text-sm text-body">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`${homePrefix}${link.href}`}
                className="text-inherit no-underline hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
          <ThemeToggle />
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-[13.5px] font-medium text-primary-foreground no-underline transition-opacity hover:opacity-90"
          >
            <Download className="size-[15px]" />
            Resume
          </a>
        </div>

        <div className="flex items-center gap-2 nav:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-[9px] border border-border text-foreground"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-border bg-background nav:hidden"
          >
            <div className="flex flex-col gap-1 px-[min(4vw,24px)] pt-3 pb-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={`${homePrefix}${link.href}`}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 text-base font-medium text-foreground no-underline"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="mt-2.5 inline-flex items-center justify-center gap-2 rounded-[9px] bg-primary px-4 py-3.5 text-[15px] font-medium text-primary-foreground no-underline"
              >
                <Download className="size-[15px]" />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
