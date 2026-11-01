"use client";

import Image from "next/image";
import { siteConfig } from "@/content/site";
import Link from "next/link";
import styles from "./header-nav.module.css";
import { MouseEventHandler, useState } from "react";

function MobileNavToggle({
  show,
  onClick,
}: {
  show: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      aria-label="Toggle Navigation"
      className="md:hidden text-center block w-full py-2 bg-slate-800 hover:bg-slate-700"
      onClick={onClick ?? function () {}}
    >
      <span
        className={`inline-block transition-transform ${
          show ? "scale-y-[-1]" : ""
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="inline-block size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </span>
    </button>
  );
}

export function HeaderNav({ logo }: { logo?: boolean }) {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const toggleNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <nav className={styles.headerNav}>
      {logo ? (
        <Link href="/" className="block">
          <div className="bg-slate-800 z-20 md:absolute">
            <Image
              alt="GorettiFest"
              src="/img/gorettifest-logo-white-red-outline.svg"
              width={240}
              height={240}
              priority
              loading="eager"
              className="relative mx-auto h-auto w-[140px] object-contain md:w-[240px]"
              style={{ height: "auto" }}
            />
          </div>
        </Link>
      ) : null}
      <MobileNavToggle onClick={toggleNav} show={showMobileNav} />
      <ul
        className={`${
          showMobileNav ? "block" : "hidden"
        } md:flex justify-center`}
      >
        {(siteConfig.homeMode === "thank-you"
          ? [
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
            ]
          : [
              { href: "/#visit", label: "Plan Your Visit" },
              { href: "/#food-and-drinks", label: "Food & Drinks" },
              { href: "/#games", label: "Games" },
              { href: "/#entertainment", label: "Entertainment" },
              { href: "/#vendors", label: "Vendors" },
              { href: "/about", label: "About Us" },
            ]
        ).map(({ href, label }) => (
          <li key={href}>
            <Link className={styles.headerNav__link} href={href}
              onClick={() => setShowMobileNav(false)}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
