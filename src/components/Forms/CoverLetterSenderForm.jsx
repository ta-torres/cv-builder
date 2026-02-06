import { useEffect, useState } from "react";
import { Edit2 } from "lucide-react";
import "./Forms.css";

const CoverLetterSenderForm = ({ data, onSubmit, hasEdited }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    webpage: "",
    address: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (hasEdited) {
      setFormData(data);
    } else {
      setFormData({
        fullName: "",
        jobTitle: "",
        email: "",
        phone: "",
        webpage: "",
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
          placeholder="Phone number"
        />
      </div>
      <div className="form-group">
        <label>Webpage</label>
        <input
          type="text"
          value={formData.webpage}
          onChange={(e) =>
            setFormData({ ...formData, webpage: e.target.value })
          }
          placeholder="https://example.com"
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
          placeholder="City, Country"
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
        <h3>{data.fullName}</h3>
        <h4>{data.jobTitle}</h4>
        <p>{data.email}</p>
        <p>{data.phone}</p>
        <p>
          <a href={data.webpage} target="_blank" rel="noopener noreferrer">
            {data.webpage}
          </a>
        </p>
        <p>{data.address}</p>
      </div>
      <button onClick={() => setIsEditing(true)} className="edit-btn">
        <Edit2 size={20} />
        Edit
      </button>
    </div>
  );
};

export default CoverLetterSenderForm;
