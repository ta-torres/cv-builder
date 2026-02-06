import { BlobProvider } from "@react-pdf/renderer";
import CoverLetterDocument from "./CoverLetterDocument";

const CoverLetterPDFPreview = ({ data }) => {
  return (
    <div>
      <BlobProvider document={<CoverLetterDocument data={data} />}>
        {({ url, loading, error }) => {
          if (loading) return <div>Loading preview...</div>;
          if (error) return <div>Error generating preview</div>;

          return (
            <embed
              src={url}
              type="application/pdf"
              style={{ width: "100%", height: "100vh" }}
            />
          );
        }}
      </BlobProvider>
    </div>
  );
};

export default CoverLetterPDFPreview;
