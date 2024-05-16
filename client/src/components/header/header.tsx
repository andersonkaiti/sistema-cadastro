"use client";

import styles from "./header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkType, navLinks } from "./nav-links";

export default function Header() {
    const path = usePathname();

    return (
        <header className={styles.header}>
            <nav>
                {navLinks.map((link: LinkType, index: number) => {
                    let isActive = path === link.href
                        || (path === "/register" && link.href === "/system")
                        || (path === "/login" && link.href === "/system");

                    return (
                        <Link
                            key={index}
                            href={link.href}
                            className={isActive ? styles.active : styles.link}
                        >
                            {link.name}
                        </Link>
                    )
                })}
            </nav>
        </header>
    );
}