import { BlobProvider } from "@react-pdf/renderer";
import CVDocument from "./CVDocument";

const PDFPreview = ({ data }) => {
  return (
    <div>
      <BlobProvider document={<CVDocument data={data} />}>
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

export default PDFPreview;
