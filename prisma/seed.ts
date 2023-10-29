// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();

// async function main() {
//     // clears the database
//     await prisma.user.deleteMany();

//     const sankalp = await prisma.user.create({
//         data: {
//             email: 'sankalp@gmail.com',
//             name: 'sankalp',
//             post: {
//                 create: {
                 
//                     positions: {
//                         create: [
//                             {
//                                 startTime: new Date(),
//                                 title: 'Position Title',
//                                 description: 'Position Description',
//                                 duration: new Date(),
//                                 pros: {
//                                     create: [
//                                         {
//                                             description: 'Pro Description',
//                                         },
//                                     ],
//                                 },
//                                 cons: {
//                                     create: [
//                                         {
//                                             description: 'Con Description',
//                                         },
//                                     ],
//                                 },
//                             },
//                             // Add more positions as needed
//                         ],
//                     },
//                 },
//             },
//         },
//     });
// }


// main()
//     .then(async () => {
//         await prisma.$disconnect();
//     })
//     .catch(async (e) => {
//         console.error(e);
//         await prisma.$disconnect();
//         process.exit();
//     });
