import { Button, Input, Upload } from "@web3uikit/core";
import { Formik, FormikValues } from "formik";

interface UploadDocumentsProps {}
const UploadDocuments: React.FC<UploadDocumentsProps> = ({}) => {
  const handleSubmit = () => {
    console.log("no error can submit");
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <p>Uploaded document preview</p>
          <div>
            <p>Name </p>
            <p>Email </p>
            <p>Profession </p>
          </div>
        </div>
        <div>
          <Upload onChange={function noRefCheck() {}} theme="withIcon" />
          <Button
            id="next"
            text="proceed"
            size="large"
            isFullWidth
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default UploadDocuments;
