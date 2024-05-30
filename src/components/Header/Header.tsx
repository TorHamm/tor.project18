"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(true);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header onMouseLeave={() => menuOpen && setMenuOpen(!menuOpen)}>
      <nav>
        <Link href='/'>
          <Image
            src='/assets/shared/desktop/logo-dark.png'
            alt='DESIGNO'
            width={202}
            height={27}></Image>
        </Link>
        {isMobile ? (
          <>
            <Image
              src={
                menuOpen
                  ? "/assets/shared/mobile/icon-close.svg"
                  : "/assets/shared/mobile/icon-hamburger.svg"
              }
              alt='menu'
              width={menuOpen ? 20 : 24}
              height={20}
              className='menuIcon'
              onClick={() => setMenuOpen(!menuOpen)}></Image>
            <ul className={`menu ${menuOpen ? "" : "hidden"}`}>
              <Link href={"/about-us"}>
                <li>OUR COMPANY</li>
              </Link>
              <Link href={"/locations"}>
                <li>LOCATIONS</li>
              </Link>
              <Link href={"/contact"}>
                <li>CONTACT</li>
              </Link>
            </ul>
          </>
        ) : (
          <h1>LATOP OR DESKTOP</h1>
        )}
      </nav>
    </header>
  );
};

export default Header;
