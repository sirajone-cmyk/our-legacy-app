export type Role = "STUDENT" | "TEACHER" | "ADMIN" | "PARENT";

export type UserRecord = {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  role: Role;
  madrasahId: string;
  familyId?: string;
};

export const madrasahs = [
  { id: "mad_001", name: "Nurul Ilm Madrasah", region: "Johannesburg", status: "ACTIVE" },
  { id: "mad_002", name: "Darul Huda Evening School", region: "Durban", status: "ACTIVE" }
];

export const families = [
  { id: "fam_001", name: "Patel Family", madrasahId: "mad_001", guardianEmail: "parent@ourlegacy.test" }
];

export const users: UserRecord[] = [
  {
    id: "usr_student_001",
    name: "Amina Patel",
    email: "student@ourlegacy.test",
    passwordHash: "$2a$10$3PwpKPZmsJ7PDV06oUkZbezNUUQsHoXIrCYW6eWPGiZ7da0rxo2JO",
    role: "STUDENT",
    madrasahId: "mad_001",
    familyId: "fam_001"
  },
  {
    id: "usr_teacher_001",
    name: "Ml. Yusuf Khan",
    email: "teacher@ourlegacy.test",
    passwordHash: "$2a$10$3PwpKPZmsJ7PDV06oUkZbezNUUQsHoXIrCYW6eWPGiZ7da0rxo2JO",
    role: "TEACHER",
    madrasahId: "mad_001"
  },
  {
    id: "usr_admin_001",
    name: "Admin Team",
    email: "admin@ourlegacy.test",
    passwordHash: "$2a$10$3PwpKPZmsJ7PDV06oUkZbezNUUQsHoXIrCYW6eWPGiZ7da0rxo2JO",
    role: "ADMIN",
    madrasahId: "mad_001"
  }
];

export const talimEntries = [
  {
    id: "talim_001",
    title: "Begin With Intention",
    arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ",
    translation: "Actions are only by intentions.",
    reflection:
      "A sincere intention turns ordinary moments into worship. Before study, pause and make your learning for Allah.",
    action: "Write one intention for today and complete one small act with ihsan.",
    publishDate: "2026-05-30"
  }
];

export const lessons = [
  {
    id: "lesson_001",
    title: "The Trust of Knowledge",
    level: "Foundations",
    category: "ADAB",
    teacherId: "usr_teacher_001",
    durationMinutes: 12,
    summary: "Respecting teachers, books, time, and gatherings of knowledge.",
    status: "PUBLISHED"
  },
  {
    id: "lesson_002",
    title: "Stories That Shape Us",
    level: "Foundations",
    category: "SEERAH",
    teacherId: "usr_teacher_001",
    durationMinutes: 18,
    summary: "Seerah lessons on courage, mercy, and good character at home.",
    status: "PUBLISHED"
  }
];

export const progressRecords = [
  {
    id: "prog_001",
    userId: "usr_student_001",
    lessonId: "lesson_001",
    percent: 35,
    completed: false,
    updatedAt: new Date().toISOString()
  }
];
