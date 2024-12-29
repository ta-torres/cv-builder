import { useState } from "react";
import { Edit2 } from "lucide-react";
import "../styles/Forms.css";

const SummaryForm = ({ data, isEditing, onToggleEdit, onSubmit }) => {
  const [formData, setFormData] = useState({
    summary: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return isEditing ? (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <textarea
          value={formData.summary}
          onChange={(e) =>
            setFormData({ ...formData, summary: e.target.value })
          }
          placeholder="A brief summary of your professional background, goals, and experience."
          rows={4}
          className="summary-textarea"
        />
      </div>
      <div className="form-buttons">
        <button type="submit">Save</button>
        <button type="button" onClick={onToggleEdit}>
          Cancel
        </button>
      </div>
    </form>
  ) : (
    <div className="general-info">
      <div className="info-container">
        <p>{data.summary}</p>
      </div>
      <button onClick={onToggleEdit} className="edit-btn">
        <Edit2 size={20} />
        Edit
      </button>
    </div>
  );
};

export default SummaryForm;
