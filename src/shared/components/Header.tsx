"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";


type NavLeaf = { href: string; label: string };
type NavParent = {
  label: string;
  href: string;
  items: NavLeaf[];
};

type NavItem = NavLeaf | NavParent;

function isParent(item: NavItem): item is NavParent {
  return "items" in item && Array.isArray((item as NavParent).items);
}

const nav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/projects",
    label: "Projects",
    items: [
      { href: "/projects/web", label: "Web" },
      { href: "/projects/design", label: "Design" },
    ],
  },
  { href: "/blog", label: "Blog" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.documentElement.classList.toggle("mobile-menu-open");
  };

  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  // Toggle submenu of mobile menu
  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label);
};

  return (
    <header className="site-header">
      <section>
        <div className="site-brand">
          <div className="logo">
            <Link href="/">
              <Image src="/kiun-studio-logo.svg" alt="KiunStudio" width={100} height={100} />
            </Link>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="site-nav">
          <ul className="menu">
            {nav.map((item) =>
              isParent(item) ? (
                <li key={item.label} className={`menu-item-has-children ${openSubmenu === item.label ? "submenu-open" : ""}`}>
                  <Link href={item.href}>{item.label}</Link>
                  <span className="submenu-toggle-dropdown" onClick={() => toggleSubmenu(item.label)} />
                  <ul className="sub-menu">
                      {item.items.map((sub) => (
                          <li key={sub.href}>
                              <Link href={sub.href}>{sub.label}</Link>
                          </li>
                      ))}
                  </ul>
                </li>
              ) : (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Mobile Menu */}
        <nav className="site-nav-mobile">
          {!mobileMenuOpen && (
            <svg
              className="mobile-menu-icon hamburger"
              onClick={toggleMobileMenu}
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M9.40675 30C9.01315 30 8.68029 29.8376 8.40818 29.5129C8.13606 29.1884 8 28.7863 8 28.3068C8 27.8369 8.13606 27.4411 8.40818 27.1194C8.68029 26.7974 9.01315 26.6364 9.40675 26.6364H30.5814C30.975 26.6364 31.3099 26.7988 31.5861 27.1235C31.862 27.4483 32 27.8456 32 28.3155C32 28.7951 31.862 29.1957 31.5861 29.5174C31.3099 29.8391 30.975 30 30.5814 30H9.40675ZM9.40675 21.6746C9.01315 21.6746 8.68029 21.5122 8.40818 21.1874C8.13606 20.8627 8 20.4654 8 19.9954C8 19.5255 8.13606 19.1297 8.40818 18.808C8.68029 18.4863 9.01315 18.3254 9.40675 18.3254H30.5814C30.975 18.3254 31.3099 18.4878 31.5861 18.8126C31.862 19.1373 32 19.5346 32 20.0046C32 20.4745 31.862 20.8703 31.5861 21.192C31.3099 21.5137 30.975 21.6746 30.5814 21.6746H9.40675ZM9.40675 13.3636C9.01315 13.3636 8.68029 13.2012 8.40818 12.8765C8.13606 12.5517 8 12.1496 8 11.67C8 11.2001 8.13606 10.8043 8.40818 10.4826C8.68029 10.1609 9.01315 10 9.40675 10H30.5814C30.975 10 31.3099 10.1624 31.5861 10.4871C31.862 10.8116 32 11.2089 32 11.6788C32 12.1583 31.862 12.5589 31.5861 12.8806C31.3099 13.2026 30.975 13.3636 30.5814 13.3636H9.40675Z"
                fill="#9A6F00"
              />
            </svg>
          )}

          {mobileMenuOpen && (
            <svg
              className="mobile-menu-icon cross"
              onClick={toggleMobileMenu}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 14.7197L3.28666 23.4331C2.9087 23.811 2.45542 24 1.9268 24C1.39819 24 0.9449 23.811 0.56694 23.4331C0.18898 23.0551 0 22.6018 0 22.0732C0 21.5446 0.18898 21.0913 0.56694 20.7133L9.28028 12L0.56694 3.28666C0.18898 2.9087 0 2.45542 0 1.9268C0 1.39819 0.18898 0.944899 0.56694 0.566939C0.9449 0.18898 1.39819 0 1.9268 0C2.45542 0 2.9087 0.18898 3.28666 0.566939L12 9.28028L20.7133 0.566939C21.0913 0.18898 21.5446 0 22.0732 0C22.6018 0 23.0551 0.18898 23.4331 0.566939C23.811 0.944899 24 1.39819 24 1.9268C24 2.45542 23.811 2.9087 23.4331 3.28666L14.7197 12L23.4331 20.7133C23.811 21.0913 24 21.5446 24 22.0732C24 22.6018 23.811 23.0551 23.4331 23.4331C23.0551 23.811 22.6018 24 22.0732 24C21.5446 24 21.0913 23.811 20.7133 23.4331L12 14.7197Z"
                fill="#9A6F00"
              />
            </svg>
          )}

          <div className="mobile-menu">
            <ul>
              {nav.map((item) =>
                isParent(item) ? (
                  <li key={item.label} className={`menu-item-has-children ${openSubmenu === item.label ? "submenu-open" : ""}`}>
                    <Link href={item.href}>{item.label}</Link>
                    <span className="submenu-toggle-dropdown" onClick={() => toggleSubmenu(item.label)} />
                    <ul className="sub-menu">
                        {item.items.map((sub) => (
                            <li key={sub.href}>
                                <Link href={sub.href}>{sub.label}</Link>
                            </li>
                        ))}
                    </ul>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                )
              )}
            </ul>
            <div className="mobile-cta-buttons">
              <div className="mobile-cta contact-us">
                <a href="/contact/" className="btn-secondary">Contact us</a>
              </div>
              <div className="mobile-cta telephone">
                <a href="tel:+64800880018" className="btn-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M5.79727 0.86458C5.52656 0.210674 4.81289 -0.137373 4.13086 0.0489548L1.03711 0.892705C0.425391 1.06145 0 1.61692 0 2.24974C0 10.9474 7.05234 17.9997 15.75 17.9997C16.3828 17.9997 16.9383 17.5743 17.107 16.9626L17.9508 13.8689C18.1371 13.1868 17.7891 12.4732 17.1352 12.2025L13.7602 10.7962C13.1871 10.5572 12.5227 10.7224 12.1324 11.204L10.7121 12.9372C8.23711 11.7665 6.2332 9.76263 5.0625 7.28763L6.7957 5.87083C7.27734 5.47708 7.44258 4.81614 7.20352 4.2431L5.79727 0.868096V0.86458Z"
                      fill="white"
                    />
                  </svg>
                  <span className="ml-2">0800 880 018</span>
                </a>
              </div>
            </div>
          </div>
        </nav>

        <div className="site-btns">
          <Link className="btn-primary" href="/contact">Contact Us</Link>
        </div>
      </section>
    </header>
  );
};

export default Header;