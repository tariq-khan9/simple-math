import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Delete all existing records
  await prisma.mathOperation.deleteMany();
  await prisma.$executeRaw`ALTER SEQUENCE "MathOperation_id_seq" RESTART WITH 1`;

  const operations = [
    {
      code: 11,
      name: "Addition Same Denoms",
      description: "Adds two numbers with same denominators",
    },
    {
      code: 12,
      name: "Addition Different Denoms",
      description: "Adds two numbers with different denoms",
    },
    {
      code: 21,
      name: "Subtraction Same Denoms",
      description: "Subtracts one number from another",
    },
    {
      code: 22,
      name: "Subtraction Different Denoms",
      description: "Subtracts one number from another",
    },
    { code: 3, name: "Multiplication", description: "Multiplies two numbers" },
    { code: 4, name: "Division", description: "Divides one number by another" },
    { code: 5, name: "Mixed", description: "mixed operation" },
    {
      code: 6,
      name: "Fraction A",
      description: "fraction a",
    },
    {
      code: 7,
      name: "Fraction B",
      description: "fraction b",
    },
    {
      code: 8,
      name: "Fraction C",
      description: "fraction c",
    },
    {
      code: 9,
      name: "Fraction D",
      description: "fraction d",
    },
    {
      code: 10,
      name: "Complex Fraction Multiply",
      description: "Complex Fraction Multiply",
    },
    {
      code: 11,
      name: "Complex Fraction Division",
      description: "Complex Fraction division",
    },
    {
      code: 12,
      name: "Complex Fraction Addition",
      description: "Complex Fraction addition",
    },
    {
      code: 13,
      name: "Complex Fraction Subtraction",
      description: "Complex Fraction subtract",
    },
    {
      code: 14,
      name: "Decimal Fraction 1",
      description: "Decimal Fraction 1",
    },
    {
      code: 15,
      name: "Decimal Fraction 2",
      description: "Decimal Fraction 2",
    },
    {
      code: 16,
      name: "Decimal Fraction 3",
      description: "Decimal Fraction 3",
    },
    {
      code: 17,
      name: "Decimal Fraction 4",
      description: "Decimal Fraction 4",
    },
  ];

  for (const operation of operations) {
    await prisma.mathOperation.create({
      data: operation,
    });
  }

  console.log("✅ Math operations table reset and seeded.");
}

main()
  .catch((e) => {
    console.error("❌ Error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
