const coverLetterData = {
  sender: {
    data: {
      fullName: "Full Name",
      jobTitle: "Job Title",
      email: "email@example.com",
      phone: "+1 234 567 890",
      webpage: "https://example.com",
      address: "Location",
    },
  },
  recipient: {
    data: {
      name: "",
      title: "",
      company: "[Company name]",
      address: "[Mailing address]",
    },
  },
  letter: {
    data: {
      date: (() => {
        const date = new Date();
        const options = {
          month: "long",
          day: "numeric",
          year: "numeric",
        };
        return date.toLocaleDateString("en-US", options);
      })(),
      subject: "Subject",
      greeting:
        "[Dear [Name of Hiring Manager/Recruiter],] OR [To whom it may concern:]",
      body: "I am writing to express my interest in the [Position] role at [Company] as advertised on [job board website, company career website, etc.]. With my background in [Relevant Skill/Experience] and my passion for [Relevant Interest], I am confident that I can contribute to your team. \n\n[Additional details about your qualifications, experience, achievements and goals]. \n\n[Thank you for considering my application. I look forward to hearing from you.]",
      closing: "Sincerely,",
      signature: "[Your Name]",
    },
  },
};

export default coverLetterData;
