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
    data: {
      summary:
        "A brief summary of your professional background, goals, and experience.",
    },
  },
  skills: {
    data: [
      { category: "Category 1", skills: "Skills" },
      { category: "Category 2", skills: "Skills" },
      { category: "Category 3", skills: "Skills" },
    ],
  },
  projects: {
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
