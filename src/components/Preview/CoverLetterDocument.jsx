import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

import ArialRegular from "./fonts/arial/arial-regular.ttf";
import ArialBold from "./fonts/arial/arial-bold.ttf";
import ArialItalic from "./fonts/arial/arial-italic.ttf";
import ArialBoldItalic from "./fonts/arial/arial-bold-italic.ttf";

const CoverLetterDocument = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <View style={styles.headerMain}>
          <Text style={styles.name}>{data.sender.data.fullName}</Text>
          <Text style={styles.jobTitle}>{data.sender.data.jobTitle}</Text>
        </View>
        <View style={styles.contactInfo}>
          <Text style={styles.contactLine}>{data.sender.data.email}</Text>
          <Text style={styles.contactLine}>{data.sender.data.phone}</Text>
          <Text style={styles.contactLine}>{data.sender.data.webpage}</Text>
          <Text style={styles.contactLine}>{data.sender.data.address}</Text>
        </View>
      </View>

      <View style={styles.body}>
        <Text style={styles.date}>{data.letter.data.date}</Text>

        <View style={styles.recipientBlock}>
          <Text style={styles.recipientLine}>{data.recipient.data.name}</Text>
          <Text style={styles.recipientLine}>{data.recipient.data.title}</Text>
          <Text style={styles.recipientLine}>
            {data.recipient.data.company}
          </Text>
          <Text style={styles.recipientLine}>
            {data.recipient.data.address}
          </Text>
        </View>

        {/* {data.letter.data.subject ? (
          <Text style={styles.subject}>{data.letter.data.subject}</Text>
        ) : null} */}

        <Text style={styles.paragraph}>{data.letter.data.greeting}</Text>

        {data.letter.data.body
          .split("\n")
          .filter((p) => p.trim() !== "")
          .map((paragraph, idx) => (
            <Text key={idx} style={styles.paragraph}>
              {paragraph}
            </Text>
          ))}

        <Text style={styles.paragraph}>{data.letter.data.closing}</Text>
        <Text style={styles.signature}>{data.letter.data.signature}</Text>
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
  page: {
    background: "white",
    padding: "40px",
    fontFamily: "Arial",
    fontSize: "12px",
    margin: "0",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
    paddingBottom: "12px",
    borderBottom: "1px solid #ddd",
  },
  headerMain: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    flexShrink: 1,
    textAlign: "left",
  },
  name: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#111827",
  },
  jobTitle: {
    fontSize: "14px",
    color: "#374151",
  },
  contactInfo: {
    display: "flex",
    flexDirection: "column",
    fontSize: "11px",
    alignItems: "flex-start",
    textAlign: "left",
    flexShrink: 0,
    color: "#374151",
  },
  contactLine: {},
  body: {
    paddingTop: "14px",
  },
  date: {
    textAlign: "left",
    color: "#374151",
    paddingBottom: "10px",
  },
  recipientBlock: {
    paddingBottom: "12px",
  },
  recipientLine: {
    color: "#111827",
  },
  subject: {
    color: "#2563eb",
    fontWeight: "bold",
    fontSize: "14px",
    paddingBottom: "10px",
  },
  paragraph: {
    paddingBottom: "10px",
    // lineHeight: 1.35,
  },
  signature: {
    paddingTop: "2px",
    fontWeight: "bold",
  },
});

export default CoverLetterDocument;
