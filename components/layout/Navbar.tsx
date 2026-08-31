"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getStoredCourses, initialCourses, Course } from "@/lib/courses";

export const nesaCoursesList = initialCourses;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [courses, setCourses] = useState<Course[]>(initialCourses);
  const pathname = usePathname();

  useEffect(() => {
    setCourses(getStoredCourses());
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const filteredSearchCourses = searchQuery.trim()
    ? courses.filter(
        (c) =>
          c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          c.badge?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          background: scrolled ? "rgba(255, 255, 255, 0.98)" : "rgba(255, 255, 255, 0.92)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid #e2e8f0",
          boxShadow: scrolled ? "0 4px 24px rgba(0, 0, 0, 0.06)" : "0 2px 10px rgba(0, 0, 0, 0.02)",
          transition: "all 0.35s ease",
        }}
      >
        {/* Top Announcement Bar */}
        <div
          style={{
            background: "linear-gradient(90deg, #0E4D92 0%, #1d69ba 100%)",
            color: "#ffffff",
            padding: "5px 16px",
            fontSize: "12px",
            textAlign: "center",
            fontWeight: "600",
            letterSpacing: "0.2px",
          }}
        >
          🎓 Admissions Open 2026: Spoken English & IELTS Batches!{" "}
          <Link href="/courses" style={{ color: "#ffd166", textDecoration: "underline", marginLeft: "6px", fontWeight: "800" }}>
            Explore Courses & Register Free →
          </Link>
        </div>

        <nav
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 20px",
            height: "68px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          {/* LEFT: Menu Trigger Button (Klydo Homes style) */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: mobileOpen ? "rgba(14, 77, 146, 0.08)" : "transparent",
              border: "1px solid #cbd5e1",
              padding: "8px 14px",
              borderRadius: "10px",
              cursor: "pointer",
              color: "#0f172a",
              fontSize: "12px",
              fontWeight: "700",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              transition: "all 0.2s ease",
            }}
          >
            <svg width="20" height="12" viewBox="0 0 20 12" fill="none" stroke="#0E4D92" strokeWidth="2" strokeLinecap="round">
              <line x1="0" y1="1" x2="20" y2="1" />
              <line x1="0" y1="6" x2="20" y2="6" />
              <line x1="0" y1="11" x2="20" y2="11" />
            </svg>
            <span>{mobileOpen ? "CLOSE" : "MENU"}</span>
          </button>

          {/* CENTER: Centered Logo (Klydo Homes style) */}
          <Link
            href="/"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <div
              style={{
                background: "#0E4D92",
                color: "#ffffff",
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "900",
                fontSize: "15px",
                letterSpacing: "1px",
                boxShadow: "0 4px 12px rgba(14, 77, 146, 0.25)",
                flexShrink: 0,
              }}
            >
              N
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "Outfit, sans-serif", fontSize: "19px", fontWeight: "900", color: "#0E4D92", letterSpacing: "2px", lineHeight: 1 }}>
                NESA
              </div>
              <div style={{ fontSize: "9px", fontWeight: "700", color: "#64748b", letterSpacing: "1.5px", textTransform: "uppercase", marginTop: "1px" }} className="hidden sm:block">
                Let's Speak in English
              </div>
            </div>
          </Link>

          {/* RIGHT: Actions (Search, Admin Portal, Enroll) */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {/* Search Icon Trigger */}
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              style={{
                background: "#f1f5f9",
                border: "1px solid #cbd5e1",
                borderRadius: "10px",
                padding: "8px 12px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "6px",
                color: "#334155",
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              <span>🔍</span>
              <span className="hidden md:inline" style={{ fontSize: "12px" }}>Search</span>
            </button>

            {/* Admin Portal (Desktop) */}
            <Link
              href="/admin/login"
              className="hidden md:inline-flex btn-secondary"
              style={{ padding: "8px 14px", fontSize: "12px", borderRadius: "10px" }}
            >
              Admin 🔐
            </Link>

            {/* Enroll CTA */}
            <Link
              href="/register"
              className="btn-primary"
              style={{ padding: "8px 16px", fontSize: "12px", borderRadius: "10px" }}
            >
              Enroll 🚀
            </Link>
          </div>
        </nav>
      </header>

      {/* SEARCH MODAL OVERLAY */}
      {searchOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(15, 23, 42, 0.6)",
            backdropFilter: "blur(8px)",
            zIndex: 2000,
            display: "flex",
            justifyContent: "center",
            padding: "80px 20px 20px",
          }}
          onClick={() => setSearchOpen(false)}
        >
          <div
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              maxWidth: "600px",
              width: "100%",
              maxHeight: "500px",
              padding: "24px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3 style={{ fontSize: "18px", fontWeight: "900", color: "#0f172a" }}>Search NESA Courses</h3>
              <button onClick={() => setSearchOpen(false)} style={{ background: "none", border: "none", fontSize: "20px", cursor: "pointer", color: "#64748b" }}>✕</button>
            </div>

            <input
              type="text"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Type course name (e.g., Fluent English, IELTS)..."
              style={{
                width: "100%",
                padding: "14px 18px",
                border: "2px solid #0E4D92",
                borderRadius: "12px",
                fontSize: "15px",
                outline: "none",
              }}
            />

            <div style={{ overflowY: "auto", flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
              {searchQuery.trim() === "" ? (
                <p style={{ fontSize: "13px", color: "#94a3b8", textAlign: "center", padding: "20px" }}>Start typing to find courses...</p>
              ) : filteredSearchCourses.length === 0 ? (
                <p style={{ fontSize: "13px", color: "#ef4444", textAlign: "center", padding: "20px" }}>No courses found matching "{searchQuery}"</p>
              ) : (
                filteredSearchCourses.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/courses/${c.slug}`}
                    onClick={() => setSearchOpen(false)}
                    style={{
                      padding: "12px 16px",
                      borderRadius: "10px",
                      background: "#f8fafc",
                      textDecoration: "none",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      border: "1px solid #e2e8f0",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "14px", fontWeight: "800", color: "#0f172a" }}>{c.name}</div>
                      <div style={{ fontSize: "12px", color: "#64748b" }}>{c.desc}</div>
                    </div>
                    <div style={{ fontSize: "13px", fontWeight: "900", color: "#0E4D92" }}>{c.price}</div>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* KLYDO HOMES STYLE FULL-SCREEN SIDE MENU OVERLAY */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: "98px",
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(15, 23, 42, 0.4)",
            backdropFilter: "blur(6px)",
            zIndex: 999,
            display: "flex",
            justifyContent: "flex-start",
          }}
          onClick={() => setMobileOpen(false)}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "380px",
              height: "100%",
              background: "#ffffff",
              borderRight: "1px solid #e2e8f0",
              boxShadow: "10px 0 40px rgba(0,0,0,0.15)",
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              overflowY: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <div style={{ fontSize: "11px", fontWeight: "800", color: "#0E4D92", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>
                NAVIGATION MENU
              </div>

              {[
                { label: "🏠 Home", href: "/" },
                { label: "📚 All Courses", href: "/courses" },
                { label: "ℹ️ About NESA", href: "/about" },
                { label: "⭐ Why Choose NESA", href: "/why-nesa" },
                { label: "💬 Student Reviews", href: "/testimonials" },
                { label: "📞 Contact Admissions", href: "/contact" },
              ].map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      padding: "14px 16px",
                      borderRadius: "12px",
                      fontSize: "15px",
                      fontWeight: isActive ? "800" : "600",
                      color: isActive ? "#0E4D92" : "#0f172a",
                      background: isActive ? "#f0fcff" : "#ffffff",
                      border: isActive ? "1px solid #cceeff" : "1px solid #f1f5f9",
                      textDecoration: "none",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <span>{item.label}</span>
                    <span style={{ fontSize: "12px", color: "#64748b" }}>→</span>
                  </Link>
                );
              })}

              <hr style={{ margin: "16px 0", borderColor: "#f1f5f9" }} />

              <div style={{ fontSize: "11px", fontWeight: "800", color: "#0E4D92", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>
                FEATURED COURSES
              </div>
              {courses.slice(0, 4).map((c) => (
                <Link
                  key={c.slug}
                  href={`/courses/${c.slug}`}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    padding: "8px 12px",
                    fontSize: "13px",
                    color: "#334155",
                    textDecoration: "none",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <span>• {c.name}</span>
                  <span style={{ fontWeight: "800", color: "#0E4D92" }}>{c.price}</span>
                </Link>
              ))}
            </div>

            {/* Bottom Actions */}
            <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "10px" }}>
              <Link
                href="/admin/login"
                onClick={() => setMobileOpen(false)}
                className="btn-secondary"
                style={{ width: "100%", justifyContent: "center", padding: "12px", fontSize: "13px" }}
              >
                Admin Portal 🔐
              </Link>
              <Link
                href="/register"
                onClick={() => setMobileOpen(false)}
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center", padding: "14px", fontSize: "14px" }}
              >
                Enroll Free 🚀
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
