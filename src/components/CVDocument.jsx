import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

import ArialRegular from "../assets/fonts/arial/arial-regular.ttf";
import ArialBold from "../assets/fonts/arial/arial-bold.ttf";
import ArialItalic from "../assets/fonts/arial/arial-italic.ttf";
import ArialBoldItalic from "../assets/fonts/arial/arial-bold-italic.ttf";

const CVDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.cv_preview}>
      {/* header */}
      <View style={styles.cv_header}>
        <Text style={styles.name}>{data.generalInfo.data.fullName}</Text>
        <View style={styles.contact_info}>
          <Text>{data.generalInfo.data.email}</Text>
          <Text>{data.generalInfo.data.phone}</Text>
          <Text>{data.generalInfo.data.location}</Text>
        </View>
      </View>

      <View style={styles.cv_section}>
        <Text style={styles.cv_section_title}>Summary</Text>
        <View style={styles.summary_section}>
          <Text style={styles.summary_text}>{data.summary.data.summary}</Text>
        </View>
      </View>

      <View style={styles.cv_section}>
        <Text style={styles.cv_section_title}>Skills</Text>
        {data.skills.data.map((category, index) => (
          <View key={index} style={styles.skills_section}>
            <Text style={styles.skill_category}>{category.category}</Text>
            <View style={styles.skills_list}>
              {category.skills
                .filter((skill) => skill)
                .map((skill, idx) => (
                  <View key={idx} style={styles.list_item}>
                    <View style={styles.list_bullet}>
                      <Text> •</Text>
                    </View>
                    <Text style={styles.list_text}>{skill}</Text>
                  </View>
                ))}
            </View>
          </View>
        ))}
      </View>

      {/* Education */}
      <View style={styles.cv_section}>
        <Text style={styles.cv_section_title}>Education</Text>
        {data.education.data.map((edu, index) => (
          <View key={index} style={styles.education_item}>
            <View style={styles.education_header}>
              <Text style={styles.degree}>{edu.degree}</Text>
              <Text style={styles.dates}>
                {edu.endDate} - {edu.startDate}
              </Text>
            </View>
            <View style={styles.education_details}>
              <Text style={styles.school}>{edu.school}</Text>
              <Text style={styles.location}>{edu.location}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Experience */}
      <View style={styles.cv_section}>
        <Text style={styles.cv_section_title}>Experience</Text>
        {data.experience.data.map((exp, index) => (
          <View key={index} style={styles.experience_item}>
            <View style={styles.experience_header}>
              <Text style={styles.position}>{exp.position}</Text>
              <Text style={styles.dates}>
                {exp.endDate} - {exp.startDate}
              </Text>
            </View>

            <View style={styles.experience_details}>
              <Text style={styles.company}>{exp.company}</Text>
              <Text style={styles.location}>{exp.location}</Text>
            </View>

            <View style={styles.list}>
              {exp.responsibilities.map((responsibility, idx) => (
                <View key={idx} style={styles.list_item}>
                  <View style={styles.list_bullet}>
                    <Text>•{"  "}</Text>
                  </View>
                  <Text style={styles.list_text}>{responsibility}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);

Font.register({
  family: "Arial",
  fonts: [
    { src: ArialRegular },
    { src: ArialBold, fontWeight: "bold" },
    { src: ArialItalic, fontStyle: "italic" },
    { src: ArialBoldItalic, fontWeight: "bold", fontStyle: "italic" },
  ],
});

const styles = StyleSheet.create({
  cv_preview: {
    background: "white",
    padding: "40px",
    // maxWidth: "800px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial",
    fontSize: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  cv_header: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    textAlign: "center",
    paddingBottom: "16px",
    borderBottom: "2px solid #333",
  },
  name: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  contact_info: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "24px",
    color: "#666",
    fontSize: "14px",
    alignItems: "baseline",
  },
  cv_section: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  cv_section_title: {
    color: "#2563eb",
    borderBottom: "1px solid #ddd",
    paddingBottom: "8px",
    fontWeight: "bold",
    fontSize: "16px",
  },
  summary_section: {},
  summary_text: {},
  skills_section: {
    display: "flex",
    flexDirection: "row",
  },
  skill_category: {
    fontWeight: "bold",
  },
  skills_list: {
    display: "flex",
    flexDirection: "row",
    gap: "8px",
    paddingLeft: "8px",
    lineHeight: "0.8",
  },
  education_item: {},
  education_header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    paddingBottom: "2px",
  },
  education_details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  degree: {
    fontWeight: "bold",
  },
  school: {
    fontWeight: "bold",
    color: "#666",
  },
  location: {
    color: "#666",
  },
  dates: {},
  experience_item: {},
  experience_header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    paddingBottom: "2px",
  },
  experience_details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#666",
    paddingBottom: "8px",
  },
  position: {
    fontWeight: "bold",
  },
  company: {
    fontWeight: "bold",
  },
  list: {
    paddingLeft: "10px",
    lineHeight: "0.9",
  },
  list_item: {
    display: "flex",
    flexDirection: "row",
  },
  list_bullet: {
    transform: "translateY(-2px)",
    fontSize: "18px",
  },
  list_text: {},
});

export default CVDocument;
