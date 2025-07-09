const cvData = {
  generalInfo: {
    data: {
      fullName: "name",
      jobTitle: "job title",
      email: "email",
      phone: "phone",
      webpage: "webpage",
    },
  },
  education: {
    name: "Education",
    data: [
      {
        school: "school",
        degree: "degree",
        startDate: "start",
        endDate: "end",
        location: "location",
      },
    ],
  },
  experience: {
    name: "Experience",
    data: [
      {
        company: "company",
        position: "position",
        startDate: "start",
        endDate: "end",
        responsibilities: [
          "responsibility1",
          "responsibility2",
          "responsibility3",
        ],
        location: "location",
      },
    ],
  },
  summary: {
    name: "Summary",
    data: {
      summary:
        "A brief summary of your professional background, goals, and experience.",
    },
  },
  skills: {
    name: "Skills",
    data: [
      { category: "Category 1", skills: "Skills" },
      { category: "Category 2", skills: "Skills" },
      { category: "Category 3", skills: "Skills" },
    ],
  },
  projects: {
    name: "Personal Projects",
    data: [
      {
        name: "Project name",
        description: "Project description",
        link: "https://github.com/",
        features: ["Feature 1", "Feature 2", "Feature 3"],
      },
    ],
  },
  courses: {
    name: "Courses and Certifications",
    data: [
      {
        name: "Course name",
        provider: "Provider name",
        year: "2023",
        description: "Course description",
      },
    ],
  },
};

export default cvData;
