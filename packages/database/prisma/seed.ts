import bcrypt from "bcryptjs";
import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash("password", 10);
  const organization = await prisma.organization.upsert({
    where: { slug: "our-legacy-network" },
    update: {},
    create: {
      name: "OUR LEGACY Network",
      slug: "our-legacy-network"
    }
  });

  const madrasah = await prisma.madrasah.create({
    data: {
      organizationId: organization.id,
      name: "Nurul Ilm Madrasah",
      region: "Johannesburg"
    }
  });

  const teacher = await prisma.user.create({
    data: {
      organizationId: organization.id,
      madrasahId: madrasah.id,
      name: "Ml. Yusuf Khan",
      email: "teacher@ourlegacy.test",
      passwordHash,
      role: UserRole.TEACHER
    }
  });

  const student = await prisma.user.create({
    data: {
      organizationId: organization.id,
      madrasahId: madrasah.id,
      name: "Amina Patel",
      email: "student@ourlegacy.test",
      passwordHash,
      role: UserRole.STUDENT
    }
  });

  await prisma.user.create({
    data: {
      organizationId: organization.id,
      madrasahId: madrasah.id,
      name: "Admin Team",
      email: "admin@ourlegacy.test",
      passwordHash,
      role: UserRole.ADMIN
    }
  });

  const family = await prisma.familyAccount.create({
    data: {
      madrasahId: madrasah.id,
      name: "Patel Family",
      students: { connect: { id: student.id } }
    }
  });

  await prisma.lesson.create({
    data: {
      madrasahId: madrasah.id,
      teacherId: teacher.id,
      title: "The Trust of Knowledge",
      slug: "trust-of-knowledge",
      level: "Foundations",
      category: "ADAB",
      summary: "Respecting teachers, books, time, and gatherings of knowledge.",
      bodyMarkdown: "Knowledge is an amanah. Begin with intention, protect your time, and act on what you learn.",
      durationMinutes: 12,
      status: "PUBLISHED",
      publishedAt: new Date(),
      progress: {
        create: {
          userId: student.id,
          percent: 35
        }
      }
    }
  });

  await prisma.dailyTalim.create({
    data: {
      title: "Begin With Intention",
      arabic: "إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ",
      translation: "Actions are only by intentions.",
      reflection: "A sincere intention turns ordinary moments into worship.",
      action: "Write one intention for today and complete one small act with ihsan.",
      publishDate: new Date("2026-05-30")
    }
  });

  console.log(`Seeded OUR LEGACY data for ${organization.name}, ${madrasah.name}, and ${family.name}.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
