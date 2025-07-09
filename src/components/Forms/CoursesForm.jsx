import { useState } from "react";
import { Edit2, Plus } from "lucide-react";
import "./Forms.css";

const CoursesForm = ({ data, onSubmit }) => {
  const [formData, setFormData] = useState([
    {
      name: "",
      provider: "",
      year: "",
      description: "",
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);

  const addCourse = () => {
    setFormData([
      ...formData,
      {
        name: "",
        provider: "",
        year: "",
        description: "",
      },
    ]);
  };

  const updateCourse = (index, field, value) => {
    const newData = [...formData];
    newData[index][field] = value;
    setFormData(newData);
  };

  return isEditing ? (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(formData);
        setIsEditing(false);
      }}
      className="form"
    >
      {formData.map((course, index) => (
        <div key={index} className="education-entry">
          <div className="form-group">
            <label>Course Name</label>
            <input
              type="text"
              value={course.name}
              onChange={(e) => updateCourse(index, "name", e.target.value)}
              placeholder="Course name"
            />
          </div>
          <div className="form-group">
            <label>Provider</label>
            <input
              type="text"
              value={course.provider}
              onChange={(e) => updateCourse(index, "provider", e.target.value)}
              placeholder="Course provider"
            />
          </div>
          <div className="form-group">
            <label>Year</label>
            <input
              type="text"
              value={course.year}
              onChange={(e) => updateCourse(index, "year", e.target.value)}
              placeholder="YYYY"
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              value={course.description}
              onChange={(e) =>
                updateCourse(index, "description", e.target.value)
              }
              placeholder="Course description"
            />
          </div>
        </div>
      ))}
      <div className="form-buttons">
        <button type="button" onClick={addCourse} className="add-btn">
          <Plus size={16} />
          Add Course
        </button>
        <button type="submit">Save</button>
        <button type="button" onClick={() => setIsEditing(false)}>
          Cancel
        </button>
      </div>
    </form>
  ) : (
    <div>
      {data.map((course, index) => (
        <div key={index} className="preview-container">
          <div className="preview-header">
            <h3>{course.name}</h3>
            <span>{course.year}</span>
          </div>
          <div className="preview-details">
            <p>{course.provider}</p>
          </div>
          <ul className="preview-list">
            <li className="preview-list-item">{course.description}</li>
          </ul>
        </div>
      ))}
      <button onClick={() => setIsEditing(true)} className="edit-btn">
        <Edit2 size={20} />
        Edit
      </button>
    </div>
  );
};

export default CoursesForm;
