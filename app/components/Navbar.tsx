import React from "react";
import Link from "next/link";
import custom1 from "./custom1.module.css";

const Navbar = () => {
  return (
    <header className={custom1.container}>
      <h1 className={custom1.title}>Coffee Haven</h1>

      <nav>
        <ul className={custom1.nav}>
          <li>
            <Link className={custom1.list} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className={custom1.list} href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className={custom1.list} href="/services">
              Services
            </Link>
          </li>
          <li>
            <Link className={custom1.list} href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Link className={custom1.btn} href="/contact">
        Reach Us
      </Link>
    </header>
  );
};

export default Navbar;
