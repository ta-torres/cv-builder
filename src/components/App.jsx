import { useState } from "react";
import Section from "./Section";
import GeneralForm from "./GeneralForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import SummaryForm from "./SummaryForm";
import { pdf } from "@react-pdf/renderer";
import CVDocument from "./CVDocument";
import PDFPreview from "./PDFPreview";
import CVPreview from "./CVPreview";
import {
  Download,
  GraduationCap,
  CircleUserRound,
  BriefcaseBusiness,
  Eye,
  FileText,
} from "lucide-react";
import logo from "../assets/logo-cv.svg";
import "../styles/App.css";

const App = () => {
  const dummyData = {
    generalInfo: {
      isExpanded: true,
      isEditing: false,
      data: {
        fullName: "name",
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
  };

  const [sections, setSections] = useState(dummyData);
  const [showPreview, setShowPreview] = useState(false);

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

  const toggleSection = (sectionName) => {
    setSections((prev) => ({
      ...prev,
      [sectionName]: {
        ...prev[sectionName],
        isExpanded: !prev[sectionName].isExpanded,
      },
    }));
  };

  const toggleEdit = (sectionName) => {
    setSections((prev) => ({
      ...prev,
      [sectionName]: {
        ...prev[sectionName],
        isEditing: !prev[sectionName].isEditing,
      },
    }));
  };

  const updateSectionData = (sectionName, newData) => {
    setSections((prev) => ({
      ...prev,
      [sectionName]: {
        ...prev[sectionName],
        data: newData,
        isEditing: false,
      },
    }));
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
          className="preview-btn"
          onClick={() => {
            setShowPreview(!showPreview);
            const previewSection = document.querySelector(".pdf-preview");
            previewSection.scrollIntoView({ behavior: "smooth" });
            console.log(previewSection);
          }}
        >
          <Eye size={20} />
          Preview
        </button>
        <button className="download-btn" onClick={handleDownload}>
          <Download size={20} />
          Download to PDF
        </button>
      </div>

      <Section
        title="General Information"
        icon={<CircleUserRound />}
        isExpanded={sections.generalInfo.isExpanded}
        onToggle={() => toggleSection("generalInfo")}
      >
        <GeneralForm
          data={sections.generalInfo.data}
          isEditing={sections.generalInfo.isEditing}
          onToggleEdit={() => toggleEdit("generalInfo")}
          onSubmit={(data) => updateSectionData("generalInfo", data)}
        />
      </Section>

      <Section
        title="Summary"
        icon={<FileText />}
        isExpanded={sections.summary.isExpanded}
        onToggle={() => toggleSection("summary")}
      >
        <SummaryForm
          data={sections.summary.data}
          isEditing={sections.summary.isEditing}
          onToggleEdit={() => toggleEdit("summary")}
          onSubmit={(data) => updateSectionData("summary", data)}
        />
      </Section>

      <Section
        title="Education"
        icon={<GraduationCap />}
        isExpanded={sections.education.isExpanded}
        onToggle={() => toggleSection("education")}
      >
        <EducationForm
          data={sections.education.data}
          isEditing={sections.education.isEditing}
          onToggleEdit={() => toggleEdit("education")}
          onSubmit={(data) => updateSectionData("education", data)}
        />
      </Section>

      <Section
        title="Experience"
        icon={<BriefcaseBusiness />}
        isExpanded={sections.experience.isExpanded}
        onToggle={() => toggleSection("experience")}
      >
        <ExperienceForm
          data={sections.experience.data}
          isEditing={sections.experience.isEditing}
          onToggleEdit={() => toggleEdit("experience")}
          onSubmit={(data) => updateSectionData("experience", data)}
        />
      </Section>

      <Section
        title="Preview"
        icon={<Eye />}
        isExpanded={true}
        onToggle={() => setShowPreview(!showPreview)}
      >
        <div className="pdf-preview">
          <PDFPreview data={sections} />
        </div>
      </Section>
    </div>
  );
};

export default App;
