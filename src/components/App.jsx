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
import CoverLetterSenderForm from "./Forms/CoverLetterSenderForm";
import CoverLetterRecipientForm from "./Forms/CoverLetterRecipientForm";
import CoverLetterContentForm from "./Forms/CoverLetterContentForm";
import CVDocument from "./Preview/CVDocument";
import CoverLetterDocument from "./Preview/CoverLetterDocument";
import PDFPreview from "./Preview/PDFPreview";
import CoverLetterPDFPreview from "./Preview/CoverLetterPDFPreview";
import MYDATA from "../utils/cv-data.json";
import coverLetterData from "../utils/coverLetterData.js";
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
  const [activeBuilder, setActiveBuilder] = useState("cv");
  const [sections, setSections] = useState(MYDATA);
  const [editedSections, setEditedSections] = useState(new Set());
  const [coverLetterSections, setCoverLetterSections] =
    useState(coverLetterData);
  const [editedCoverLetterSections, setEditedCoverLetterSections] = useState(
    new Set(),
  );

  const handleDownload = async () => {
    try {
      if (activeBuilder === "cv") {
        await generatePDF(<CVDocument data={sections} />, "my-cv.pdf");
      } else {
        await generatePDF(
          <CoverLetterDocument data={coverLetterSections} />,
          "cover-letter.pdf",
        );
      }
    } catch (error) {
      console.error("Error generating PDF:", error);
    }
  };

  const generatePDF = async (pdfDocument, filename) => {
    const blob = await pdf(pdfDocument).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const exportCoverLetterToJson = () => {
    const jsonData = JSON.stringify(coverLetterSections, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "cover-letter-data.json";
    link.click();

    URL.revokeObjectURL(url);
  };

  const updateSectionData = (sectionName, newData) => {
    setSections((prevData) => ({
      ...prevData,
      [sectionName]: {
        data: newData,
      },
    }));
    setEditedSections((prev) => new Set([...prev, sectionName]));
  };

  const updateCoverLetterSectionData = (sectionName, newData) => {
    setCoverLetterSections((prevData) => ({
      ...prevData,
      [sectionName]: {
        ...(prevData?.[sectionName] || {}),
        data: newData,
      },
    }));
    setEditedCoverLetterSections((prev) => new Set([...prev, sectionName]));
  };

  const exportToJson = () => {
    const generalInfoWithoutPhoto = {
      ...(sections?.generalInfo?.data || {}),
    };
    delete generalInfoWithoutPhoto.photo;
    const exportableSections = {
      ...sections,
      generalInfo: {
        ...sections.generalInfo,
        data: generalInfoWithoutPhoto,
      },
    };

    const jsonData = JSON.stringify(exportableSections, null, 2);
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
        const generalInfoWithoutPhoto = {
          ...(jsonData?.generalInfo?.data || {}),
        };
        delete generalInfoWithoutPhoto.photo;
        const sanitizedData = {
          ...jsonData,
          generalInfo: {
            ...jsonData.generalInfo,
            data: generalInfoWithoutPhoto,
          },
        };

        setSections(sanitizedData);
        setEditedSections(new Set(Object.keys(sanitizedData))); //
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    };
    reader.readAsText(file);
  };

  const importCoverLetterFromJson = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const jsonData = JSON.parse(e.target.result);

        const sanitizedData = {
          ...coverLetterData,
          ...jsonData,
          sender: {
            ...coverLetterData.sender,
            ...(jsonData?.sender || {}),
            data: {
              ...coverLetterData.sender.data,
              ...(jsonData?.sender?.data || {}),
            },
          },
          recipient: {
            ...coverLetterData.recipient,
            ...(jsonData?.recipient || {}),
            data: {
              ...coverLetterData.recipient.data,
              ...(jsonData?.recipient?.data || {}),
            },
          },
          letter: {
            ...coverLetterData.letter,
            ...(jsonData?.letter || {}),
            data: {
              ...coverLetterData.letter.data,
              ...(jsonData?.letter?.data || {}),
            },
          },
        };

        setCoverLetterSections(sanitizedData);
        setEditedCoverLetterSections(new Set(Object.keys(sanitizedData)));
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
          <h1>
            {activeBuilder === "cv" ? "CV Builder" : "Cover Letter Builder"}
          </h1>
        </div>

        <div className="mode-toggle">
          <button
            type="button"
            className={`mode-btn ${activeBuilder === "cv" ? "active" : ""}`}
            onClick={() => setActiveBuilder("cv")}
          >
            CV
          </button>
          <button
            type="button"
            className={`mode-btn ${
              activeBuilder === "coverLetter" ? "active" : ""
            }`}
            onClick={() => setActiveBuilder("coverLetter")}
          >
            Cover Letter
          </button>
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
        {activeBuilder === "cv" ? (
          <>
            <button className="export-btn btn" onClick={exportToJson}>
              <Download size={20} />
              Export to JSON
            </button>
            <input
              type="file"
              accept=".json"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                importFromJson(file);
              }}
            />
          </>
        ) : (
          <>
            <button
              className="export-btn btn"
              onClick={exportCoverLetterToJson}
            >
              <Download size={20} />
              Export to JSON
            </button>
            <input
              type="file"
              accept=".json"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                importCoverLetterFromJson(file);
              }}
            />
          </>
        )}
      </div>

      <main className="main-content">
        <section className="left-column">
          {activeBuilder === "cv" ? (
            <>
              <Section title="General Information" icon={<CircleUserRound />}>
                <GeneralForm
                  data={sections.generalInfo.data}
                  onSubmit={(data) => updateSectionData("generalInfo", data)}
                  hasEdited={editedSections.has("generalInfo")}
                />
              </Section>

              <Section title="Summary" icon={<FileText />}>
                <SummaryForm
                  data={sections.summary.data}
                  onSubmit={(data) => updateSectionData("summary", data)}
                  hasEdited={editedSections.has("summary")}
                />
              </Section>

              <Section title="Skills" icon={<Lightbulb />}>
                <SkillsForm
                  data={sections.skills.data}
                  onSubmit={(data) => updateSectionData("skills", data)}
                  hasEdited={editedSections.has("skills")}
                />
              </Section>

              <Section title="Education" icon={<GraduationCap />}>
                <EducationForm
                  data={sections.education.data}
                  onSubmit={(data) => updateSectionData("education", data)}
                  hasEdited={editedSections.has("education")}
                />
              </Section>

              <Section title="Courses and Certifications" icon={<Scroll />}>
                <CoursesForm
                  data={sections.courses.data}
                  onSubmit={(data) => updateSectionData("courses", data)}
                  hasEdited={editedSections.has("courses")}
                />
              </Section>

              <Section title="Experience" icon={<BriefcaseBusiness />}>
                <ExperienceForm
                  data={sections.experience.data}
                  onSubmit={(data) => updateSectionData("experience", data)}
                  hasEdited={editedSections.has("experience")}
                />
              </Section>

              <Section title="Personal Projects" icon={<FolderGit2 />}>
                <ProjectsForm
                  data={sections.projects.data}
                  onSubmit={(data) => updateSectionData("projects", data)}
                  hasEdited={editedSections.has("projects")}
                />
              </Section>
            </>
          ) : (
            <>
              <Section title="Sender" icon={<CircleUserRound />}>
                <CoverLetterSenderForm
                  data={coverLetterSections.sender.data}
                  onSubmit={(data) =>
                    updateCoverLetterSectionData("sender", data)
                  }
                  hasEdited={editedCoverLetterSections.has("sender")}
                />
              </Section>

              <Section title="Recipient" icon={<BriefcaseBusiness />}>
                <CoverLetterRecipientForm
                  data={coverLetterSections.recipient.data}
                  onSubmit={(data) =>
                    updateCoverLetterSectionData("recipient", data)
                  }
                  hasEdited={editedCoverLetterSections.has("recipient")}
                />
              </Section>

              <Section title="Letter" icon={<FileText />}>
                <CoverLetterContentForm
                  data={coverLetterSections.letter.data}
                  onSubmit={(data) =>
                    updateCoverLetterSectionData("letter", data)
                  }
                  hasEdited={editedCoverLetterSections.has("letter")}
                />
              </Section>
            </>
          )}
        </section>

        <section className="right-column">
          <Section title="Preview" icon={<Eye />} isExpanded={true}>
            <div className="pdf-preview">
              {activeBuilder === "cv" ? (
                <PDFPreview data={sections} />
              ) : (
                <CoverLetterPDFPreview data={coverLetterSections} />
              )}
            </div>
          </Section>
        </section>
      </main>
    </div>
  );
};

export default App;
