"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const courses = [
  "Spoken English (Beginner)",
  "Spoken English (Advanced)",
  "IELTS Preparation",
  "Business English",
  "Public Speaking",
  "Grammar Mastery",
  "Personality Development",
];

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", course: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "72px", background: "#f0fcff", minHeight: "100vh" }}>
        <section style={{ padding: "80px 20px" }}>
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "48px" }}>
              <span className="section-subtitle" style={{ marginBottom: "14px" }}>FREE ENROLLMENT</span>
              <h1 style={{ fontSize: "clamp(30px, 5vw, 48px)", fontWeight: "900", color: "#0f172a", marginBottom: "14px" }}>
                Register for a Course
              </h1>
              <p style={{ fontSize: "16px", color: "#64748b", lineHeight: "1.7" }}>
                Fill in the form below and our admissions team will contact you within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div style={{ background: "#ffffff", borderRadius: "20px", border: "1px solid #bbf7d0", padding: "60px 40px", textAlign: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }}>
                <div style={{ fontSize: "60px", marginBottom: "16px" }}>🎉</div>
                <h2 style={{ fontSize: "28px", fontWeight: "900", color: "#0f172a", marginBottom: "12px" }}>Registration Successful!</h2>
                <p style={{ fontSize: "16px", color: "#475569", marginBottom: "32px" }}>
                  Thank you, <strong>{form.name}</strong>! Our team will call you shortly to confirm your enrollment.
                </p>
                <Link href="/" className="btn-primary">Back to Home</Link>
              </div>
            ) : (
              <div style={{ background: "#ffffff", borderRadius: "20px", border: "1px solid #e2e8f0", padding: "48px", boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }}>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#374151", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Full Name *</label>
                    <input
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Enter your full name"
                      className="input-field"
                    />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#374151", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Email *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#374151", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Phone *</label>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="input-field"
                      />
                    </div>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#374151", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Course *</label>
                    <select
                      required
                      value={form.course}
                      onChange={e => setForm({ ...form, course: e.target.value })}
                      className="input-field"
                    >
                      <option value="">Select a course</option>
                      {courses.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: "700", color: "#374151", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>Message (Optional)</label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us your current English level, goals, or any questions..."
                      className="input-field"
                      style={{ resize: "vertical" }}
                    />
                  </div>
                  {error && <p style={{ color: "#dc2626", fontSize: "14px", background: "#fef2f2", border: "1px solid #fecaca", borderRadius: "8px", padding: "12px 16px" }}>{error}</p>}
                  <button type="submit" className="btn-primary" disabled={loading} style={{ padding: "16px", fontSize: "15px", justifyContent: "center" }}>
                    {loading ? "Submitting..." : "Register for Free 🚀"}
                  </button>
                </form>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
