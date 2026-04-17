"use client";

import { useState } from "react";
import Link from "next/link";
import { MODULE1_LESSONS, MODULE1_EXERCISES, LessonContent, ExerciseItem } from "@/data/modulo1";
import { LEVEL_MAP } from "@/data/course";
import styles from "./page.module.css";

function Sidebar({ current, setCurrent, showEx, setShowEx }: {
  current: number; setCurrent: (n: number) => void;
  showEx: boolean; setShowEx: (b: boolean) => void;
}) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarHeader}>
        <span className={styles.modLabel}>Módulo 1</span>
        <span className={styles.modTitle}>Informática Básica, Internet e Segurança</span>
        <span className={styles.modMeta}>20 horas · 5 aulas</span>
      </div>
      <div className={styles.sidebarNav}>
        <span className={styles.navGroup}>Aulas</span>
        {MODULE1_LESSONS.map((l, i) => (
          <button
            key={l.id}
            onClick={() => { setCurrent(i); setShowEx(false); }}
            className={`${styles.navBtn} ${!showEx && current === i ? styles.navBtnActive : ""}`}
          >
            <span className={`${styles.navNum} ${!showEx && current === i ? styles.navNumActive : ""}`}>{l.id}</span>
            <span className={styles.navLabel}>{l.title}</span>
          </button>
        ))}
        <div className={styles.navDivider} />
        <button
          onClick={() => setShowEx(true)}
          className={`${styles.navBtn} ${showEx ? styles.navBtnExActive : ""}`}
        >
          <span className={`${styles.navNum} ${showEx ? styles.navNumExActive : ""}`}>🎯</span>
          <span className={styles.navLabel}>Exercícios práticos</span>
        </button>
      </div>
    </aside>
  );
}

function MobileTabs({ current, setCurrent, showEx, setShowEx }: {
  current: number; setCurrent: (n: number) => void;
  showEx: boolean; setShowEx: (b: boolean) => void;
}) {
  return (
    <div className={styles.mobileTabs}>
      {MODULE1_LESSONS.map((l, i) => (
        <button
          key={l.id}
          onClick={() => { setCurrent(i); setShowEx(false); }}
          className={`${styles.mobileTab} ${!showEx && current === i ? styles.mobileTabActive : ""}`}
        >
          Aula {l.id}
        </button>
      ))}
      <button
        onClick={() => setShowEx(true)}
        className={`${styles.mobileTab} ${showEx ? styles.mobileTabExActive : ""}`}
      >
        Exercícios
      </button>
    </div>
  );
}

function LessonView({ lesson, onNext, isLast }: {
  lesson: LessonContent; onNext: () => void; isLast: boolean;
}) {
  return (
    <article className={styles.article}>
      <div className={styles.lessonHeader}>
        <span className={styles.lessonTag}>Aula {lesson.id} de 5</span>
        <h1 className={styles.lessonTitle}>{lesson.icon} {lesson.title}</h1>
      </div>

      {lesson.sections.map((sec, si) => (
        <section key={si} className={styles.section}>
          <h2 className={styles.sectionHeading}>{sec.heading}</h2>
          <p className={styles.sectionBody}>{sec.body}</p>

          {sec.items && (
            <div className={styles.itemList}>
              {sec.items.map((item, ii) => (
                <div key={ii} className={styles.item}>
                  <div className={styles.itemTerm}>{item.term}</div>
                  <div className={styles.itemDef}>{item.def}</div>
                </div>
              ))}
            </div>
          )}

          {sec.steps && (
            <div className={styles.stepsBox}>
              {sec.steps.map((step, sti) => (
                <div key={sti} className={styles.step}>
                  <span className={styles.stepNum}>{sti + 1}</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          )}

          {sec.tip && (
            <div className={styles.tipBox}>
              <span className={styles.tipIcon}>💡</span>
              <span><strong>Dica:</strong> {sec.tip}</span>
            </div>
          )}

          {sec.warning && (
            <div className={styles.warningBox}>
              <span className={styles.tipIcon}>⚠️</span>
              <span><strong>Cuidado:</strong> {sec.warning}</span>
            </div>
          )}
        </section>
      ))}

      {!isLast && (
        <button onClick={onNext} className={styles.nextBtn}>
          Próxima aula →
        </button>
      )}
      {isLast && (
        <div className={styles.doneBox}>
          🎉 Você completou todas as aulas do Módulo 1! Agora faça os exercícios práticos para fixar o conteúdo.
        </div>
      )}
    </article>
  );
}

function ExercisesView() {
  return (
    <div className={styles.article}>
      <div className={styles.lessonHeader}>
        <span className={styles.exTag}>Módulo 1</span>
        <h1 className={styles.lessonTitle}>🎯 Exercícios práticos</h1>
        <p className={styles.exSub}>{MODULE1_EXERCISES.length} exercícios para fixar o conteúdo das 5 aulas</p>
      </div>
      <div className={styles.exGrid}>
        {MODULE1_EXERCISES.map((ex, i) => {
          const lv = LEVEL_MAP[ex.level];
          return (
            <div key={i} className={styles.exCard}>
              <div className={styles.exCardHead}>
                <span className={styles.exBadge} style={{ background: lv.bg, color: lv.color }}>{lv.label}</span>
                <span className={styles.exAula}>Aula {ex.aula}</span>
              </div>
              <h3 className={styles.exTitle}>{ex.title}</h3>
              <p className={styles.exDesc}>{ex.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Modulo1Page() {
  const [current, setCurrent] = useState(0);
  const [showEx, setShowEx] = useState(false);

  const handleNext = () => {
    setCurrent(current + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.layout}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <Link href="/" className={styles.logoLink}>
            <span className={styles.logoBox}>IF</span>
            <span className={styles.logoText}>IFPR Pinhais</span>
          </Link>
          <span className={styles.headerSep}>·</span>
          <span className={styles.headerCourse}>Qualificação em Tecnologias</span>
        </div>
        <span className={styles.headerBadge}>Módulo 1</span>
      </header>

      {/* Body */}
      <div className={styles.body}>
        <Sidebar current={current} setCurrent={setCurrent} showEx={showEx} setShowEx={setShowEx} />
        <main className={styles.main}>
          <MobileTabs current={current} setCurrent={setCurrent} showEx={showEx} setShowEx={setShowEx} />
          {showEx ? <ExercisesView /> : (
            <LessonView
              lesson={MODULE1_LESSONS[current]}
              isLast={current === MODULE1_LESSONS.length - 1}
              onNext={handleNext}
            />
          )}
        </main>
      </div>
    </div>
  );
}
