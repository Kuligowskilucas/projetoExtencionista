"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Nav.module.css";

const tabs = [
  { href: "/", label: "Início" },
  { href: "/aulas", label: "Aulas" },
  { href: "/cronograma", label: "Cronograma" },
  { href: "/exercicios", label: "Exercícios" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <span className={styles.logo}>IFPR Pinhais</span>
        {tabs.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className={`${styles.tab} ${
              pathname === t.href ? styles.active : ""
            }`}
          >
            {t.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
