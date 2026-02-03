import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

import ArialRegular from "./fonts/arial/arial-regular.ttf";
import ArialBold from "./fonts/arial/arial-bold.ttf";
import ArialItalic from "./fonts/arial/arial-italic.ttf";
import ArialBoldItalic from "./fonts/arial/arial-bold-italic.ttf";

const CVDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.cv_preview}>
      {/* Header */}
      <View style={styles.cv_header}>
        <View style={styles.profile_photo_wrapper}>
          {data.generalInfo.data.photo ? (
            <Image
              style={styles.profile_photo}
              src={data.generalInfo.data.photo}
            />
          ) : null}
        </View>

        <View style={styles.header_main}>
          <Text style={styles.name}>{data.generalInfo.data.fullName}</Text>
          <Text style={styles.jobTitle}>{data.generalInfo.data.jobTitle}</Text>
        </View>

        <View style={styles.contact_info}>
          <Text style={styles.contact_line}>{data.generalInfo.data.email}</Text>
          <Text style={styles.contact_line}>{data.generalInfo.data.phone}</Text>
          <Text style={styles.contact_line}>
            {data.generalInfo.data.webpage}
          </Text>
        </View>
      </View>

      <View style={styles.cv_body}>
        {/* Summary */}
        <View style={styles.cv_section}>
          <Text style={styles.cv_section_title}>
            {data.summary.name || "Summary"}
          </Text>
          <View style={styles.summary_section}>
            <Text style={styles.summary_text}>{data.summary.data.summary}</Text>
          </View>
        </View>

        {/* Skills */}
        <View style={styles.cv_section}>
          <Text style={styles.cv_section_title}>
            {data.skills.name || "Skills"}
          </Text>
          <View style={styles.skills_section}>
            {data.skills.data.map((category, index) => (
              <View key={index} style={styles.skills_item}>
                <View style={styles.list}>
                  <View style={styles.list_bullet}>
                    <Text>•{"  "}</Text>
                  </View>
                </View>
                <View style={styles.skill_category_container}>
                  <Text style={styles.skill_category}>{category.category}</Text>
                </View>
                <View style={styles.skills_list}>
                  <Text style={styles.list_text}>{category.skills}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Education */}
        <View style={styles.cv_section}>
          <Text style={styles.cv_section_title}>
            {data.education.name || "Education"}
          </Text>
          <View style={styles.education_section}>
            {data.education.data.map((edu, index) => (
              <View key={index} style={styles.education_item}>
                <View style={styles.education_header}>
                  <Text style={styles.degree}>{edu.degree}</Text>
                  <Text style={styles.dates}>
                    {edu.startDate} - {edu.endDate}
                  </Text>
                </View>
                <View style={styles.education_details}>
                  <Text style={styles.school}>{edu.school}</Text>
                  <Text style={styles.location}>{edu.location}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Courses and Certifications */}
        <View style={styles.cv_section}>
          <Text style={styles.cv_section_title}>
            {data.courses.name || "Courses and Certifications"}
          </Text>
          <View style={styles.education_section}>
            {data.courses.data.map((course, index) => (
              <View key={index} style={styles.education_item}>
                <View style={styles.course_header}>
                  <View style={styles.course_title}>
                    <Text style={styles.course_name}>{course.name}</Text>
                    <Text style={styles.course_provider}>
                      {" "}
                      ({course.provider})
                    </Text>
                  </View>
                  <Text style={styles.dates}>{course.year}</Text>
                </View>
                {course.description && (
                  <View style={styles.list}>
                    <View style={styles.list_item}>
                      <View style={styles.list_bullet}>
                        <Text>•{"  "}</Text>
                      </View>
                      <Text style={styles.list_text}>{course.description}</Text>
                    </View>
                  </View>
                )}
              </View>
            ))}
          </View>
        </View>

        {/* Experience */}
        <View style={styles.cv_section}>
          <Text style={styles.cv_section_title}>
            {data.experience.name || "Experience"}
          </Text>
          <View style={styles.experience_section}>
            {data.experience.data.map((exp, index) => (
              <View key={index} style={styles.experience_item}>
                <View style={styles.experience_header}>
                  <Text style={styles.position}>{exp.position}</Text>
                  <Text style={styles.dates}>
                    {exp.startDate} - {exp.endDate}
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
        </View>

        {/* Personal Projects */}
        <View style={styles.cv_section}>
          <Text style={styles.cv_section_title}>
            {data.projects.name || "Personal Projects"}
          </Text>
          <View style={styles.experience_section}>
            {data.projects.data.map((project, index) => (
              <View key={index} style={styles.experience_item}>
                <View style={styles.experience_header}>
                  <Text style={styles.position}>{project.name}</Text>
                  <Text style={styles.company}>{project.link}</Text>
                </View>

                <Text>{project.description}</Text>

                <View style={styles.list}>
                  {project.features.map((feature, idx) => (
                    <View key={idx} style={styles.list_item}>
                      <View style={styles.list_bullet}>
                        <Text>•{"  "}</Text>
                      </View>
                      <Text style={styles.list_text}>{feature}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>
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
    fontFamily: "Arial",
    fontSize: "12px",
    margin: "0",
  },
  cv_header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
  },
  profile_photo_wrapper: {
    width: "80px",
    height: "80px",
    borderRadius: "500px",
    overflow: "hidden",
    backgroundColor: "#e5e7eb",
    flexShrink: 0,
  },
  profile_photo: {
    width: "80px",
    height: "80px",
    objectFit: "cover",
  },
  header_main: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    flexShrink: 1,
    textAlign: "left",
  },
  name: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  jobTitle: {
    fontSize: "16px",
  },
  contact_info: {
    display: "flex",
    flexDirection: "column",
    fontSize: "12px",
    alignItems: "flex-start",
    textAlign: "left",
    flexShrink: 0,
  },
  contact_line: {
    // lineHeight: "1.1",
  },
  cv_body: {
    paddingTop: "8px",
  },
  cv_section: {
    display: "flex",
    flexDirection: "column",
  },
  cv_section_title: {
    color: "#2563eb",
    borderBottom: "1px solid #ddd",
    fontWeight: "bold",
    fontSize: "16px",
  },
  summary_section: {
    paddingTop: "2px",
  },
  summary_text: {
    paddingBottom: "2px",
  },
  skills_section: {
    paddingTop: "2px",
  },
  skills_item: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  skill_category_container: {
    minWidth: "80px",
  },
  skill_category: {
    fontWeight: "bold",
  },
  skills_list: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: "8px",
    lineHeight: "0.8",
    flex: "1",
    flexWrap: "wrap",
    alignItems: "flex-start",
  },
  education_section: {
    paddingTop: "2px",
  },
  education_item: {
    // paddingBottom: "2px",
  },
  education_header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  education_details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  degree: {
    fontWeight: "bold",
  },
  school: {},
  location: {
    color: "#666",
  },
  dates: {},
  experience_section: {
    paddingTop: "2px",
  },
  experience_item: {
    paddingBottom: "2px",
  },
  experience_header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  experience_details: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#666",
  },
  position: {
    fontWeight: "bold",
  },
  company: {
    fontWeight: "bold",
  },
  list: {
    paddingLeft: "10px",
    lineHeight: "0.8",
  },
  list_item: {
    display: "flex",
    flexDirection: "row",
  },
  list_bullet: {
    transform: "translateY(-3px)",
    fontSize: "18px",
  },
  list_text: {
    lineHeight: "0.8",
    whiteSpace: "nowrap",
  },
  project_link: {
    color: "#2563eb",
    textDecoration: "underline",
  },
  course_header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    // paddingBottom: "2px",
  },
  course_title: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
  },
  course_name: {
    fontWeight: "bold",
  },
  course_provider: {},
});

export default CVDocument;
