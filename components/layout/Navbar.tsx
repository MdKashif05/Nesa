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
          background: scrolled ? "rgba(255,255,255,0.98)" : "rgba(255,255,255,0.95)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid #e2e8f0",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.06)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        {/* ── Top Announcement Bar ── */}
        <div
          style={{
            background: "linear-gradient(90deg, #0E4D92, #1d69ba)",
            color: "#fff",
            padding: "5px 16px",
            fontSize: "11px",
            textAlign: "center",
            fontWeight: "600",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          🎓 Admissions Open 2026: Spoken English & IELTS Batches!
        </div>

        {/* ── Main Nav Bar ── */}
        <nav
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 12px",
            height: "56px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* LEFT: Hamburger only */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              background: mobileOpen ? "rgba(14,77,146,0.06)" : "transparent",
              border: "1px solid #dde3ea",
              padding: "6px 10px",
              borderRadius: "8px",
              cursor: "pointer",
              color: "#0f172a",
              fontSize: "11px",
              fontWeight: "800",
              letterSpacing: "1px",
              textTransform: "uppercase",
              flexShrink: 0,
            }}
          >
            {mobileOpen ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#0E4D92" strokeWidth="2" strokeLinecap="round">
                <line x1="2" y1="2" x2="14" y2="14" />
                <line x1="14" y1="2" x2="2" y2="14" />
              </svg>
            ) : (
              <svg width="18" height="12" viewBox="0 0 20 12" fill="none" stroke="#0E4D92" strokeWidth="2" strokeLinecap="round">
                <line x1="0" y1="1" x2="20" y2="1" />
                <line x1="0" y1="6" x2="14" y2="6" />
                <line x1="0" y1="11" x2="20" y2="11" />
              </svg>
            )}
            <span className="hidden sm:inline">{mobileOpen ? "CLOSE" : "MENU"}</span>
          </button>

          {/* CENTER: Logo — always centered */}
          <Link
            href="/"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: "7px",
            }}
          >
            <div
              style={{
                background: "#0E4D92",
                color: "#fff",
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "900",
                fontSize: "15px",
                boxShadow: "0 2px 8px rgba(14,77,146,0.3)",
                flexShrink: 0,
              }}
            >
              N
            </div>
            <div style={{ fontFamily: "Outfit, sans-serif", fontSize: "18px", fontWeight: "900", color: "#0E4D92", letterSpacing: "2px", lineHeight: 1 }}>
              NESA
            </div>
          </Link>

          {/* RIGHT: Search icon + Sign In (icon only on mobile) */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", flexShrink: 0 }}>
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
              style={{
                background: "#f1f5f9",
                border: "1px solid #dde3ea",
                borderRadius: "8px",
                width: "36px",
                height: "36px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
                flexShrink: 0,
              }}
            >
              🔍
            </button>

            <Link
              href="/admin/login"
              aria-label="Sign In"
              style={{
                background: "#f1f5f9",
                border: "1px solid #dde3ea",
                borderRadius: "8px",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                fontSize: "16px",
                flexShrink: 0,
              }}
            >
              👤
            </Link>
          </div>
        </nav>
      </header>

      {/* ── SEARCH MODAL ── */}
      {searchOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(15,23,42,0.55)",
            backdropFilter: "blur(8px)",
            zIndex: 2000,
            display: "flex",
            justifyContent: "center",
            padding: "70px 16px 16px",
          }}
          onClick={() => setSearchOpen(false)}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "16px",
              maxWidth: "520px",
              width: "100%",
              maxHeight: "460px",
              padding: "20px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3 style={{ fontSize: "16px", fontWeight: "900", color: "#0f172a" }}>Search Courses</h3>
              <button onClick={() => setSearchOpen(false)} style={{ background: "none", border: "none", fontSize: "20px", cursor: "pointer", color: "#64748b" }}>✕</button>
            </div>
            <input
              type="text"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Type course name (e.g. IELTS, Fluent English)..."
              style={{ width: "100%", padding: "12px 16px", border: "2px solid #0E4D92", borderRadius: "10px", fontSize: "14px", outline: "none" }}
            />
            <div style={{ overflowY: "auto", flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
              {searchQuery.trim() === "" ? (
                <p style={{ fontSize: "13px", color: "#94a3b8", textAlign: "center", padding: "16px" }}>Start typing to search courses...</p>
              ) : filteredSearchCourses.length === 0 ? (
                <p style={{ fontSize: "13px", color: "#ef4444", textAlign: "center", padding: "16px" }}>No courses found matching &quot;{searchQuery}&quot;</p>
              ) : (
                filteredSearchCourses.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/courses/${c.slug}`}
                    onClick={() => setSearchOpen(false)}
                    style={{ padding: "10px 14px", borderRadius: "8px", background: "#f8fafc", textDecoration: "none", display: "flex", justifyContent: "space-between", alignItems: "center", border: "1px solid #e2e8f0" }}
                  >
                    <div>
                      <div style={{ fontSize: "13px", fontWeight: "800", color: "#0f172a" }}>{c.name}</div>
                      <div style={{ fontSize: "11px", color: "#64748b" }}>{c.desc}</div>
                    </div>
                    <div style={{ fontSize: "12px", fontWeight: "900", color: "#0E4D92", flexShrink: 0, marginLeft: "8px" }}>{c.price}</div>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── SIDE DRAWER MENU ── */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: "84px",
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(15,23,42,0.35)",
            backdropFilter: "blur(4px)",
            zIndex: 999,
          }}
          onClick={() => setMobileOpen(false)}
        >
          <div
            style={{
              width: "85%",
              maxWidth: "320px",
              height: "100%",
              background: "#fff",
              borderRight: "1px solid #e2e8f0",
              boxShadow: "8px 0 30px rgba(0,0,0,0.12)",
              padding: "20px 16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              overflowY: "auto",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <div style={{ fontSize: "10px", fontWeight: "800", color: "#0E4D92", letterSpacing: "2px", marginBottom: "8px" }}>NAVIGATE</div>

              {[
                { label: "Home", href: "/", icon: "🏠" },
                { label: "All Courses", href: "/courses", icon: "📚" },
                { label: "About NESA", href: "/about", icon: "ℹ️" },
                { label: "Why Choose NESA", href: "/why-nesa", icon: "⭐" },
                { label: "Student Reviews", href: "/testimonials", icon: "💬" },
                { label: "Contact Admissions", href: "/contact", icon: "📞" },
              ].map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      padding: "12px 14px",
                      borderRadius: "10px",
                      fontSize: "14px",
                      fontWeight: isActive ? "800" : "600",
                      color: isActive ? "#0E4D92" : "#0f172a",
                      background: isActive ? "#f0fcff" : "transparent",
                      border: isActive ? "1px solid #cceeff" : "1px solid transparent",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <span>{item.icon}</span>
                    <span style={{ flex: 1 }}>{item.label}</span>
                    <span style={{ fontSize: "11px", color: "#94a3b8" }}>›</span>
                  </Link>
                );
              })}

              <hr style={{ margin: "12px 0", borderColor: "#f1f5f9" }} />

              <div style={{ fontSize: "10px", fontWeight: "800", color: "#0E4D92", letterSpacing: "2px", marginBottom: "6px" }}>POPULAR COURSES</div>
              {courses.slice(0, 4).map((c) => (
                <Link
                  key={c.slug}
                  href={`/courses/${c.slug}`}
                  onClick={() => setMobileOpen(false)}
                  style={{ padding: "6px 10px", fontSize: "12px", color: "#334155", textDecoration: "none", display: "flex", justifyContent: "space-between" }}
                >
                  <span>• {c.name}</span>
                  <span style={{ fontWeight: "800", color: "#0E4D92", fontSize: "11px" }}>{c.price}</span>
                </Link>
              ))}
            </div>

            {/* Bottom CTAs inside drawer */}
            <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "8px" }}>
              <Link
                href="/admin/login"
                onClick={() => setMobileOpen(false)}
                className="btn-secondary"
                style={{ width: "100%", justifyContent: "center", padding: "11px", fontSize: "12px" }}
              >
                🔑 Admin / Sign In
              </Link>
              <Link
                href="/register"
                onClick={() => setMobileOpen(false)}
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center", padding: "13px", fontSize: "13px" }}
              >
                Enroll Free Now 🚀
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
