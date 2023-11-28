import { ayaan } from "./ayaan";
import { sankalp } from "./sankalp";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deletemany();
  
  const resSan = await prisma.user.create({
    data: sankalp,
  });
  const resAyaan = await prisma.user.create({
    data: ayaan,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit();
  });
