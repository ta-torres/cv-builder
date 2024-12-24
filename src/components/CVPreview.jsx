import "../styles/CVPreview.css";

const CVPreview = ({ data }) => {
  const { generalInfo, education, experience } = data;

  return (
    <div className="cv-preview">
      <header className="cv-header">
        <h1>{generalInfo.data.fullName}</h1>
        <div className="contact-info">
          <span>{generalInfo.data.email}</span>
          <span>{generalInfo.data.phone}</span>
          <span>{generalInfo.data.location}</span>
        </div>
      </header>

      <section className="cv-section">
        <h2>Education</h2>
        {education.data.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-header">
              <h3>{edu.school}</h3>
              <span>{edu.location}</span>
            </div>
            <div className="education-details">
              <p>{edu.degree}</p>
              <span>
                {edu.startDate} - {edu.endDate}
              </span>
            </div>
          </div>
        ))}
      </section>

      <section className="cv-section">
        <h2>Experience</h2>
        {experience.data.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <h3>{exp.company}</h3>
              <span>{exp.location}</span>
            </div>
            <div className="experience-details">
              <p className="position">{exp.position}</p>
              <span>
                {exp.startDate} - {exp.endDate}
              </span>
            </div>
            <ul className="responsibilities">
              {exp.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
};

export default CVPreview;
