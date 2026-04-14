"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import LessonCard from "@/components/LessonCard";
import { LESSONS, MODULE_COLORS } from "@/data/course";
import styles from "./page.module.css";

const filters = [
  { id: 0, label: "Todas" },
  { id: 1, label: "Módulo 1" },
  { id: 2, label: "Módulo 2" },
  { id: 3, label: "Módulo 3" },
];

export default function AulasPage() {
  const [mod, setMod] = useState(0);
  const filtered = mod === 0 ? LESSONS : LESSONS.filter((l) => l.module === mod);

  return (
    <>
      <Nav />
      <main className={styles.main}>
        <h1 className={styles.pageTitle}>Plano de aulas</h1>
        <p className={styles.pageSubtitle}>
          {LESSONS.length} aulas distribuídas em 3 módulos
        </p>

        <div className={styles.filters}>
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setMod(f.id)}
              className={`${styles.filterBtn} ${mod === f.id ? styles.active : ""}`}
              style={
                mod === f.id
                  ? { background: MODULE_COLORS[f.id] || "#333", color: "#fff", borderColor: "transparent" }
                  : undefined
              }
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className={styles.list}>
          {filtered.map((l) => (
            <LessonCard key={l.aula} lesson={l} />
          ))}
        </div>
      </main>
    </>
  );
}
