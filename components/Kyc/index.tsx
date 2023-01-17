import { Stepper } from "@web3uikit/core";
import { useCallback, useEffect, useState } from "react";
import KycForm from "./KycForm";
import UploadDocuments from "./UploadDocuments";
import VerificationResult from "./VerificationResult";
import image from "../public/images/background-image.png";
export enum KycPage {
  KycForm,
  UploadDocuments,
  VerificationResult,
}
const KycHome: React.FC = () => {
  const [kycPage, setKycPage] = useState<KycPage>(KycPage.KycForm);
  const [step, setStep] = useState<number>(1);

  useEffect(() => {
    console.log(step);
  }, [step]);
  return (
    <div style={{ width: "100%", minHeight: "70%" }}>
      <Stepper
        contentPadding="100px"
        onComplete={function noRefCheck() {}}
        onNext={function noRefCheck() {}}
        onPrev={function noRefCheck() {}}
        step={1}
        stepData={[
          {
            content: <KycForm setKycPage={setKycPage} />,
            stepTitle: "Email and Address Verification",
          },
          {
            content: <UploadDocuments />,
            title: "Click A Selfie",
            stepTitle: "Upload Selfie",
          },
          {
            content: <VerificationResult />,
            title: "Kyc Under Review",
            stepTitle: "Kyc Status",
          },
        ]}
        completeMessage={"please click here to continue"}
        completeTitle={"Thanks for verifying kyc"}
        orientation="vertical"
        stepperWidth={20}
        hasNavButtons={false}
      />
      {/* {kycComponent()} */}
    </div>
  );
};

export default KycHome;
