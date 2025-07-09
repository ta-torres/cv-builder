import { useState, useEffect } from "react";
import { Edit2 } from "lucide-react";
import "./Forms.css";

const SummaryForm = ({ data, onSubmit, hasEdited }) => {
  const [formData, setFormData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (hasEdited) {
      setFormData(data);
    } else {
      setFormData({
        summary: "",
      });
    }
  }, [data, hasEdited]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setIsEditing(false);
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
        <button type="button" onClick={() => setIsEditing(false)}>
          Cancel
        </button>
      </div>
    </form>
  ) : (
    <div className="preview-container">
      <div className="preview-content">
        <p>{data.summary}</p>
      </div>
      <button onClick={() => setIsEditing(true)} className="edit-btn">
        <Edit2 size={20} />
        Edit
      </button>
    </div>
  );
};

export default SummaryForm;
