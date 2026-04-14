import Nav from "@/components/Nav";
import { MODULES } from "@/data/course";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero}>
          <span className={styles.badge}>Projeto de Extensão 2026</span>
          <h1 className={styles.title}>
            Qualificação em Tecnologias na Educação
          </h1>
          <p className={styles.subtitle}>
            IFPR Câmpus Pinhais · Comunidade Graciosa · Ago–Dez 2026
          </p>
          <div className={styles.stats}>
            {[
              { label: "Carga horária", value: "100h" },
              { label: "Vagas", value: "30" },
              { label: "Duração", value: "4 meses" },
              { label: "Equipe", value: "4 extensionistas" },
            ].map((s) => (
              <div key={s.label} className={styles.statCard}>
                <span className={styles.statLabel}>{s.label}</span>
                <span className={styles.statValue}>{s.value}</span>
              </div>
            ))}
          </div>
          <p className={styles.schedule}>
            Sábados 8h–12h · Segundas 19h–22h
          </p>
        </section>

        {/* Modules */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Estrutura do curso</h2>
          <div className={styles.moduleGrid}>
            {MODULES.map((m) => (
              <div
                key={String(m.id)}
                className={styles.moduleCard}
                style={{ borderLeftColor: m.color }}
              >
                <span className={styles.moduleIcon}>{m.icon}</span>
                <span
                  className={styles.moduleTag}
                  style={{ color: m.color }}
                >
                  {typeof m.id === "number" ? `Módulo ${m.id}` : "Módulo +"}
                </span>
                <h3 className={styles.moduleName}>{m.name}</h3>
                <p className={styles.moduleDesc}>{m.description}</p>
                <div className={styles.moduleMeta}>
                  <span className={styles.pill}>{m.hours}</span>
                  {m.lessons && (
                    <span className={styles.pill}>{m.lessons} aulas</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Coming soon */}
        <section className={styles.comingSoon}>
          <span className={styles.comingSoonIcon}>⚡</span>
          <h3 className={styles.comingSoonTitle}>
            Sistema de tarefas em breve
          </h3>
          <p className={styles.comingSoonDesc}>
            Em breve você poderá realizar exercícios diretamente nesta
            plataforma, acompanhar seu progresso e receber feedback dos
            instrutores.
          </p>
        </section>

        <footer className={styles.footer}>
          IFPR Câmpus Pinhais · Projeto de Extensão · PUCPR – ADS · 2026
        </footer>
      </main>
    </>
  );
}
