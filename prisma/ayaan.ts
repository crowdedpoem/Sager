export const ayaan = {
  email: "ayaan@gmail.com",
  name: "ayaan",
  post: {
    create: {
      Experiences: {
        create: [
          {
            startDate: new Date(2010, 10, 8, 0, 0, 0),
            title: "Boss",
            description: "Position Description",
            endDate: new Date(2012, 11, 8, 0, 0, 0, 0),
            pros: {
              create: [
                {
                  description: "Pro Description",
                },
              ],
            },
            cons: {
              create: [
                {
                  description: "Con Description",
                },
              ],
            },
          },
          {
            startDate: new Date(2013, 1, 1, 0, 0, 0, 0),
            title: "Leader",
            description: "Position Description",
            endDate: new Date(2014, 1, 2, 0, 0, 0, 0),
            pros: {
              create: [
                {
                  description: "Pro Description",
                },
              ],
            },
            cons: {
              create: [
                {
                  description: "Con Description",
                },
              ],
            },
          },
          // Add more positions as needed
        ],
      },
    },
  },
};
