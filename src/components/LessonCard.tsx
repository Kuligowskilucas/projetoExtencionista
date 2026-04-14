"use client";

import { useState } from "react";
import { Lesson, MODULE_COLORS, MODULE_BG } from "@/data/course";
import styles from "./LessonCard.module.css";

export default function LessonCard({ lesson }: { lesson: Lesson }) {
  const [open, setOpen] = useState(false);
  const color = MODULE_COLORS[lesson.module];
  const bg = MODULE_BG[lesson.module];
  const topics = lesson.content.split(" | ");
  const activities = lesson.activity.split(" | ");

  return (
    <div className={styles.card}>
      <button className={styles.header} onClick={() => setOpen(!open)}>
        <div className={styles.badge} style={{ background: bg, color }}>
          {lesson.aula}
        </div>
        <div className={styles.info}>
          <span className={styles.title}>{lesson.title}</span>
          <span className={styles.meta}>
            Módulo {lesson.module} · {lesson.hours}
          </span>
        </div>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}
        >
          <path
            d="M5 8l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div className={styles.body}>
          <div className={styles.block}>
            <span className={styles.label} style={{ color }}>
              Objetivo
            </span>
            <p className={styles.text}>{lesson.objective}</p>
          </div>

          <div className={styles.block}>
            <span className={styles.label} style={{ color }}>
              Conteúdo
            </span>
            <div className={styles.tags}>
              {topics.map((t, i) => (
                <span key={i} className={styles.tag}>
                  {t.trim()}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.block}>
            <span className={styles.label} style={{ color }}>
              Atividade prática
            </span>
            <div className={styles.activities}>
              {activities.map((a, i) => (
                <div key={i} className={styles.activityItem}>
                  <span style={{ color }} className={styles.bullet}>
                    ›
                  </span>
                  <span>{a.trim()}</span>
                </div>
              ))}
            </div>
          </div>

          <p className={styles.resources}>Recursos: {lesson.resources}</p>
        </div>
      )}
    </div>
  );
}
