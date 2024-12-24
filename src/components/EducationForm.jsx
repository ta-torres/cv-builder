import { useState } from "react";
import { Edit2, Plus } from "lucide-react";
import "../styles/Forms.css";

const EducationForm = ({ data, isEditing, onToggleEdit, onSubmit }) => {
  const [formData, setFormData] = useState(data);

  const addEducation = () => {
    setFormData([
      ...formData,
      {
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
      },
    ]);
  };

  const updateEducation = (index, field, value) => {
    const newData = [...formData];
    newData[index][field] = value;
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
      {formData.map((edu, index) => (
        <div key={index} className="education-entry">
          <div className="form-group">
            <label>School</label>
            <input
              type="text"
              value={edu.school}
              onChange={(e) => updateEducation(index, "school", e.target.value)}
              placeholder="School name"
            />
          </div>
          <div className="form-group">
            <label>Degree</label>
            <input
              type="text"
              value={edu.degree}
              onChange={(e) => updateEducation(index, "degree", e.target.value)}
              placeholder="Degree"
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>Start Date</label>
              <input
                type="text"
                value={edu.startDate}
                onChange={(e) =>
                  updateEducation(index, "startDate", e.target.value)
                }
                placeholder="MM/YYYY"
              />
            </div>
            <div className="form-group">
              <label>End Date</label>
              <input
                type="text"
                value={edu.endDate}
                onChange={(e) =>
                  updateEducation(index, "endDate", e.target.value)
                }
                placeholder="MM/YYYY"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              value={edu.location}
              onChange={(e) =>
                updateEducation(index, "location", e.target.value)
              }
              placeholder="City, Country"
            />
          </div>
        </div>
      ))}
      <div className="form-buttons">
        <button type="button" onClick={addEducation} className="add-btn">
          <Plus size={16} />
          Add Education
        </button>
        <button type="submit">Save</button>
        <button type="button" onClick={onToggleEdit}>
          Cancel
        </button>
      </div>
    </form>
  ) : (
    <div>
      {data.map((edu, index) => (
        <div key={index} className="education-display">
          <div className="education-header">
            <h3>{edu.school}</h3>
            <span>{edu.location}</span>
          </div>
          <div className="education-details">
            <p>{edu.degree}</p>
            <span>
              {edu.startDate} - {edu.endDate}
            </span>
          </div>
        </div>
      ))}
      <button onClick={onToggleEdit} className="edit-btn">
        <Edit2 size={20} />
        Edit
      </button>
    </div>
  );
};

export default EducationForm;
