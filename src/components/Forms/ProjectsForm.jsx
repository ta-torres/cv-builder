import { useState } from "react";
import { Edit2, Plus } from "lucide-react";
import "./Forms.css";

const ProjectsForm = ({ data, isEditing, onToggleEdit, onSubmit }) => {
  const [formData, setFormData] = useState([
    {
      name: "",
      description: "",
      link: "",
      features: ["", "", ""],
    },
  ]);

  const addProject = () => {
    setFormData([
      ...formData,
      {
        name: "",
        description: "",
        link: "",
        features: ["", "", ""],
      },
    ]);
  };

  const updateProject = (index, field, value) => {
    const newData = [...formData];
    newData[index][field] = value;
    setFormData(newData);
  };

  const updateFeature = (projectIndex, featureIndex, value) => {
    const newData = [...formData];
    newData[projectIndex].features[featureIndex] = value;
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
      {formData.map((project, index) => (
        <div key={index} className="education-entry">
          <div className="form-group">
            <label>Project name</label>
            <input
              type="text"
              value={project.name}
              onChange={(e) => updateProject(index, "name", e.target.value)}
              placeholder="Project name"
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              value={project.description}
              onChange={(e) =>
                updateProject(index, "description", e.target.value)
              }
              placeholder="Project description"
            />
          </div>
          <div className="form-group">
            <label>Project link</label>
            <input
              type="url"
              value={project.link}
              onChange={(e) => updateProject(index, "link", e.target.value)}
              placeholder="https://github.com/"
            />
          </div>
          <div className="form-group">
            <label>Key features</label>
            {project.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="form-row">
                <input
                  type="text"
                  value={feature}
                  onChange={(e) =>
                    updateFeature(index, featureIndex, e.target.value)
                  }
                  placeholder="Key feature"
                />
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="form-buttons">
        <button type="button" onClick={addProject} className="add-btn">
          <Plus size={16} />
          Add Project
        </button>
        <button type="submit">Save</button>
        <button type="button" onClick={onToggleEdit}>
          Cancel
        </button>
      </div>
    </form>
  ) : (
    <div>
      {data.map((project, index) => (
        <div key={index} className="preview-container">
          <div className="preview-header">
            <h3>{project.name}</h3>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="preview-link"
            >
              View Project
            </a>
          </div>
          <div className="preview-details">
            <p>{project.description}</p>
          </div>
          <ul className="preview-list">
            {project.features.map((feature, idx) => (
              <li key={idx} className="preview-list-item">
                {feature}
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

export default ProjectsForm;
