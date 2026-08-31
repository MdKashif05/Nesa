"use client";
import React, { useState, useEffect } from "react";
import { getStoredCourses, Course } from "@/lib/courses";

export default function AdminAnalyticsPage() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    setCourses(getStoredCourses());
  }, []);

  const totalStudents = courses.reduce((acc, c) => acc + (c.students || 0), 0);

  return (
    <div>
      <div style={{ marginBottom: "28px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "900", color: "#0f172a" }}>
          NESA Institute Analytics 📈
        </h1>
        <p style={{ fontSize: "14px", color: "#64748b" }}>
          Real-time performance metrics, student enrollment growth, and course popularity
        </p>
      </div>

      {/* METRICS GRID */}
      <div className="responsive-grid-4" style={{ marginBottom: "32px" }}>
        <div className="card-nesa" style={{ padding: "24px" }}>
          <div style={{ fontSize: "12px", fontWeight: "800", color: "#64748b", textTransform: "uppercase", letterSpacing: "1px" }}>Total Enrolled Learners</div>
          <div style={{ fontSize: "32px", fontWeight: "900", color: "#0E4D92", margin: "8px 0" }}>{totalStudents.toLocaleString()}</div>
          <div style={{ fontSize: "12px", color: "#16a34a", fontWeight: "700" }}>↑ +14.2% this month</div>
        </div>

        <div className="card-nesa" style={{ padding: "24px" }}>
          <div style={{ fontSize: "12px", fontWeight: "800", color: "#64748b", textTransform: "uppercase", letterSpacing: "1px" }}>Active Courses</div>
          <div style={{ fontSize: "32px", fontWeight: "900", color: "#0f172a", margin: "8px 0" }}>{courses.length}</div>
          <div style={{ fontSize: "12px", color: "#0E4D92", fontWeight: "700" }}>Across 4 categories</div>
        </div>

        <div className="card-nesa" style={{ padding: "24px" }}>
          <div style={{ fontSize: "12px", fontWeight: "800", color: "#64748b", textTransform: "uppercase", letterSpacing: "1px" }}>Course Completion Rate</div>
          <div style={{ fontSize: "32px", fontWeight: "900", color: "#16a34a", margin: "8px 0" }}>94.8%</div>
          <div style={{ fontSize: "12px", color: "#16a34a", fontWeight: "700" }}>Top institute benchmark</div>
        </div>

        <div className="card-nesa" style={{ padding: "24px" }}>
          <div style={{ fontSize: "12px", fontWeight: "800", color: "#64748b", textTransform: "uppercase", letterSpacing: "1px" }}>Student Satisfaction</div>
          <div style={{ fontSize: "32px", fontWeight: "900", color: "#eab308", margin: "8px 0" }}>4.9 / 5</div>
          <div style={{ fontSize: "12px", color: "#64748b", fontWeight: "700" }}>Based on 1,200+ reviews</div>
        </div>
      </div>

      {/* CHARTS / COURSES BREAKDOWN */}
      <div className="card-nesa" style={{ padding: "28px", marginBottom: "32px" }}>
        <h2 style={{ fontSize: "18px", fontWeight: "900", color: "#0f172a", marginBottom: "20px" }}>
          Enrollments per Course
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {courses.map((c) => {
            const percentage = Math.min(100, Math.round((c.students / (totalStudents || 1)) * 300));
            return (
              <div key={c.slug}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", fontWeight: "700", marginBottom: "6px" }}>
                  <span style={{ color: "#0f172a" }}>{c.name}</span>
                  <span style={{ color: "#0E4D92" }}>{c.students} Learners</span>
                </div>
                <div style={{ height: "10px", background: "#f1f5f9", borderRadius: "5px", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${percentage}%`, background: "linear-gradient(90deg, #0E4D92 0%, #38bdf8 100%)", borderRadius: "5px" }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
