"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import { EXERCISES, LESSONS, MODULE_COLORS, LEVEL_MAP } from "@/data/course";
import styles from "./page.module.css";

const levelFilters = [
  { id: "all", label: "Todos" },
  { id: "facil", label: "Fácil" },
  { id: "medio", label: "Médio" },
  { id: "dificil", label: "Difícil" },
];

export default function ExerciciosPage() {
  const [level, setLevel] = useState("all");
  const [aula, setAula] = useState(0);

  const filtered = EXERCISES.filter(
    (e) =>
      (level === "all" || e.level === level) &&
      (aula === 0 || e.aula === aula)
  );

  const uniqueAulas = Array.from(new Set(EXERCISES.map((e) => e.aula))).sort(
    (a, b) => a - b
  );

  return (
    <>
      <Nav />
      <main className={styles.main}>
        <h1 className={styles.pageTitle}>Exercícios práticos</h1>
        <p className={styles.pageSubtitle}>
          {EXERCISES.length} exercícios ao longo do curso
        </p>

        {/* Level filters */}
        <div className={styles.filters}>
          {levelFilters.map((f) => {
            const isActive = level === f.id;
            const bg =
              isActive && f.id !== "all"
                ? LEVEL_MAP[f.id].color
                : isActive
                ? "#333"
                : undefined;
            return (
              <button
                key={f.id}
                onClick={() => setLevel(f.id)}
                className={`${styles.filterBtn} ${isActive ? styles.active : ""}`}
                style={
                  isActive ? { background: bg, color: "#fff", borderColor: "transparent" } : undefined
                }
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Aula filters */}
        <div className={styles.aulaFilters}>
          <button
            onClick={() => setAula(0)}
            className={`${styles.aulaBtn} ${aula === 0 ? styles.aulaBtnActive : ""}`}
          >
            Todas aulas
          </button>
          {uniqueAulas.map((a) => (
            <button
              key={a}
              onClick={() => setAula(a)}
              className={`${styles.aulaBtn} ${aula === a ? styles.aulaBtnActive : ""}`}
            >
              Aula {a}
            </button>
          ))}
        </div>

        {/* Exercise list */}
        {filtered.length === 0 && (
          <p className={styles.empty}>
            Nenhum exercício encontrado com estes filtros.
          </p>
        )}

        <div className={styles.grid}>
          {filtered.map((ex, i) => {
            const lvl = LEVEL_MAP[ex.level];
            const lesson = LESSONS.find((l) => l.aula === ex.aula);
            const modColor = lesson ? MODULE_COLORS[lesson.module] : "#333";

            return (
              <div key={i} className={styles.card}>
                <div className={styles.cardHeader}>
                  <span
                    className={styles.levelBadge}
                    style={{ background: lvl.bg, color: lvl.color }}
                  >
                    {lvl.label}
                  </span>
                  <span className={styles.aulaTag} style={{ color: modColor }}>
                    Aula {ex.aula}
                  </span>
                </div>
                <h3 className={styles.cardTitle}>{ex.name}</h3>
                <p className={styles.cardDesc}>{ex.desc}</p>
                <div className={styles.cardResult}>
                  <span className={styles.resultLabel}>Resultado esperado:</span>{" "}
                  {ex.result}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
