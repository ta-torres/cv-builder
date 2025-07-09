import { useState } from "react";
import { Edit2, Plus } from "lucide-react";
import "./Forms.css";

const SkillsForm = ({ data, onSubmit }) => {
  const [formData, setFormData] = useState([
    {
      category: "",
      skills: "",
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);

  const addSkillCategory = () => {
    setFormData([
      ...formData,
      {
        category: "",
        skills: "",
      },
    ]);
  };

  const updateCategory = (index, value) => {
    const newData = [...formData];
    newData[index].category = value;
    setFormData(newData);
  };

  const updateSkill = (categoryIndex, value) => {
    const newData = [...formData];
    newData[categoryIndex].skills = value;
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
            <label>Skills</label>

            <input
              type="text"
              value={category.skills}
              onChange={(e) => updateSkill(categoryIndex, e.target.value)}
              placeholder="Enter a skill"
            />
          </div>
        </div>
      ))}
      <div className="form-buttons">
        <button type="button" onClick={addSkillCategory} className="add-btn">
          <Plus size={16} />
          Add Skill Category
        </button>
        <button type="submit">Save</button>
        <button type="button" onClick={() => setIsEditing(false)}>
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
            <li className="preview-list-item">{category.skills}</li>
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

export default SkillsForm;
