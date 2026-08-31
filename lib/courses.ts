export interface Course {
  slug: string;
  name: string;
  badge: string;
  price: string;
  lessons: number;
  students: number;
  desc: string;
  category?: string;
  duration?: string;
}

export const initialCourses: Course[] = [
  { slug: "nesa-fluent-english-level-1", name: "NESA Fluent English Level 1", badge: "POPULAR", price: "₹4,999", lessons: 12, students: 240, desc: "Comprehensive spoken English training focused on grammar, vocabulary & sentence framing.", category: "Spoken English", duration: "2 Months" },
  { slug: "nesa-fluent-english-level-2", name: "NESA Fluent English Level 2", badge: "ADVANCED", price: "₹5,999", lessons: 15, students: 180, desc: "Immersive learning experience to enhance communication skills and public speaking.", category: "Spoken English", duration: "3 Months" },
  { slug: "nesa-english-foundation", name: "NESA English Foundation", badge: "BEGINNER", price: "₹3,999", lessons: 10, students: 310, desc: "Build strong fundamental English grammar, reading comprehension, and pronunciation.", category: "Foundation", duration: "1.5 Months" },
  { slug: "spoken-english-competency", name: "NESA Professional English Course", badge: "CAREER", price: "₹6,999", lessons: 18, students: 140, desc: "Empower sentence formation, professional vocabulary, email writing & interview mastery.", category: "Career & Business", duration: "3 Months" },
  { slug: "spoken-english-proficiency", name: "NESA Spoken English Advance", badge: "PRO", price: "₹7,999", lessons: 20, students: 195, desc: "Master accent neutralization, fluent debate, group discussions and voice modulation.", category: "Spoken English", duration: "3 Months" },
  { slug: "nesa-addons", name: "NESA Corporate English Course", badge: "BUSINESS", price: "₹8,999", lessons: 16, students: 290, desc: "Executive communication, presentation skills, business negotiations & corporate etiquette.", category: "Corporate", duration: "2.5 Months" },
  { slug: "nesa-kids", name: "NESA English Course for Kids", badge: "KIDS", price: "₹3,499", lessons: 12, students: 420, desc: "Fun, interactive story-telling and phonics sessions designed specifically for young learners.", category: "Kids & Youth", duration: "2 Months" },
  { slug: "nesa-ielts", name: "NESA IELTS Preparation", badge: "EXAM", price: "₹9,999", lessons: 24, students: 520, desc: "Target 8+ band score with intensive Speaking, Listening, Reading & Writing mock drills.", category: "Test Prep", duration: "3 Months" },
  { slug: "nesa-job-skills", name: "NESA Job Skills & Interviewing", badge: "INTERVIEW", price: "₹4,999", lessons: 12, students: 290, desc: "Resume building, GD preparation, body language, and mock interview coaching.", category: "Career", duration: "1 Month" },
];

export function getStoredCourses(): Course[] {
  if (typeof window === "undefined") return initialCourses;
  try {
    const data = localStorage.getItem("nesa_courses_data");
    if (data) return JSON.parse(data);
  } catch (e) {
    console.error(e);
  }
  return initialCourses;
}

export function saveStoredCourses(courses: Course[]) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem("nesa_courses_data", JSON.stringify(courses));
  } catch (e) {
    console.error(e);
  }
}
