"use client";

// This component is used to wrap the main content of the page and add the page class to the main element

import { usePathname } from "next/navigation";
import type { PropsWithChildren } from "react";
import { useMemo } from "react";

function pathnameToPageClass(pathname: string): string {
    if (pathname === "/" || pathname === "") {
      return "page-home";
    }
    const raw = pathname
      .replace(/^\//, "")
      .replace(/\//g, "-")
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, "");
    return raw ? `page-${raw}` : "page-home";
  }


const PageMain = ({ children }: PropsWithChildren) => {
    const pathname = usePathname();
    const pageClass = useMemo(() => pathnameToPageClass(pathname), [pathname]);

    return (
        <main className={`site-main ${pageClass}`}>{children}</main>
  )
}

export default PageMain