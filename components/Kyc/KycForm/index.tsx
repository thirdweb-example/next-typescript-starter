import { Button, Input, Typography, Upload } from "@web3uikit/core";
import { ValidateInput } from "@web3uikit/core/dist/lib/Input/types";
import { Formik, FormikValues } from "formik";
import { KycPage } from "..";

interface KycFormProps {
  setKycPage: (val: KycPage) => void;
}
const KycForm: React.FC<KycFormProps> = ({ setKycPage }) => {
  const validateFields = (values: FormikValues) => {
    console.log(values);
  };
  const handleSubmit = () => {
    console.log("no error can submit");
    // isComplete();
    setKycPage(KycPage.UploadDocuments);
  };
  return (
    <div>
      <Typography variant="h1" color="#C0C0EE">
        Upload your Aadhar Card
      </Typography>
      <div
        style={{
          display: "flex",
          marginTop: "50px",
          justifyContent: "space-between",
        }}
      >
        <Upload
          acceptedFiles="image/jpeg"
          descriptionText="Only .jpeg files are accepted"
          onChange={function noRefCheck() {}}
          style={{ width: "40%" }}
          theme="withIcon"
        />
        <Formik
          initialValues={{}}
          validate={validateFields}
          onSubmit={handleSubmit}
        >
          {({ errors, handleSubmit, values, touched, setFieldValue }) => {
            return (
              <form onSubmit={handleSubmit} style={{ width: "50%" }}>
                <Input
                  // label="Name"
                  placeholder="Enter Your Name"
                  key={"name"}
                  style={{ marginBottom: "32px", width: "full-width" }}
                />
                <Input
                  // label="Enter your email"
                  placeholder="hello@moralis.io"
                  type="email"
                  key={"email"}
                  style={{ marginBottom: "32px" }}
                  validation={
                    {
                      maxLength: 48,
                      minLength: 1,
                      pattern: "^[^@s]+@[^@s]+.[^@s]+$",
                      regExpInvalidMessage: "That is not a valid email address",
                      required: true,
                    } as ValidateInput
                  }
                />
                <Input
                  // label="Profession"
                  placeholder="Enter Your Occupation"
                  key={"occupation"}
                  style={{ marginBottom: "32px" }}
                />
                <Button
                  id="next"
                  text="Proceed"
                  type="submit"
                  size="large"
                  isFullWidth
                  //   disabled={!!errors}
                  theme="secondary"
                />
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default KycForm;
