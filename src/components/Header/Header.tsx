"use client"

import { useRef, useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const header = useRef<HTMLDivElement>(null);
  const menu = useRef<HTMLElement>(null);
  const [drawerActive, setDrawerActive] = useState(false);

  const toggleDrawer = () => {
    const menuList = menu.current?.querySelector('ul') as HTMLElement;
    window.scrollTo(0, 0);
    setDrawerActive(!drawerActive);

    // Remember that useState values are asynchronous throughout a function
    // so they retain the old value in the flow of this code even after you
    // use setDrawerActive. So in the below conditional, you need to set
    // things accordingly. IE the opposite of a synchronous flow of code
    if (drawerActive) {
      menu.current!.style.height = '';
      // menu.current!.style.height = menuList.offsetHeight + 64 + 'px';
    } else {
      menu.current!.style.height = menuList.offsetHeight + 64 + 'px';
      // menu.current!.style.height = '';
    }
  }

  return (
    <>
    <header
      id="header"
      className={`header${drawerActive ? ' header--drawer-active' : ''}`}
      role="banner"
      ref={header}
    >
      <div className="header__inner grid">
        <div className="header__main">
          <Link
            className="header__item"
            href="/work"
          >
            Work
            <div className="header__curtain" />
          </Link>
          <Link
            className={`header__home-link`}
            href="/"
          >
            <svg className="header__logo" viewBox="0 0 40 40">
              <path d="M40 0v15l-.2.2H27.6v9.6H40V40H25.4c-5.9 0-13-6.4-13-12.3V15.2H0V0zM17.8 2.8H2.7v9.5l.2.2h9.5l.2-.2c.3-3.2 1.8-6.1 4-8.3l1.3-1.1Zm19.4 0H25c-1.9 0-5.1 1.7-6.5 3s-3.4 4.6-3.4 6.5v5.5c1.8-2 4-3.8 6.6-4.6.6-.2 2.2-.7 2.7-.7h12.7V2.8ZM24.8 15.2c-6.6.9-11 7.2-9.3 13.7 1.1 4.3 4.9 7.7 9.3 8.1zm12.4 12.3h-9.6v9.7h9.6z" />
            </svg>
            <div className="header__curtain" />
          </Link>
          <button
            className="header__hamburger"
            aria-expanded={drawerActive}
            onClick={() => {
              toggleDrawer();
            }}
          >
            Menu
            <span></span>
          </button>
          <Link
            className="header__item"
            href="/with-us"
          >
            With Us
            <div className="header__curtain" />
        </Link>
        </div>
      </div>
    </header>
    <nav
      className="menu"
      aria-label="Navigation Menu"
      ref={menu}
    >
      <ul>
        <li>
          <Link href="/work">Work</Link>
        </li>
        <li>
          <Link href="/with-us">With Us</Link>
        </li>
      </ul>
    </nav>
    </>
  );
}