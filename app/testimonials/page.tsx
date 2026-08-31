"use client";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function TestimonialsPage() {
  const reviews = [
    {
      name: "David Warner",
      role: "QA Software Engineer",
      course: "Spoken English Advance",
      rating: "5/5",
      quote: "NESA has been a complete game-changer for me. Their immersive English programs and experienced instructors helped me gain confidence in speaking English fluently during client calls. I highly recommend NESA!",
      badge: "ALUMNI 2025",
    },
    {
      name: "Sarah Taylor",
      role: "Full Stack PHP Developer",
      course: "Business English",
      rating: "5/5",
      quote: "I'm grateful to NESA for their personalized approach to language learning. Their tailored programs and supportive faculty created a conducive environment for me. Thanks to NESA, I now lead international team meetings with ease!",
      badge: "PLACED AT MNC",
    },
    {
      name: "Rohit Patel",
      role: "Business Owner & Entrepreneur",
      course: "Public Speaking & Personality",
      rating: "5/5",
      quote: "NESA's English speaking center transformed my language skills. The interactive classes, real-life scenarios, and constant practice made learning enjoyable. The faculty's dedication truly made a difference in my business pitches.",
      badge: "BUSINESS BATCH",
    },
    {
      name: "Vikram Malhotra",
      role: "IELTS Student",
      course: "NESA IELTS Preparation",
      rating: "Band 8.5",
      quote: "The IELTS training at NESA helped me achieve Band 8.5 on my very first attempt! The mock speaking tests and individual writing corrections were outstanding.",
      badge: "IELTS TOPPER",
    },
    {
      name: "Anita Sharma",
      role: "Corporate Executive",
      course: "Corporate Communication",
      rating: "5/5",
      quote: "NESA's English speaking center provided me with a nurturing platform to improve my vocabulary and accent. The supportive instructors and well-designed curriculum accelerated my career promotion.",
      badge: "EXECUTIVE",
    },
    {
      name: "Olivar Lucy",
      role: "UI/UX Designer",
      course: "Spoken English Level 2",
      rating: "5/5",
      quote: "Choosing NESA was the best decision I made for my English fluency. The dynamic learning environment and engaging group discussions made the entire experience enriching.",
      badge: "DESIGNER",
    },
    {
      name: "Pooja Verma",
      role: "College Student",
      course: "English Foundation",
      rating: "5/5",
      quote: "I used to be terrified of speaking in front of my classmates. NESA trainers helped me build stage courage step by step. Now I anchor college events effortlessly!",
      badge: "STUDENT",
    },
    {
      name: "Aman Gupta",
      role: "Sales Specialist",
      course: "Job Skills & Interviewing",
      rating: "5/5",
      quote: "The mock interviews at NESA cleared all my hesitation. I cracked 3 job offers in one week after completing the NESA Job Skills course!",
      badge: "PLACED",
    },
  ];

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "110px", background: "#f8fafc", minHeight: "100vh" }}>
        <section style={{ padding: "60px 20px 80px", background: "#ffffff", borderBottom: "1px solid #e2e8f0", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <span className="section-subtitle" style={{ marginBottom: "14px" }}>STUDENT SUCCESS STORIES</span>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: "900", color: "#0f172a", marginBottom: "16px" }}>
              What Our 10,000+ Students Say
            </h1>
            <p style={{ fontSize: "17px", color: "#475569", lineHeight: "1.7", marginBottom: "32px" }}>
              Real reviews from working professionals, students, job seekers, and business leaders who transformed their English fluency with NESA.
            </p>
            <div style={{ display: "flex", gap: "20px", justifyContent: "center", flexWrap: "wrap", fontSize: "15px", fontWeight: "800", color: "#0E4D92" }}>
              <span>⭐ 4.9/5 Overall Rating</span>
              <span>•</span>
              <span>🎓 10,000+ Certified Graduates</span>
              <span>•</span>
              <span>🏆 98% Satisfaction</span>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS GRID */}
        <section style={{ padding: "80px 20px" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div className="responsive-grid-3">
              {reviews.map((r) => (
                <div key={r.name} className="card-nesa" style={{ padding: "30px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
                      <span style={{ background: "#f0fcff", color: "#0E4D92", padding: "4px 10px", borderRadius: "12px", fontSize: "11px", fontWeight: "800", border: "1px solid #cceeff" }}>
                        {r.badge}
                      </span>
                      <span style={{ fontSize: "13px", fontWeight: "800", color: "#eab308" }}>
                        {"★".repeat(5)} ({r.rating})
                      </span>
                    </div>
                    <p style={{ fontSize: "14px", color: "#334155", lineHeight: "1.7", fontStyle: "italic", marginBottom: "24px" }}>
                      "{r.quote}"
                    </p>
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: "14px", borderTop: "1px solid #f1f5f9", paddingTop: "16px" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#0E4D92", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "900", fontSize: "18px", flexShrink: 0 }}>
                      {r.name[0]}
                    </div>
                    <div>
                      <div style={{ fontSize: "15px", fontWeight: "800", color: "#0f172a" }}>{r.name}</div>
                      <div style={{ fontSize: "12px", color: "#64748b" }}>{r.role}</div>
                      <div style={{ fontSize: "11px", color: "#0E4D92", fontWeight: "700", marginTop: "2px" }}>Course: {r.course}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div style={{ marginTop: "60px", background: "#0E4D92", color: "#ffffff", borderRadius: "20px", padding: "50px 30px", textAlign: "center" }}>
              <h2 style={{ fontSize: "28px", fontWeight: "900", color: "#ffffff", marginBottom: "14px" }}>
                Ready to write your own success story?
              </h2>
              <p style={{ fontSize: "16px", color: "#e2e8f0", maxWidth: "600px", margin: "0 auto 28px" }}>
                Book a free demo session today and see how NESA can boost your English speaking confidence in 30 days!
              </p>
              <Link href="/register" className="btn-primary" style={{ background: "#ffffff", color: "#0E4D92", fontSize: "15px", padding: "16px 36px", fontWeight: "900" }}>
                Enroll for Free Demo 🚀
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
