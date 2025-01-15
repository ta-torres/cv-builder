import { useState } from "react";
import { Edit2, Plus } from "lucide-react";
import "./Forms.css";

const ExperienceForm = ({ data, isEditing, onToggleEdit, onSubmit }) => {
  const [formData, setFormData] = useState([
    {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      responsibilities: ["", "", ""],
      location: "",
    },
  ]);

  const addExperience = () => {
    setFormData([
      ...formData,
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        responsibilities: ["", "", ""],
        location: "",
      },
    ]);
  };

  const updateExperience = (index, field, value) => {
    const newData = [...formData];
    newData[index][field] = value;
    setFormData(newData);
  };

  const updateResponsibility = (expIndex, respIndex, value) => {
    const newData = [...formData];
    newData[expIndex].responsibilities[respIndex] = value;
    setFormData(newData);
  };

  return isEditing ? (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(formData);
      }}
      className="form"
    >
      {formData.map((exp, index) => (
        <div key={index} className="education-entry">
          <div className="form-group">
            <label>Company</label>
            <input
              type="text"
              value={exp.company}
              onChange={(e) =>
                updateExperience(index, "company", e.target.value)
              }
              placeholder="Company name"
            />
          </div>
          <div className="form-group">
            <label>Position</label>
            <input
              type="text"
              value={exp.position}
              onChange={(e) =>
                updateExperience(index, "position", e.target.value)
              }
              placeholder="Job title"
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Start Date</label>
              <input
                type="text"
                value={exp.startDate}
                onChange={(e) =>
                  updateExperience(index, "startDate", e.target.value)
                }
                placeholder="MM/YYYY"
              />
            </div>
            <div className="form-group">
              <label>End Date</label>
              <input
                type="text"
                value={exp.endDate}
                onChange={(e) =>
                  updateExperience(index, "endDate", e.target.value)
                }
                placeholder="MM/YYYY"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              value={exp.location}
              onChange={(e) =>
                updateExperience(index, "location", e.target.value)
              }
              placeholder="City, Country"
            />
          </div>
          <div className="form-group">
            <label>Responsibilities</label>
            {exp.responsibilities.map((resp, respIndex) => (
              <div key={respIndex} className="form-row">
                <input
                  type="text"
                  value={resp}
                  onChange={(e) =>
                    updateResponsibility(index, respIndex, e.target.value)
                  }
                  placeholder="Describe your responsibility"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="form-buttons">
        <button type="button" onClick={addExperience} className="add-btn">
          <Plus size={16} />
          Add Experience
        </button>
        <button type="submit">Save</button>
        <button type="button" onClick={onToggleEdit}>
          Cancel
        </button>
      </div>
    </form>
  ) : (
    <div>
      {data.map((exp, index) => (
        <div key={index} className="preview-container">
          <div className="preview-header">
            <h3>{exp.position}</h3>
            <span>
              {exp.startDate} - {exp.endDate}
            </span>
          </div>
          <div className="preview-details">
            <p>{exp.company}</p>
            <span>{exp.location}</span>
          </div>
          <ul className="preview-list">
            {exp.responsibilities.map((responsibility, idx) => (
              <li key={idx} className="preview-list-item">
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={onToggleEdit} className="edit-btn">
        <Edit2 size={20} />
        Edit
      </button>
    </div>
  );
};

export default ExperienceForm;
