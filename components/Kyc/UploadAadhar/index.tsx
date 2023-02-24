/** @jsxImportSource @emotion/react */
import * as styles from "./styles";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Image from "next/image";
import cross from "../../../public/icons/cross.png";
import Button from "../../shared/Button";
import { Aadhar } from "..";

interface UploadAadharProps {
  step: number;
  setStep: (step: number) => void;
  aadhar: {
    front: FileList;
    back: FileList;
  },
  setAadhar: Dispatch<SetStateAction<Aadhar>>
}

const UploadAadhar: React.FC<UploadAadharProps> = ({step, setStep, aadhar, setAadhar}) => {
  const [frontUrl, setFrontUrl] = useState<string>("");
  const [backUrl, setBackUrl] = useState<string>("");
  const [front, frontType] = aadhar.front.length?aadhar.front[0].type.split("/"):["",""];
  const [back, backType] = aadhar.back.length ? aadhar.back[0].type.split("/") : ["", ""];
 

  useEffect(() => {
    if (aadhar.front.length) {
      setFrontUrl(URL.createObjectURL(aadhar.front[0]));
    } else {
      setFrontUrl("");
    }
    if (aadhar.back.length) {
      setBackUrl(URL.createObjectURL(aadhar.back[0]));
    } else {
      setBackUrl("");
    }
  }, [aadhar])

  return <div>
    <div css={styles.heading}>Upload Aadhar</div>
    <div>
      <div css={styles.heading}>Files</div>
      <div css={styles.container}>
        {frontUrl.length && aadhar.front.length ? <div css={styles.file} >
                {aadhar.front[0].type.includes("image/") ?
                  <Image css={styles.file} width={45} height={45} src={frontUrl} alt="" /> :
                  <div css={styles.notPreview}>{frontType}</div>
                }
                <div css={styles.fileName}>{aadhar.front[0].name}</div>
                <Image css={styles.crossImg} src={cross} alt="" width={25} height={20} onClick={() => {
            setAadhar({  ...aadhar,front: {} as FileList });
                }} />
        </div> : <div css={styles.uploadContainer}>
            <div>+</div>
          <div>Front</div>
          <input type="file" title="" onChange={e => {
              setAadhar({ ...aadhar, front: e.target.files as FileList });
          }} />
        </div>}
        {backUrl.length && aadhar.back.length ? <div css={styles.file} >
                {aadhar.back[0].type.includes("image/") ?
                  <Image css={styles.file} width={45} height={45} src={backUrl} alt="" /> :
                  <div css={styles.notPreview}>{backType}</div>
                }
                <div css={styles.fileName}>{aadhar.back[0].name}</div>
                <Image css={styles.crossImg} src={cross} alt="" width={25} height={20} onClick={() => {
            setAadhar({ ...aadhar, back: {} as FileList });
                }} />
        </div> : <div css={styles.uploadContainer}>
            <div>+</div>
          <div>Back</div>
          <input type="file" title="" onChange={e => {
              setAadhar({ ...aadhar, back: e.target.files as FileList });
          }} />
          </div>}
      </div>
    </div>
    <div css={styles.buttonContainer}>
      <Button style={styles.backButton} type="tertiary" onClick={() => setStep(step-1)}>Back</Button>
      <Button type="blue" onClick={() => setStep(step+1)} disabled={(!aadhar.front.length||!aadhar.back.length)}>Next</Button>
    </div>
  </div>;
}

export default UploadAadhar;