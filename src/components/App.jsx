import { useState } from "react";
import { pdf } from "@react-pdf/renderer";
import Section from "./Section.jsx";
import GeneralForm from "./Forms/GeneralForm";
import EducationForm from "./Forms/EducationForm";
import CoursesForm from "./Forms/CoursesForm";
import ExperienceForm from "./Forms/ExperienceForm";
import SummaryForm from "./Forms/SummaryForm";
import SkillsForm from "./Forms/SkillsForm";
import ProjectsForm from "./Forms/ProjectsForm";
import CVDocument from "./Preview/CVDocument";
import PDFPreview from "./Preview/PDFPreview";
import cvData from "../utils/cvData.js";
import {
  Download,
  GraduationCap,
  CircleUserRound,
  BriefcaseBusiness,
  Eye,
  FileText,
  Lightbulb,
  FolderGit2,
  Scroll,
} from "lucide-react";
import logo from "../assets/logo-cv.svg";
import "./App.css";

const App = () => {
  const [sections, setSections] = useState(cvData);

  const handleDownload = async () => {
    try {
      await generatePDF(sections);
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  const generatePDF = async (data) => {
    const blob = await pdf(<CVDocument data={data} />).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "my-cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const updateSectionData = (sectionName, newData) => {
    setSections((prevData) => ({
      ...prevData,
      [sectionName]: {
        data: newData,
      },
    }));
  };

  const exportToJson = () => {
    const jsonData = JSON.stringify(sections, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "cv-data.json";
    link.click();

    URL.revokeObjectURL(url);
  };

  const importFromJson = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const jsonData = JSON.parse(e.target.result);
        setSections(jsonData);
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="container">
      <header className="header">
        <div className="logo-container">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <h1>CV Builder</h1>
        </div>
      </header>

      <div className="save-section">
        <button
          className="preview-btn btn"
          onClick={() => {
            const previewSection = document.querySelector(".pdf-preview");
            previewSection.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <Eye size={20} />
          Preview
        </button>
        <button className="download-btn btn" onClick={handleDownload}>
          <Download size={20} />
          Download to PDF
        </button>
        <button className="export-btn btn" onClick={exportToJson}>
          <Download size={20} />
          Export to JSON
        </button>
        <input
          type="file"
          accept=".json"
          onChange={(e) => importFromJson(e.target.files[0])}
        />
      </div>

      <main className="main-content">
        <section className="left-column">
          <Section title="General Information" icon={<CircleUserRound />}>
            <GeneralForm
              data={sections.generalInfo.data}
              onSubmit={(data) => updateSectionData("generalInfo", data)}
            />
          </Section>

          <Section title="Summary" icon={<FileText />}>
            <SummaryForm
              data={sections.summary.data}
              onSubmit={(data) => updateSectionData("summary", data)}
            />
          </Section>

          <Section title="Skills" icon={<Lightbulb />}>
            <SkillsForm
              data={sections.skills.data}
              onSubmit={(data) => updateSectionData("skills", data)}
            />
          </Section>

          <Section title="Education" icon={<GraduationCap />}>
            <EducationForm
              data={sections.education.data}
              onSubmit={(data) => updateSectionData("education", data)}
            />
          </Section>

          <Section title="Courses and Certifications" icon={<Scroll />}>
            <CoursesForm
              data={sections.courses.data}
              onSubmit={(data) => updateSectionData("courses", data)}
            />
          </Section>

          <Section title="Experience" icon={<BriefcaseBusiness />}>
            <ExperienceForm
              data={sections.experience.data}
              onSubmit={(data) => updateSectionData("experience", data)}
            />
          </Section>

          <Section title="Personal Projects" icon={<FolderGit2 />}>
            <ProjectsForm
              data={sections.projects.data}
              onSubmit={(data) => updateSectionData("projects", data)}
            />
          </Section>
        </section>

        <section className="right-column">
          <Section title="Preview" icon={<Eye />} isExpanded={true}>
            <div className="pdf-preview">
              <PDFPreview data={sections} />
            </div>
          </Section>
        </section>
      </main>
    </div>
  );
};

export default App;
