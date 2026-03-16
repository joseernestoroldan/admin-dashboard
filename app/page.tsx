import Link from "next/link";

const HomePage = () => {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 16px",
        background:
          "radial-gradient(circle at top, rgba(79,70,229,0.18), transparent 55%), radial-gradient(circle at bottom, rgba(15,23,42,0.9), #020617)",
      }}
    >
      <section
        style={{
          maxWidth: 880,
          width: "100%",
          borderRadius: 16,
          padding: "32px 28px",
          border: "1px solid rgba(55,65,81,0.7)",
          background:
            "linear-gradient(145deg, rgba(15,23,42,0.96), rgba(15,23,42,0.92))",
          boxShadow:
            "0 24px 80px rgba(0,0,0,0.75), 0 0 0 1px rgba(15,23,42,0.9)",
          display: "grid",
          gridTemplateColumns: "minmax(0, 3fr) minmax(0, 2fr)",
          gap: 32,
        }}
      >
        <div>
          <p
            style={{
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.18em",
              color: "var(--primary-400)",
              fontWeight: 600,
              marginBottom: 12,
            }}
          >
            Panel de administración moderno
          </p>
          <h1
            style={{
              fontSize: "2.25rem",
              lineHeight: 1.1,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              marginBottom: 16,
            }}
          >
            Control total de tu negocio,{" "}
            <span style={{ color: "var(--primary-400)" }}>en una sola vista</span>
          </h1>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--color-text-secondary)",
              maxWidth: 520,
              marginBottom: 24,
            }}
          >
            Este proyecto es un{" "}
            <strong style={{ fontWeight: 500 }}>dashboard de administración</strong>{" "}
            construido con Next.js y MongoDB. Te permite gestionar usuarios,
            productos, transacciones y métricas clave con una interfaz oscura,
            minimalista y enfocada en la claridad.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              marginBottom: 20,
            }}
          >
            <Link
              href="/dashboard"
              style={{
                padding: "10px 18px",
                borderRadius: 999,
                border: "1px solid rgba(79,70,229,0.9)",
                background:
                  "linear-gradient(135deg, rgba(79,70,229,0.98), rgba(37,99,235,0.95))",
                color: "#f9fafb",
                fontSize: "0.9rem",
                fontWeight: 500,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                boxShadow:
                  "0 10px 30px rgba(59,130,246,0.55), 0 0 30px rgba(99,102,241,0.45)",
                transition: "transform 150ms ease, box-shadow 150ms ease",
              }}
            >
              Entrar al dashboard
              <span
                aria-hidden="true"
                style={{ fontSize: "1rem", translate: "0 0.5px" }}
              >
                →
              </span>
            </Link>

            <Link
              href="/login"
              style={{
                padding: "10px 18px",
                borderRadius: 999,
                border: "1px solid var(--border-color)",
                backgroundColor: "rgba(15,23,42,0.7)",
                color: "var(--color-text-secondary)",
                fontSize: "0.9rem",
                fontWeight: 500,
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                backdropFilter: "blur(12px)",
              }}
            >
              Iniciar sesión
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 18,
              fontSize: "0.75rem",
              color: "var(--color-text-secondary)",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "var(--gray-400)",
                  marginBottom: 4,
                }}
              >
                Stack
              </div>
              <p>Next.js · MongoDB · UI modular</p>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "var(--gray-400)",
                  marginBottom: 4,
                }}
              >
                Enfoque
              </div>
              <p>Experiencia limpia, rápida y enfocada en datos.</p>
            </div>
          </div>
        </div>

        <aside
          aria-hidden="true"
          style={{
            alignSelf: "stretch",
            borderRadius: 16,
            border: "1px solid rgba(55,65,81,0.9)",
            background:
              "radial-gradient(circle at top left, rgba(99,102,241,0.4), transparent 55%), radial-gradient(circle at bottom right, rgba(56,189,248,0.35), transparent 55%), linear-gradient(145deg, rgba(15,23,42,0.98), rgba(15,23,42,0.96))",
            padding: 18,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 6,
            }}
          >
            <span
              style={{
                fontSize: "0.8rem",
                color: "var(--color-text-secondary)",
              }}
            >
              Resumen en tiempo real
            </span>
            <span
              style={{
                fontSize: "0.7rem",
                padding: "2px 8px",
                borderRadius: 999,
                border: "1px solid rgba(55,65,81,0.9)",
                backgroundColor: "rgba(15,23,42,0.8)",
              }}
            >
              Demo UI
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: 10,
            }}
          >
            {[
              {
                label: "Ingresos mensuales",
                value: "$84.2K",
                accent: "var(--emerald-400)",
                trend: "+18.3%",
              },
              {
                label: "Usuarios activos",
                value: "2,314",
                accent: "var(--sky-400)",
                trend: "+6.1%",
              },
              {
                label: "Tasa de conversión",
                value: "4.7%",
                accent: "var(--primary-400)",
                trend: "+1.2 pts",
              },
              {
                label: "Tickets abiertos",
                value: "32",
                accent: "var(--amber-400)",
                trend: "-9.4%",
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  borderRadius: 12,
                  padding: 10,
                  border: "1px solid rgba(55,65,81,0.9)",
                  backgroundColor: "rgba(15,23,42,0.85)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                <span
                  style={{
                    fontSize: "0.7rem",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                  }}
                >
                  {item.value}
                </span>
                <span
                  style={{
                    fontSize: "0.7rem",
                    color: item.accent,
                  }}
                >
                  {item.trend}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 4,
              fontSize: "0.7rem",
              color: "var(--color-text-secondary)",
            }}
          >
            Ideal como punto de partida para paneles personalizados de
            administración, analytics o e‑commerce.
          </div>
        </aside>
      </section>
    </main>
  );
};

export default HomePage;
