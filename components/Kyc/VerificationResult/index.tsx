import { Button, Input, Upload } from "@web3uikit/core";
import { Formik, FormikValues } from "formik";

interface VerificationResultProps {}
const VerificationResult: React.FC<VerificationResultProps> = ({}) => {
  const validateFields = (values: FormikValues) => {
    console.log(values);
  };
  const handleSubmit = () => {
    console.log("no error can submit");
  };
  return (
    <div style={{ display: "flex" }}>
      <img src={"daw"} />
      <div>
        <p>NAME | EMAIL</p>
        <p>Occupation</p>
        <Button size="xl" />
      </div>
    </div>
  );
};

export default VerificationResult;
