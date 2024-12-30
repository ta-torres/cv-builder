import { useState } from "react";
import { Edit2, Plus } from "lucide-react";
import "../styles/Forms.css";

const SkillsForm = ({ data, isEditing, onToggleEdit, onSubmit }) => {
  const [formData, setFormData] = useState([
    {
      category: "",
      skills: ["", "", ""],
    },
  ]);

  const addSkillCategory = () => {
    setFormData([
      ...formData,
      {
        category: "",
        skills: ["", "", ""],
      },
    ]);
  };

  const updateCategory = (index, value) => {
    const newData = [...formData];
    newData[index].category = value;
    setFormData(newData);
  };

  const updateSkill = (categoryIndex, skillIndex, value) => {
    const newData = [...formData];
    newData[categoryIndex].skills[skillIndex] = value;
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
      {formData.map((category, categoryIndex) => (
        <div key={categoryIndex} className="education-entry">
          <div className="form-group">
            <label>Skill Category</label>
            <input
              type="text"
              value={category.category}
              onChange={(e) => updateCategory(categoryIndex, e.target.value)}
              placeholder="e.g., Programming Languages, Soft Skills, etc."
            />
          </div>
          <div className="form-group">
            <label>Skills (up to 3)</label>
            {category.skills.map((skill, skillIndex) => (
              <input
                key={skillIndex}
                type="text"
                value={skill}
                onChange={(e) =>
                  updateSkill(categoryIndex, skillIndex, e.target.value)
                }
                placeholder="Enter a skill"
              />
            ))}
          </div>
        </div>
      ))}
      <div className="form-buttons">
        <button type="button" onClick={addSkillCategory} className="add-btn">
          <Plus size={16} />
          Add Skill Category
        </button>
        <button type="submit">Save</button>
        <button type="button" onClick={onToggleEdit}>
          Cancel
        </button>
      </div>
    </form>
  ) : (
    <div>
      {data.map((category, index) => (
        <div key={index} className="preview-container">
          <h3>{category.category}</h3>
          <ul className="preview-list">
            {category.skills
              .filter((skill) => skill)
              .map((skill, idx) => (
                <li key={idx} className="preview-list-item">
                  {skill}
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

export default SkillsForm;
