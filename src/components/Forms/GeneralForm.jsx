import { useState } from "react";
import { Edit2 } from "lucide-react";
import "./Forms.css";

const GeneralForm = ({ data, isEditing, onToggleEdit, onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    location: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return isEditing ? (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <label>Full Name</label>
        <input
          type="text"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
          placeholder="Full Name"
        />
      </div>
      <div className="form-group">
        <label>Job Title</label>
        <input
          type="text"
          value={formData.jobTitle}
          onChange={(e) =>
            setFormData({ ...formData, jobTitle: e.target.value })
          }
          placeholder="Job Title"
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="email@example.com"
        />
      </div>
      <div className="form-group">
        <label>Phone</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="Phone Number"
        />
      </div>
      <div className="form-group">
        <label>Location</label>
        <input
          type="text"
          value={formData.location}
          onChange={(e) =>
            setFormData({ ...formData, location: e.target.value })
          }
          placeholder="City, Country"
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
    <div className="preview-container">
      <div className="preview-content">
        <h3>{data.fullName}</h3>
        <h4>{data.jobTitle}</h4>
        <p>{data.email}</p>
        <p>{data.phone}</p>
        <p>{data.location}</p>
      </div>
      <button onClick={onToggleEdit} className="edit-btn">
        <Edit2 size={20} />
        Edit
      </button>
    </div>
  );
};

export default GeneralForm;
