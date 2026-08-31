"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getStoredCourses, initialCourses, Course } from "@/lib/courses";

export const nesaCoursesList = initialCourses;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
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
    setDropdownOpen(false);
  }, [pathname]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? "rgba(255, 255, 255, 0.98)" : "#ffffff",
        borderBottom: "1px solid #e2e8f0",
        boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.08)" : "0 2px 10px rgba(0,0,0,0.03)",
        transition: "all 0.3s ease",
      }}
    >
      {/* Top Banner */}
      <div
        style={{
          background: "linear-gradient(90deg, #0E4D92 0%, #1d69ba 100%)",
          color: "#ffffff",
          padding: "6px 16px",
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
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 16px",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
        }}
      >
        {/* LOGO */}
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              background: "#0E4D92",
              color: "#ffffff",
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "900",
              fontSize: "18px",
              letterSpacing: "1px",
              boxShadow: "0 4px 12px rgba(14, 77, 146, 0.3)",
              flexShrink: 0,
            }}
          >
            NESA
          </div>
          <div>
            <div style={{ fontFamily: "Outfit, sans-serif", fontSize: "20px", fontWeight: "900", color: "#0E4D92", letterSpacing: "-0.5px", lineHeight: 1 }}>
              NESA INSTITUTE
            </div>
            <div style={{ fontSize: "10px", fontWeight: "700", color: "#64748b", letterSpacing: "1.5px", textTransform: "uppercase", marginTop: "2px" }}>
              Let's Speak in English
            </div>
          </div>
        </Link>

        {/* DESKTOP NAV LINKS */}
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }} className="hidden lg:flex">
          <Link
            href="/"
            style={{
              padding: "8px 12px",
              color: pathname === "/" ? "#0E4D92" : "#334155",
              fontWeight: pathname === "/" ? "800" : "600",
              textDecoration: "none",
              fontSize: "14px",
              borderRadius: "6px",
              background: pathname === "/" ? "rgba(14, 77, 146, 0.08)" : "transparent",
            }}
          >
            Home
          </Link>

          {/* Courses Dropdown */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link
              href="/courses"
              style={{
                padding: "8px 12px",
                color: pathname.startsWith("/courses") ? "#0E4D92" : "#334155",
                fontWeight: pathname.startsWith("/courses") ? "800" : "600",
                textDecoration: "none",
                fontSize: "14px",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                borderRadius: "6px",
                background: pathname.startsWith("/courses") ? "rgba(14, 77, 146, 0.08)" : "transparent",
              }}
            >
              All Courses <span style={{ fontSize: "10px" }}>▼</span>
            </Link>

            {dropdownOpen && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  width: "360px",
                  background: "#ffffff",
                  border: "1px solid #e2e8f0",
                  borderRadius: "14px",
                  boxShadow: "0 16px 36px rgba(0,0,0,0.12)",
                  padding: "12px",
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: "4px",
                  maxHeight: "440px",
                  overflowY: "auto",
                }}
              >
                {courses.slice(0, 8).map((course) => (
                  <Link
                    key={course.slug}
                    href={`/courses/${course.slug}`}
                    style={{
                      padding: "10px 12px",
                      borderRadius: "8px",
                      textDecoration: "none",
                      color: "#0f172a",
                      fontSize: "13px",
                      fontWeight: "600",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#f0fcff")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    <span>{course.name}</span>
                    <span style={{ fontSize: "11px", color: "#0E4D92", fontWeight: "800" }}>{course.price}</span>
                  </Link>
                ))}
                <Link
                  href="/courses"
                  style={{
                    padding: "10px",
                    textAlign: "center",
                    fontSize: "12px",
                    color: "#0E4D92",
                    fontWeight: "800",
                    textDecoration: "none",
                    borderTop: "1px solid #f1f5f9",
                    marginTop: "4px",
                  }}
                >
                  View All Courses →
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/about"
            style={{
              padding: "8px 12px",
              color: pathname === "/about" ? "#0E4D92" : "#334155",
              fontWeight: pathname === "/about" ? "800" : "600",
              textDecoration: "none",
              fontSize: "14px",
              borderRadius: "6px",
              background: pathname === "/about" ? "rgba(14, 77, 146, 0.08)" : "transparent",
            }}
          >
            About Us
          </Link>
          <Link
            href="/why-nesa"
            style={{
              padding: "8px 12px",
              color: pathname === "/why-nesa" ? "#0E4D92" : "#334155",
              fontWeight: pathname === "/why-nesa" ? "800" : "600",
              textDecoration: "none",
              fontSize: "14px",
              borderRadius: "6px",
              background: pathname === "/why-nesa" ? "rgba(14, 77, 146, 0.08)" : "transparent",
            }}
          >
            Why NESA
          </Link>
          <Link
            href="/testimonials"
            style={{
              padding: "8px 12px",
              color: pathname === "/testimonials" ? "#0E4D92" : "#334155",
              fontWeight: pathname === "/testimonials" ? "800" : "600",
              textDecoration: "none",
              fontSize: "14px",
              borderRadius: "6px",
              background: pathname === "/testimonials" ? "rgba(14, 77, 146, 0.08)" : "transparent",
            }}
          >
            Testimonials
          </Link>
          <Link
            href="/contact"
            style={{
              padding: "8px 12px",
              color: pathname === "/contact" ? "#0E4D92" : "#334155",
              fontWeight: pathname === "/contact" ? "800" : "600",
              textDecoration: "none",
              fontSize: "14px",
              borderRadius: "6px",
              background: pathname === "/contact" ? "rgba(14, 77, 146, 0.08)" : "transparent",
            }}
          >
            Contact
          </Link>
        </div>

        {/* DESKTOP CTAS */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }} className="hidden lg:flex">
          <Link href="/admin/login" className="btn-secondary" style={{ padding: "8px 16px", fontSize: "13px" }}>
            Admin Portal 🔐
          </Link>
          <Link href="/register" className="btn-primary" style={{ padding: "8px 18px", fontSize: "13px" }}>
            Enroll Now 🚀
          </Link>
        </div>

        {/* MOBILE HAMBURGER BUTTON */}
        <div className="flex lg:hidden" style={{ alignItems: "center", gap: "8px" }}>
          <Link
            href="/register"
            className="btn-primary"
            style={{ padding: "6px 12px", fontSize: "12px" }}
          >
            Enroll Free
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
            style={{
              padding: "8px 14px",
              background: mobileOpen ? "#0a3a70" : "#0E4D92",
              color: "#ffffff",
              border: "none",
              borderRadius: "8px",
              fontWeight: "700",
              fontSize: "14px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              boxShadow: "0 2px 8px rgba(14, 77, 146, 0.2)",
            }}
          >
            {mobileOpen ? "✕ Close" : "☰ Menu"}
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER MENU */}
      {mobileOpen && (
        <div
          style={{
            background: "#ffffff",
            borderTop: "1px solid #e2e8f0",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            maxHeight: "calc(100vh - 100px)",
            overflowY: "auto",
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
          }}
        >
          <Link
            href="/"
            style={{
              padding: "12px",
              fontWeight: "700",
              color: pathname === "/" ? "#0E4D92" : "#0f172a",
              textDecoration: "none",
              borderBottom: "1px solid #f1f5f9",
              background: pathname === "/" ? "#f0fcff" : "transparent",
              borderRadius: "8px",
            }}
          >
            🏠 Home
          </Link>
          <Link
            href="/courses"
            style={{
              padding: "12px",
              fontWeight: "700",
              color: pathname.startsWith("/courses") ? "#0E4D92" : "#0f172a",
              textDecoration: "none",
              borderBottom: "1px solid #f1f5f9",
              background: pathname.startsWith("/courses") ? "#f0fcff" : "transparent",
              borderRadius: "8px",
            }}
          >
            📚 All English Courses
          </Link>

          <div style={{ padding: "8px 12px 4px", fontSize: "11px", fontWeight: "800", color: "#0E4D92", letterSpacing: "1px" }}>
            POPULAR COURSES:
          </div>
          {courses.slice(0, 5).map((c) => (
            <Link
              key={c.slug}
              href={`/courses/${c.slug}`}
              style={{
                padding: "8px 16px",
                fontSize: "13px",
                color: "#334155",
                textDecoration: "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>• {c.name}</span>
              <span style={{ fontWeight: "800", color: "#0E4D92", fontSize: "11px" }}>{c.price}</span>
            </Link>
          ))}

          <Link
            href="/about"
            style={{
              padding: "12px",
              fontWeight: "700",
              color: pathname === "/about" ? "#0E4D92" : "#0f172a",
              textDecoration: "none",
              borderBottom: "1px solid #f1f5f9",
              background: pathname === "/about" ? "#f0fcff" : "transparent",
              borderRadius: "8px",
            }}
          >
            ℹ️ About Us
          </Link>
          <Link
            href="/why-nesa"
            style={{
              padding: "12px",
              fontWeight: "700",
              color: pathname === "/why-nesa" ? "#0E4D92" : "#0f172a",
              textDecoration: "none",
              borderBottom: "1px solid #f1f5f9",
              background: pathname === "/why-nesa" ? "#f0fcff" : "transparent",
              borderRadius: "8px",
            }}
          >
            ⭐ Why Choose NESA
          </Link>
          <Link
            href="/testimonials"
            style={{
              padding: "12px",
              fontWeight: "700",
              color: pathname === "/testimonials" ? "#0E4D92" : "#0f172a",
              textDecoration: "none",
              borderBottom: "1px solid #f1f5f9",
              background: pathname === "/testimonials" ? "#f0fcff" : "transparent",
              borderRadius: "8px",
            }}
          >
            💬 Student Testimonials
          </Link>
          <Link
            href="/contact"
            style={{
              padding: "12px",
              fontWeight: "700",
              color: pathname === "/contact" ? "#0E4D92" : "#0f172a",
              textDecoration: "none",
              borderBottom: "1px solid #f1f5f9",
              background: pathname === "/contact" ? "#f0fcff" : "transparent",
              borderRadius: "8px",
            }}
          >
            📞 Contact Us
          </Link>
          <Link
            href="/admin/login"
            style={{
              padding: "12px",
              fontWeight: "700",
              color: "#0E4D92",
              textDecoration: "none",
              borderBottom: "1px solid #f1f5f9",
              background: "#f0fcff",
              borderRadius: "8px",
            }}
          >
            🔐 Admin Portal Login
          </Link>

          <div style={{ display: "flex", gap: "10px", marginTop: "12px" }}>
            <Link
              href="/register"
              className="btn-primary"
              style={{ flex: 1, textAlign: "center", justifyContent: "center" }}
            >
              Enroll Free 🚀
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
