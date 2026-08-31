"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("admin@nesainstitute.com");
  const [password, setPassword] = useState("Admin@123456");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    if (email && password && password.length >= 6) {
      localStorage.setItem("nesa_admin_auth", "true");
      router.push("/admin");
    } else {
      setError("Please enter a valid admin email and password (minimum 6 characters).");
      setSubmitting(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(180deg, #f0fcff 0%, #ffffff 100%)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}>
      <div className="card-nesa" style={{ maxWidth: "440px", width: "100%", padding: "40px" }}>
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <div style={{ background: "#0E4D92", color: "#ffffff", padding: "10px 20px", borderRadius: "14px", fontWeight: "900", fontSize: "24px", display: "inline-block", marginBottom: "12px", boxShadow: "0 4px 14px rgba(14, 77, 146, 0.3)" }}>
            NESA
          </div>
          <h1 style={{ fontSize: "24px", fontWeight: "900", color: "#0f172a" }}>
            Admin Portal Login 🔐
          </h1>
          <p style={{ fontSize: "13px", color: "#64748b", marginTop: "4px" }}>
            Access NESA Institute Course & Student Control Panel
          </p>
        </div>

        {/* Credentials Tip Banner */}
        <div style={{ background: "#f0fcff", border: "1px solid #cceeff", color: "#0E4D92", padding: "12px 14px", borderRadius: "10px", fontSize: "12px", marginBottom: "24px", lineHeight: "1.5" }}>
          <strong>🔑 Demo Admin Credentials:</strong><br />
          Email: <code style={{ fontWeight: "700" }}>admin@nesainstitute.com</code><br />
          Password: <code style={{ fontWeight: "700" }}>Admin@123456</code>
        </div>

        {error && (
          <div style={{ background: "#fee2e2", border: "1px solid #fecaca", color: "#b91c1c", padding: "12px", borderRadius: "8px", fontSize: "13px", marginBottom: "20px" }}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div>
            <label style={{ fontSize: "13px", fontWeight: "700", color: "#475569", display: "block", marginBottom: "6px" }}>Admin Email *</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@nesainstitute.com"
              style={{ width: "100%", padding: "12px 14px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "14px", outline: "none" }}
            />
          </div>

          <div>
            <label style={{ fontSize: "13px", fontWeight: "700", color: "#475569", display: "block", marginBottom: "6px" }}>Password *</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{ width: "100%", padding: "12px 14px", borderRadius: "8px", border: "1px solid #cbd5e1", fontSize: "14px", outline: "none" }}
            />
          </div>

          <button type="submit" disabled={submitting} className="btn-primary" style={{ padding: "14px", fontSize: "15px", width: "100%", justifyContent: "center" }}>
            {submitting ? "Logging in..." : "Login to Control Panel 🔐"}
          </button>
        </form>

        <div style={{ textAlign: "center", marginTop: "24px", fontSize: "13px" }}>
          <Link href="/" style={{ color: "#0E4D92", textDecoration: "none", fontWeight: "700" }}>
            ← Back to NESA Main Website
          </Link>
        </div>
      </div>
    </div>
  );
}
