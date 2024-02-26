const users = [{
  views: 0, email: "alexandra_garcia@example.com",
  name: "Alexandra Garcia",
  Experiences: {
    create: [
      {
        startDate: new Date(2019, 2, 10),
        endDate: new Date(2022, 4, 25),
        title: "UX/UI Designer",
        description: "Designed user interfaces and user experiences for web and mobile applications.",
        pros: {
          create: [
            { description: "Created intuitive and visually appealing designs that enhanced user satisfaction." },
            { description: "Collaborated closely with development teams to ensure design feasibility." },
            { description: "Conducted user research and usability testing to inform design decisions." }
          ]
        },
        cons: {
          create: [
            { description: "Balancing design aesthetics with technical constraints was sometimes challenging." },
            { description: "Limited access to user feedback and data for iterative design improvements." }
          ]
        },
        dayEvents: {
          create: [
            { description: "Participated in design sprints to rapidly prototype and iterate on new features." },
            { description: "Presented design concepts to stakeholders for feedback and iteration." },
            { description: "Attended industry conferences and workshops to stay updated on design trends." }
          ]
        }
      },
      // Add more experiences for Alexandra Garcia as needed
    ]
  }
},


 {
  views: 0, email: "dr_johndoe@example.com",
  name: "Dr. John Doe",
  Experiences: {
    create: [
      {
        startDate: new Date(2015, 0, 1),
        endDate: new Date(2018, 11, 31),
        title: "Resident Physician",
        description: "Completed residency training in internal medicine at General Hospital.",
        pros: {
          create: [
            { description: "Developed strong diagnostic and patient management skills." },
            { description: "Participated in interdisciplinary patient care teams for comprehensive treatment." }
          ]
        },
        cons: {
          create: [
            { description: "Long hours and demanding workload impacted work-life balance." },
            { description: "Limited time for continuing medical education and research during residency." }
          ]
        },
        dayEvents: {
          create: [
            { description: "Attended daily morning rounds to discuss patient cases with attending physicians." },
            { description: "Participated in weekly grand rounds to present interesting medical cases and research." },
            { description: "Performed clinical rotations in various specialties, including cardiology and neurology." }
          ]
        }
      },
      {
        startDate: new Date(2019, 0, 1),
        endDate: new Date(2022, 11, 31),
        title: "Attending Physician",
        description: "Provided primary care services at Urban Medical Center, focusing on preventive care and chronic disease management.",
        pros: {
          create: [
            { description: "Established long-term relationships with patients to provide continuity of care." },
            { description: "Implemented evidence-based guidelines for disease prevention and health promotion." },
            { description: "Mentored medical residents and students in clinical practice and decision-making." }
          ]
        },
        cons: {
          create: [
            { description: "High patient volume and administrative tasks limited time for thorough patient evaluations." },
            { description: "Challenges in coordinating care among specialists and community resources." }
          ]
        },
        dayEvents: {
          create: [
            { description: "Conducted comprehensive annual wellness exams for Medicare patients." },
            { description: "Facilitated group educational sessions on diabetes management and healthy lifestyle habits." },
            { description: "Attended medical conferences to stay updated on advances in primary care and internal medicine." }
          ]
        }
      },
      {
        startDate: new Date(2023, 0, 1),
        endDate: new Date(2023, 11, 31),
        title: "Chief Medical Officer",
        description: "Provided strategic leadership and oversight for clinical operations and quality improvement initiatives at Metropolitan Health System.",
        pros: {
          create: [
            { description: "Implemented quality improvement projects resulting in improved patient outcomes and satisfaction." },
            { description: "Led multidisciplinary teams to develop clinical protocols and standardize care practices." }
          ]
        },
        cons: {
          create: [
            { description: "Balancing administrative responsibilities with clinical duties was challenging." },
            { description: "Navigating healthcare regulatory requirements and compliance issues required ongoing attention." }
          ]
        },
        dayEvents: {
          create: [
            { description: "Participated in executive leadership meetings to align organizational goals and priorities." },
            { description: "Developed strategic plans to enhance patient safety and quality of care across the health system." },
            { description: "Collaborated with IT department to implement electronic health record upgrades and interoperability solutions." }
          ]
        }
      }
      // Add more experiences for Dr. John Doe as needed
    ]
  }
},

{
  views: 0, email: "lawyerjane@example.com",
  name: "Jane Smith, Esq.",
  Experiences: {
    create: [
      {
        startDate: new Date(2012, 6, 1),
        endDate: new Date(2015, 5, 30),
        title: "Associate Attorney",
        description: "Worked at Smith & Associates Law Firm specializing in corporate law.",
        pros: {
          create: [
            { description: "Successfully negotiated complex business contracts and agreements." },
            { description: "Provided legal counsel to corporate clients on compliance matters and risk management." }
          ]
        },
        cons: {
          create: [
            { description: "Long hours and high-pressure environment led to work-life balance challenges." },
            { description: "Limited opportunities for courtroom experience and trial advocacy." }
          ]
        },
        dayEvents: {
          create: [
            { description: "Drafted legal documents including contracts, memos, and briefs for client matters." },
            { description: "Attended client meetings and participated in strategy sessions with senior attorneys." },
            { description: "Researched case law and statutes to support legal arguments and opinions." }
          ]
        }
      },
      {
        startDate: new Date(2016, 0, 1),
        endDate: new Date(2021, 11, 31),
        title: "Senior Counsel",
        description: "Served as in-house counsel at Legal Solutions Inc., specializing in intellectual property law.",
        pros: {
          create: [
            { description: "Led trademark and patent portfolio management, securing valuable intellectual property rights." },
            { description: "Provided legal guidance on technology licensing agreements and copyright protection." }
          ]
        },
        cons: {
          create: [
            { description: "Navigating complex legal frameworks in emerging technologies required ongoing education and adaptation." },
            { description: "Balancing legal risks with business objectives and innovation strategies was challenging." }
          ]
        },
        dayEvents: {
          create: [
            { description: "Reviewed and negotiated technology licensing agreements with third-party vendors." },
            { description: "Collaborated with R&D teams to conduct IP due diligence for new product launches." },
            { description: "Participated in industry conferences and workshops on IP law and technology trends." }
          ]
        }
      }
      // Add more experiences for Jane Smith, Esq. as needed
    ]
  }
}, 
{
  views: 0, email: "constructionboss@example.com",
  name: "Tom Johnson",
  Experiences: {
    create: [
      {
        startDate: new Date(2015, 3, 15),
        endDate: new Date(2018, 6, 30),
        title: "Assistant Project Manager",
        description: "Assisted in managing construction projects including scheduling, budgeting, and subcontractor coordination.",
        pros: {
          create: [
            { description: "Learned project management skills and construction techniques under experienced professionals." },
            { description: "Developed strong communication and leadership skills while working in a fast-paced environment." }
          ]
        },
        cons: {
          create: [
            { description: "Challenges in coordinating multiple subcontractors and resolving on-site issues." },
            { description: "Limited autonomy and decision-making authority as an assistant manager." }
          ]
        },
        dayEvents: {
          create: [
            { description: "Participated in project meetings to discuss progress, issues, and action plans." },
            { description: "Coordinated with subcontractors and suppliers to ensure timely delivery of materials and equipment." },
            { description: "Performed site inspections and quality control checks to ensure compliance with project specifications." }
          ]
        }
      },
      {
        startDate: new Date(2019, 0, 1),
        endDate: new Date(2022, 11, 31),
        title: "Project Manager",
        description: "Managed commercial construction projects from inception to completion, overseeing all aspects of project execution.",
        pros: {
          create: [
            { description: "Successfully completed multiple projects on time and within budget, exceeding client expectations." },
            { description: "Led and motivated project teams to achieve project goals and maintain high-quality standards." }
          ]
        },
        cons: {
          create: [
            { description: "Managing project risks and unforeseen challenges required adaptability and problem-solving skills." },
            { description: "Balancing competing priorities and stakeholder interests in project decision-making was challenging." }
          ]
        },
        dayEvents: {
          create: [
            { description: "Conducted project kickoff meetings to define project scope, objectives, and deliverables." },
            { description: "Managed project budgets, schedules, and resources to ensure efficient project delivery." },
            { description: "Communicated regularly with clients and stakeholders to provide project updates and address concerns." }
          ]
        }
      }
      // Add more experiences for Tom Johnson as needed
    ]
  }
},
{
  views: 0, email: "counselorjenny@example.com",
  name: "Jennifer Thompson",
  Experiences: {
    create: [
      {
        startDate: new Date(2013, 8, 1),
        endDate: new Date(2017, 5, 30),
        title: "School Counselor Intern",
        description: "Completed internship at Local High School, providing counseling services to students.",
        pros: {
          create: [
            { description: "Gained hands-on experience in individual and group counseling sessions with students." },
            { description: "Assisted in developing and implementing school-wide programs to promote mental health and well-being." }
          ]
        },
        cons: {
          create: [
            { description: "Challenges in balancing caseload and administrative tasks during busy school semesters." },
            { description: "Limited experience in addressing complex mental health issues and crises." }
          ]
        },
        dayEvents: {
          create: [
            { description: "Conducted academic and career counseling sessions to help students explore post-secondary options." },
            { description: "Facilitated peer support groups and workshops on stress management and coping skills." },
            { description: "Collaborated with teachers and parents to address student behavioral and academic concerns." }
          ]
        }
      },
      {
        startDate: new Date(2018, 0, 1),
        endDate: new Date(2022, 7, 31),
        title: "High School Counselor",
        description: "Provided comprehensive counseling services to students, addressing academic, social, and emotional needs.",
        pros: {
          create: [
            { description: "Developed trusting relationships with students and provided ongoing support and guidance." },
            { description: "Implemented evidence-based interventions to support student mental health and well-being." }
          ]
        },
        cons: {
          create: [
            { description: "Managing large caseloads and addressing diverse student needs required strong organizational skills." },
            { description: "Navigating confidentiality and privacy concerns in counseling sessions was challenging." }
          ]
        },
        dayEvents: {
          create: [
            { description: "Conducted individual counseling sessions to address student academic and personal concerns." },
            { description: "Coordinated college and career readiness programs, including college application workshops and job fairs." },
            { description: "Provided crisis intervention and support for students experiencing emotional distress or behavioral issues." }
          ]
        }
      }
      // Add more experiences for Jennifer Thompson as needed
    ]
  }
},
{
  views: 0, email: "drsmith@example.com",
  name: "Dr. Emily Smith",
  Experiences: {
    create: [
      {
        startDate: new Date(2010, 0, 1),
        endDate: new Date(2015, 11, 31),
        title: "Medical Resident",
        description: "Completed residency training in internal medicine at City Hospital.",
        pros: {
          create: [
            { description: "Gained hands-on experience in diagnosing and treating various medical conditions." },
            { description: "Developed strong clinical skills in patient assessment, management, and documentation." }
          ]
        },
        cons: {
          create: [
            { description: "Long hours and demanding workload affected work-life balance." },
            { description: "Navigating complex medical cases and treatment plans required continuous learning." }
          ]
        },
        dayEvents: {
          create: [
            { description: "Participated in morning rounds to discuss patient cases and treatment plans with attending physicians." },
            { description: "Conducted patient consultations and physical examinations in outpatient clinics." },
            { description: "Attended medical conferences and seminars to stay updated on advancements in internal medicine." }
          ]
        }
      },
      {
        startDate: new Date(2016, 0, 1),
        endDate: new Date(2021, 11, 31),
        title: "Attending Physician",
        description: "Provided comprehensive primary care services at Community Health Clinic.",
        pros: {
          create: [
            { description: "Established long-term relationships with patients and families, providing continuity of care." },
            { description: "Focused on preventive medicine and patient education to promote healthy lifestyles." }
          ]
        },
        cons: {
          create: [
            { description: "Balancing patient care with administrative tasks and documentation requirements was challenging." },
            { description: "Managing patient caseloads and addressing diverse healthcare needs required time management skills." }
          ]
        },
        dayEvents: {
          create: [
            { description: "Conducted annual physical exams and screenings for patients of all ages." },
            { description: "Managed chronic medical conditions and coordinated care with specialists as needed." },
            { description: "Participated in quality improvement initiatives to enhance patient care and clinic efficiency." }
          ]
        }
      }
      // Add more experiences for Dr. Emily Smith as needed
    ]
  }
},
{
  views: 0, email: "financepro@example.com",
  name: "Alex Johnson",
  Experiences: {
    create: [
      {
        startDate: new Date(2015, 3, 1),
        endDate: new Date(2018, 6, 30),
        title: "Financial Analyst Intern",
        description: "Completed internship at Global Investment Bank, supporting financial analysis and reporting.",
        pros: {
          create: [
            { description: "Gained practical experience in financial modeling, valuation, and forecasting." },
            { description: "Developed proficiency in financial analysis tools and software applications." }
          ]
        },
        cons: {
          create: [
            { description: "Limited exposure to real-world financial markets and client interactions during internship." },
            { description: "Balancing internship responsibilities with academic coursework was challenging." }
          ]
        },
        dayEvents: {
          create: [
            { description: "Assisted senior analysts in preparing financial reports and presentations for clients." },
            { description: "Conducted industry research and analysis to support investment recommendations." },
            { description: "Participated in team meetings and brainstorming sessions to discuss market trends and investment strategies." }
          ]
        }
      },
      {
        startDate: new Date(2019, 0, 1),
        endDate: new Date(2022, 11, 31),
        title: "Financial Analyst",
        description: "Provided financial analysis and strategic insights for corporate clients at Financial Advisory Firm.",
        pros: {
          create: [
            { description: "Developed expertise in financial statement analysis and financial modeling techniques." },
            { description: "Contributed to the development of client pitches and investment proposals." }
          ]
        },
        cons: {
          create: [
            { description: "Meeting tight deadlines for client deliverables and projects required strong time management skills." },
            { description: "Balancing multiple client engagements and priorities was challenging." }
          ]
        },
        dayEvents: {
          create: [
            { description: "Performed financial statement analysis and ratio analysis to assess company performance." },
            { description: "Prepared valuation models and discounted cash flow (DCF) analyses for potential M&A transactions." },
            { description: "Attended client meetings and presentations to discuss financial analysis findings and recommendations." }
          ]
        }
      }
      // Add more experiences for Alex Johnson as needed
    ]
  }
},
{
  views: 0, email: "plumbexpert@example.com",
  name: "David Martinez",
  Experiences: {
    create: [
      {
        startDate: new Date(2012, 5, 1),
        endDate: new Date(2016, 8, 30),
        title: "Apprentice Plumber",
        description: "Completed plumbing apprenticeship program at City Plumbing Services, learning plumbing installation and repair techniques.",
        pros: {
          create: [
            { description: "Gained hands-on experience in installing and repairing plumbing fixtures and systems." },
            { description: "Received comprehensive training in plumbing codes, regulations, and safety practices." }
          ]
        },
        cons: {
          create: [
            { description: "Working in confined spaces and adverse weather conditions was physically demanding." },
            { description: "Balancing work responsibilities with coursework and training requirements was challenging." }
          ]
        },
        dayEvents: {
          create: [
            { description: "Assisted journeyman plumbers in installing and repairing pipes, fittings, and fixtures." },
            { description: "Attended plumbing classes and workshops to improve technical skills and knowledge." },
            { description: "Followed safety protocols and procedures to ensure a safe work environment at job sites." }
          ]
        }
      },
      {
        startDate: new Date(2017, 0, 1),
        endDate: new Date(2022, 11, 31),
        title: "Journeyman Plumber",
        description: "Worked as a licensed journeyman plumber at Residential Plumbing Solutions, specializing in residential plumbing services.",
        pros: {
          create: [
            { description: "Performed plumbing installations and repairs with high-quality workmanship and attention to detail." },
            { description: "Provided excellent customer service and communication to address client plumbing needs effectively." }
          ]
        },
        cons: {
          create: [
            { description: "Dealing with emergency service calls and irregular work hours required flexibility and availability." },
            { description: "Managing workload and client expectations in a fast-paced environment was challenging." }
          ]
        },
        dayEvents: {
          create: [
            { description: "Responded to service calls for plumbing repairs, leaks, and clogs in residential properties." },
            { description: "Installed plumbing fixtures, water heaters, and water treatment systems for residential clients." },
            { description: "Coordinated with contractors and homeowners to schedule and complete plumbing projects on time and within budget." }
          ]
        }
      }
      // Add more experiences for David Martinez as needed
    ]
  }
},
{
  views: 0, email: "hardwareguru@example.com",
  name: "Michael Chang",
  Experiences: {
    create: [
      {
        startDate: new Date(2014, 7, 1),
        endDate: new Date(2018, 9, 30),
        title: "Hardware Engineering Intern",
        description: "Completed internships at Tech Innovations Inc., gaining experience in hardware design and development.",
        pros: {
          create: [
            { description: "Gained practical experience in circuit design, PCB layout, and hardware testing." },
            { description: "Learned to use industry-standard hardware design tools such as Altium Designer and Cadence Allegro." }
          ]
        },
        cons: {
          create: [
            { description: "Adapting to fast-paced project timelines and technical challenges required quick learning and problem-solving skills." },
            { description: "Limited exposure to real-world hardware manufacturing processes and supply chain considerations during internships." }
          ]
        },
        dayEvents: {
          create: [
            { description: "Assisted senior engineers in designing and prototyping hardware components for new product development." },
            { description: "Conducted hardware testing and troubleshooting to identify and resolve design issues." },
            { description: "Participated in design reviews and meetings to discuss project progress and technical requirements." }
          ]
        }
      },
      {
        startDate: new Date(2019, 0, 1),
        endDate: new Date(2022, 11, 31),
        title: "Hardware Engineer",
        description: "Worked at Advanced Technologies Corporation, designing and testing hardware solutions for consumer electronics.",
        pros: {
          create: [
            { description: "Led hardware design projects from concept to production, ensuring compliance with technical specifications and standards." },
            { description: "Collaborated with cross-functional teams including software engineers and product managers to deliver integrated hardware solutions." }
          ]
        },
        cons: {
          create: [
            { description: "Meeting project deadlines and performance targets in a competitive industry required innovation and resourcefulness." },
            { description: "Navigating technical challenges and design trade-offs in hardware development was intellectually demanding." }
          ]
        },
        dayEvents: {
          create: [
            { description: "Designed and optimized circuit boards, components, and systems for power efficiency and performance." },
            { description: "Conducted hardware validation and characterization tests to ensure product reliability and functionality." },
            { description: "Collaborated with manufacturing partners to transition hardware designs into mass production." }
          ]
        }
      }
      // Add more experiences for Michael Chang as needed
    ]
  }
},
{
  views: 0, email: "professorjane@example.com",
  name: "Dr. Jane Williams",
  Experiences: {
    create: [
      {
        startDate: new Date(2008, 8, 1),
        endDate: new Date(2012, 5, 30),
        title: "Assistant Professor",
        description: "Served as an assistant professor in the Department of Computer Science at University XYZ.",
        pros: {
          create: [
            { description: "Developed and taught undergraduate and graduate courses in computer science." },
            { description: "Conducted research in areas such as artificial intelligence and machine learning." }
          ]
        },
        cons: {
          create: [
            { description: "Balancing teaching, research, and administrative duties required effective time management skills." },
            { description: "Limited funding and resources for research projects and lab facilities." }
          ]
        },
        dayEvents: {
          create: [
            { description: "Prepared lecture materials, assignments, and exams for computer science courses." },
            { description: "Mentored undergraduate and graduate students in research projects and thesis work." },
            { description: "Published research papers in peer-reviewed conferences and journals." }
          ]
        }
      },
      {
        startDate: new Date(2013, 0, 1),
        endDate: new Date(2022, 11, 31),
        title: "Associate Professor",
        description: "Promoted to associate professor, continuing teaching, research, and service activities.",
        pros: {
          create: [
            { description: "Secured research grants and funding to support ongoing research projects." },
            { description: "Supervised graduate students and postdoctoral researchers in conducting cutting-edge research." }
          ]
        },
        cons: {
          create: [
            { description: "Navigating tenure and promotion requirements and timelines was stressful." },
            { description: "Maintaining work-life balance while pursuing tenure and advancing in academia was challenging." }
          ]
        },
        dayEvents: {
          create: [
            { description: "Served on departmental committees and participated in faculty meetings and events." },
            { description: "Reviewed research papers and grant proposals for academic journals and funding agencies." },
            { description: "Collaborated with industry partners on research projects and technology transfer initiatives." }
          ]
        }
      }
      // Add more experiences for Dr. Jane Williams as needed
    ]
  }
}


]





// async function main() {
//   await prisma.user.deleteMany();
  
//   for(var i = 0; i < users.length; i++){
//     const user = users[i]
//     await prisma.user.create({
//       data: user
//     })
//   }

// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit();
//   });
