import { useState } from "react";
import Section from "./Section";
import GeneralForm from "./GeneralForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import CVPreview from "./CVPreview";
import {
  Download,
  GraduationCap,
  CircleUserRound,
  BriefcaseBusiness,
  Eye,
} from "lucide-react";
import logo from "../assets/logo-cv.svg";
import "../styles/App.css";

const App = () => {
  const [sections, setSections] = useState({
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
  });

  const [showPreview, setShowPreview] = useState(false);

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
            const previewSection = document.querySelector(".cv-preview");
            previewSection.scrollIntoView({ behavior: "smooth" });
            console.log(previewSection);
          }}
        >
          <Eye size={20} />
          Preview
        </button>
        <button className="download-btn">
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
        <CVPreview data={sections} />
      </Section>
    </div>
  );
};

export default App;
