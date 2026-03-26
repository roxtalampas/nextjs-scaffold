import Link from "next/link";


// Data Types for the Header Navigation
type NavLeaf = { href: string; label: string };
type NavParent = {
  label: string;
  href: string; // optional: parent can still link somewhere
  items: NavLeaf[];
};

type NavItem = NavLeaf | NavParent;

// Function to check if the item is a parent
function isParent(item: NavItem): item is NavParent {
  return "items" in item && Array.isArray((item as NavParent).items);
}

// Navigation Items
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
  return (
    <header className="site-header">
      <section>
          <div className="site-brand">
            <div className="logo">
            <Link href="/">
              <img src="/kiun-studio-logo.svg" alt="KiunStudio" />
            </Link>
            </div>
          </div>
          
          <nav className="site-nav">
            <ul className="menu">
              {nav.map((item) =>
                isParent(item) ? (
                  <li key={item.label} className="menu-item-has-children">
                    <Link href={item.href}>{item.label}</Link>
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
          
          <div className="site-btns">
             <Link className="btn-primary" href="/contact">Contact Us</Link>
          </div>
      </section>
    </header>
  )
}

export default Header