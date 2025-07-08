const cvData = {
  generalInfo: {
    isExpanded: true,
    isEditing: false,
    data: {
      fullName: "name",
      jobTitle: "job title",
      email: "email",
      phone: "phone",
      location: "location",
    },
  },
  education: {
    isExpanded: true,
    isEditing: false,
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
    isExpanded: true,
    isEditing: false,
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
    isExpanded: true,
    isEditing: false,
    data: {
      summary:
        "A brief summary of your professional background, goals, and experience.",
    },
  },
  skills: {
    isExpanded: true,
    isEditing: false,
    data: [
      { category: "Category 1", skills: "Skills" },
      { category: "Category 2", skills: "Skills" },
      { category: "Category 3", skills: "Skills" },
    ],
  },
  projects: {
    isExpanded: true,
    isEditing: false,
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
    isExpanded: true,
    isEditing: false,
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
