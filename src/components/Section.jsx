import { ChevronDown } from "lucide-react";
import "./Section.css";

const Section = ({ title, icon, isExpanded, onToggle, children }) => {
  return (
    <div className="section">
      <div className="section-header" onClick={onToggle}>
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
