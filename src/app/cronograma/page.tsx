import Nav from "@/components/Nav";
import { SCHEDULE, MODULE_COLORS } from "@/data/course";
import styles from "./page.module.css";

function getModNum(mod: string): number {
  if (mod.includes("Módulo 1")) return 1;
  if (mod.includes("Módulo 2")) return 2;
  if (mod.includes("Módulo 3")) return 3;
  return 0;
}

export default function CronogramaPage() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <h1 className={styles.pageTitle}>Cronograma de execução</h1>
        <p className={styles.pageSubtitle}>
          Total: 100 horas (80h presenciais + 20h plataforma)
        </p>

        <div className={styles.timeline}>
          <div className={styles.line} />
          {SCHEDULE.map((s, i) => {
            const mn = getModNum(s.module);
            const dotColor = mn ? MODULE_COLORS[mn] : "#E65100";
            return (
              <div key={i} className={styles.item}>
                <div
                  className={styles.dot}
                  style={{ background: dotColor }}
                />
                <div className={styles.itemContent}>
                  <div className={styles.itemHeader}>
                    <span className={styles.date}>{s.date}</span>
                    <span className={styles.dayPill}>{s.day}</span>
                    <span className={styles.hours}>{s.hours}</span>
                  </div>
                  <p className={styles.activity}>{s.activity}</p>
                  <span className={styles.module}>{s.module}</span>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}
