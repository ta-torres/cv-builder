import { useEffect, useState } from "react";
import { Edit2 } from "lucide-react";
import "./Forms.css";

const CoverLetterRecipientForm = ({ data, onSubmit, hasEdited }) => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    company: "",
    address: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (hasEdited) {
      setFormData(data);
    } else {
      setFormData({
        name: "",
        title: "",
        company: "",
        address: "",
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
        <label>Recipient Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Recipient name"
        />
      </div>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="e.g. Engineering Manager"
        />
      </div>
      <div className="form-group">
        <label>Company</label>
        <input
          type="text"
          value={formData.company}
          onChange={(e) =>
            setFormData({ ...formData, company: e.target.value })
          }
          placeholder="Company name"
        />
      </div>
      <div className="form-group">
        <label>Address</label>
        <input
          type="text"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
          placeholder="Company address"
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
        <h3>{data.name}</h3>
        <p>{data.title}</p>
        <p>{data.company}</p>
        <p>{data.address}</p>
      </div>
      <button onClick={() => setIsEditing(true)} className="edit-btn">
        <Edit2 size={20} />
        Edit
      </button>
    </div>
  );
};

export default CoverLetterRecipientForm;
