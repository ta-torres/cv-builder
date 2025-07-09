import { ChevronDown } from "lucide-react";
import { useState } from "react";
import "./Section.css";

const Section = ({ title, icon, defaultExpanded = true, children }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="section">
      <div className="section-header" onClick={toggleExpansion}>
        <div className="section-title">
          {icon}
          <h2>{title}</h2>
        </div>
        <ChevronDown
          size={20}
          className={`chevron ${isExpanded ? "expanded" : ""}`}
        />
      </div>
      {isExpanded && <div className="section-content">{children}</div>}
    </div>
  );
};

export default Section;
