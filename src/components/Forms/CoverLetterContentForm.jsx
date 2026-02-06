import { useEffect, useState } from "react";
import { Edit2 } from "lucide-react";
import "./Forms.css";

const CoverLetterContentForm = ({ data, onSubmit, hasEdited }) => {
  const [formData, setFormData] = useState({
    date: "",
    subject: "",
    greeting: "Dear Hiring Manager,",
    body: "",
    closing: "Sincerely,",
    signature: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (hasEdited) {
      setFormData(data);
    } else {
      setFormData({
        date: "",
        subject: "",
        greeting: "Dear Hiring Manager,",
        body: "",
        closing: "Sincerely,",
        signature: "",
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
        <label>Date</label>
        <input
          type="text"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          placeholder="e.g. February 3, 2026"
        />
      </div>
      <div className="form-group">
        <label>Subject</label>
        <input
          type="text"
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
          placeholder="e.g. Application for Front-End Developer"
        />
      </div>
      <div className="form-group">
        <label>Greeting</label>
        <input
          type="text"
          value={formData.greeting}
          onChange={(e) =>
            setFormData({ ...formData, greeting: e.target.value })
          }
          placeholder="e.g. Dear Hiring Manager,"
        />
      </div>
      <div className="form-group">
        <label>Body</label>
        <textarea
          value={formData.body}
          onChange={(e) => setFormData({ ...formData, body: e.target.value })}
          placeholder="Write your cover letter here..."
          rows={10}
        />
      </div>
      <div className="form-group">
        <label>Closing</label>
        <input
          type="text"
          value={formData.closing}
          onChange={(e) =>
            setFormData({ ...formData, closing: e.target.value })
          }
          placeholder="e.g. Sincerely,"
        />
      </div>
      <div className="form-group">
        <label>Signature</label>
        <input
          type="text"
          value={formData.signature}
          onChange={(e) =>
            setFormData({ ...formData, signature: e.target.value })
          }
          placeholder="Your name"
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
        <p>{data.date}</p>
        <h3>{data.subject}</h3>
        <p>{data.greeting}</p>
        <p style={{ whiteSpace: "pre-wrap" }}>{data.body}</p>
        <p>{data.closing}</p>
        <p>{data.signature}</p>
      </div>
      <button onClick={() => setIsEditing(true)} className="edit-btn">
        <Edit2 size={20} />
        Edit
      </button>
    </div>
  );
};

export default CoverLetterContentForm;
