"use client";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function WhyNesaPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "110px", background: "#ffffff", minHeight: "100vh" }}>
        {/* HERO */}
        <section style={{ padding: "60px 20px 80px", background: "linear-gradient(180deg, #f0fcff 0%, #ffffff 100%)", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <span className="section-subtitle" style={{ marginBottom: "14px" }}>THE NESA ADVANTAGE</span>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 54px)", fontWeight: "900", color: "#0f172a", marginBottom: "20px" }}>
              Why Choose NESA for English Speaking?
            </h1>
            <p style={{ fontSize: "17px", color: "#475569", lineHeight: "1.8", marginBottom: "32px" }}>
              NESA (Let's Speak in English) is not just a language institute; it's a transformation platform designed to take you from hesitant speaker to confident, fluent communicator.
            </p>
            <Link href="/register" className="btn-primary" style={{ padding: "16px 36px", fontSize: "16px" }}>
              Join NESA Today 🚀
            </Link>
          </div>
        </section>

        {/* 5 PILLARS */}
        <section style={{ padding: "80px 20px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "60px" }}>
              <span className="section-subtitle" style={{ marginBottom: "14px" }}>OUR CORE METHODOLOGY</span>
              <h2 style={{ fontSize: "clamp(26px, 4vw, 42px)", fontWeight: "900", color: "#0f172a" }}>
                The 5 Pillars of NESA Excellence
              </h2>
            </div>

            <div className="responsive-grid-3">
              {[
                {
                  number: "01",
                  title: "Immersive Speaking Environment",
                  desc: "100% English-only environment from day one. You practice real-world speaking in every single class through debates, discussions, and roleplay.",
                  icon: "🗣️",
                },
                {
                  number: "02",
                  title: "Personalized Coaching",
                  desc: "Small batch sizes ensure every student gets individual attention, pronunciation correction, and tailored feedback from certified trainers.",
                  icon: "👨‍🏫",
                },
                {
                  number: "03",
                  title: "Practical Grammar & Vocabulary",
                  desc: "No boring rule memorization! Learn grammar through conversation patterns, vocabulary activation, and real-life scenarios.",
                  icon: "📚",
                },
                {
                  number: "04",
                  title: "Accent & Confidence Building",
                  desc: "Overcome fear of speaking in public. Develop clear accent neutralization, vocal modulation, and commanding body language.",
                  icon: "🏆",
                },
                {
                  number: "05",
                  title: "Interview & Career Readiness",
                  desc: "Master resume writing, corporate email communication, group discussions, and high-pressure job interview questions.",
                  icon: "💼",
                },
                {
                  number: "06",
                  title: "Lifetime Alumni Support",
                  desc: "Stay connected with NESA alumni community, access free weekend practice clubs, and participate in ongoing workshops.",
                  icon: "🌟",
                },
              ].map((p) => (
                <div key={p.number} className="card-nesa" style={{ padding: "32px", position: "relative" }}>
                  <div style={{ fontSize: "36px", marginBottom: "16px" }}>{p.icon}</div>
                  <div style={{ fontSize: "12px", fontWeight: "900", color: "#0E4D92", letterSpacing: "1px", marginBottom: "6px" }}>
                    PILLAR {p.number}
                  </div>
                  <h3 style={{ fontSize: "20px", fontWeight: "800", color: "#0f172a", marginBottom: "12px" }}>{p.title}</h3>
                  <p style={{ fontSize: "14px", color: "#475569", lineHeight: "1.7" }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section style={{ padding: "80px 20px", background: "#f8fafc", borderTop: "1px solid #e2e8f0" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <span className="section-subtitle" style={{ marginBottom: "14px" }}>THE DIFFERENCE</span>
              <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: "900", color: "#0f172a" }}>
                Traditional Classes vs NESA Method
              </h2>
            </div>

            <div className="card-nesa" style={{ padding: "0", overflow: "hidden" }}>
              <div className="data-table-container">
                <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", minWidth: "600px" }}>
                  <thead>
                    <tr style={{ background: "#0E4D92", color: "#ffffff", fontSize: "13px" }}>
                      <th style={{ padding: "16px 20px" }}>FEATURE</th>
                      <th style={{ padding: "16px 20px" }}>TRADITIONAL CLASSES</th>
                      <th style={{ padding: "16px 20px", background: "#0a3a70" }}>NESA INSTITUTE 🚀</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "Focus Area", traditional: "Heavy Grammar Rules", nesa: "70% Practical Speaking & Fluency" },
                      { feature: "Class Atmosphere", traditional: "Passive Listening", nesa: "Interactive Debates & Roleplays" },
                      { feature: "Trainer Ratio", traditional: "1 : 40 Students", nesa: "1 : 12 Small Batches" },
                      { feature: "Public Speaking", traditional: "Rare / Optional", nesa: "Weekly Podium & Presentation Drills" },
                      { feature: "Course Material", traditional: "Outdated Textbooks", nesa: "Modern Digital Workbooks & AI Tools" },
                      { feature: "Guarantee", traditional: "No Support After Batch", nesa: "Lifetime Speaking Club Access" },
                    ].map((row, idx) => (
                      <tr key={row.feature} style={{ borderBottom: "1px solid #f1f5f9", background: idx % 2 === 0 ? "#ffffff" : "#f8fafc" }}>
                        <td style={{ padding: "16px 20px", fontWeight: "700", color: "#0f172a" }}>{row.feature}</td>
                        <td style={{ padding: "16px 20px", color: "#64748b" }}>❌ {row.traditional}</td>
                        <td style={{ padding: "16px 20px", color: "#0E4D92", fontWeight: "800" }}>✅ {row.nesa}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <Link href="/register" className="btn-primary" style={{ padding: "16px 36px", fontSize: "16px" }}>
                Start Your English Journey Free →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
