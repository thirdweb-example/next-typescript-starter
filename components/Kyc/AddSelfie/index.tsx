/** @jsxImportSource @emotion/react */
import React, {useState, useRef, useCallback, useEffect} from "react";
import * as styles from "./styles";
import Webcam from "react-webcam";
import Image from "next/image";
import Button from "../../shared/Button";
import camera from "../../../public/icons/camera 1.png";

const videoConstraints = {
  width: 220,
  height: 200,
  facingMode: "user"
};

interface AddSelfieProps {
  step: number;
  setStep: (step: number) => void;
  selfie: string;
  setSelfie: React.Dispatch<React.SetStateAction<string>>;
}

const AddSelfie: React.FC<AddSelfieProps> = ({step, setStep, selfie, setSelfie}) => {
  const [allowed, setAllowed] = useState(false);
  const webcamRef = useRef(null);
  const capture = useCallback(
    () => {
      if (webcamRef.current) {
        // @ts-ignore
        const imageSrc = webcamRef?.current?.getScreenshot();
        setSelfie(imageSrc);
      }
    },

    [webcamRef]
  );
  if (selfie.length) {
    const stopCamera = async () => {
      await navigator.mediaDevices.getUserMedia({ video: false }).then((value) => {
       value.getVideoTracks()[0].stop();
    });
    }
    stopCamera();
  }

  useEffect(() => {
    if (selfie.length) {
      setAllowed(false);
    }
  }, [selfie])


  return <div>
    <div css={styles.heading}>Upload Selfie</div>
      <div css={styles.cameraContainer}>
      {!selfie.length ?
        <div>
          {allowed ?
            <div css={styles.cameraContainer}>
              <Webcam
                audio={false}
                height={200}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={220}
                videoConstraints={videoConstraints}
              />
              <div>
                <Button type="blue"
                  onClick={async() => {
                    capture();
                    try {
                      await navigator.mediaDevices.getUserMedia({ video: false }).then((value) => {
                      setAllowed(true);
                        value.getVideoTracks()[0].stop();
                    });
                    } catch (e) {
                      console.log(e);
                    }
                  }}>
                  Capture</Button>
              </div>
            </div> : <div css={styles.allowContainer} onClick={async () => {
              try {
                await navigator.mediaDevices.getUserMedia({ video: true }).then((value) => {
                  setAllowed(true);
                  console.log(value);
                });
              } catch (e) {
                console.log(e);
              }
            }}>
              <div css={styles.cameraText}>
                <Image src={camera} alt="" />
                <div>Turn on Camera</div>
              </div>
            </div>}
          </div>
        : <div css={styles.selfieContainer}>
          <Image width={220} height={200} src={selfie} alt="" />
          <div>
            <Button type="primary" onClick={() => setSelfie("")}>Reset</Button>
          </div>
        </div>}
      </div>
      <div css={styles.buttonContainer}>
      <Button style={styles.backButton} type="tertiary" onClick={() => setStep(step-1)}>Back</Button>
      <Button type="blue" onClick={() => setStep(step+1)} disabled={selfie.length===0}>Submit</Button>
    </div>
  </div>;
}

export default AddSelfie;
