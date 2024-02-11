import { ayaan } from "./ayaan";
import { sankalp } from "./sankalp";
import { marketer1 } from "./marketer1";
import { marketer2 } from "./marketer2";
import { marketer3 } from "./marketer3";
import { marketer4 } from "./marketer4";

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  
  const resSan = await prisma.user.create({
    data: sankalp
  });
  const resAyaan = await prisma.user.create({
    data: ayaan
  });
  const resM1 = await prisma.user.create({
    data: marketer1
  });
  const resM2 = await prisma.user.create({
    data: marketer2
  });
  const resM3 = await prisma.user.create({
    data: marketer3
  });
  const resM4 = await prisma.user.create({
    data: marketer4
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
