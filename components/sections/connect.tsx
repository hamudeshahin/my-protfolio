import React, { FC, Fragment, useCallback, useRef, useState } from "react";
import Container from "../utils/container";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import A from "../ui/link";
import TypewriterComponent from "typewriter-effect";
import Button from "../ui/button";

interface IConnectData {
  name: string | undefined;
  email: string | undefined;
  message: string | undefined;
}

const Connect: FC = () => {
  const [started, setStarted] = useState<boolean>(false);
  const [inputFocus, setInputFocus] = useState<boolean>(false);
  const [data, setData] = useState<IConnectData>({
    name: "",
    email: "",
    message: "",
  });

  // steps
  /*
   * 0 - name
   * 1 - email
   * 2 - message and submit !
   */
  const [step, setStep] = useState<number>(0);
  // refs
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const startConnect = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      e.preventDefault();
      // check if already started
      if (started) return;
      setStarted(true);
    },
    [started]
  );

  // focus input detect
  const handleInputOnFocus = useCallback(() => {
    console.log("onput on focus");
    if (inputFocus) return;
    setInputFocus(true);
  }, [inputFocus]);
  // unfocus input detect
  const handleInputOnBlur = useCallback(() => {
    console.log("Input On Blurs");
    console.log(!inputRef?.current?.value);
    if (
      !inputFocus ||
      inputRef?.current?.value ||
      inputRef?.current?.value?.trim() !== ""
    )
      return;
    setInputFocus(false);
  }, [inputFocus]);
  // handle next step
  const handleNextStep = useCallback(() => {
    let isOk: boolean = false;
    const data = inputRef.current?.value.trim();
    if (step === 0) {
      if (!data || data === "") {
        alert("Please fill your name");
        return;
      }
      setData((prev): any => {
        const newData = prev;
        newData.name = data;
        return { ...newData };
      });
      isOk = true;
    } else if (step === 1) {
      if (!data || data === "") {
        alert("Please fill your email");
        return;
      }
      setData((prev): any => {
        const newData = prev;
        newData.email = data;
        return { ...newData };
      });
      isOk = true;
    } else if (step === 2) {
      const data = textareaRef.current?.value.trim();
      if (!data || data === "") {
        alert("Please fill your message");
        return;
      }
      setData((prev): any => {
        const newData = prev;
        newData.message = data;
        return { ...newData };
      });
      alert("Message Sent !");
      setStep(1000);
    }

    if (isOk) {
      setInputFocus(false);
      setStep(step + 1);
      isOk = false;
    }
  }, [step]);

  console.log("step");
  console.log(step);

  return (
    <div className="p-5 py-20">
      <Container>
        <div className="grid grid-cols-2 space-y-20">
          <div className="col-span-2 sm:col-span-1">
            <h2 className="text-7xl font-bold text-slate-300 w-full mb-10 sm:w-[400px]">
              Let&acute;s{" "}
              <span className="text-green-500 inline-block transform rotate-90 sm:rotate-0">
                <BsArrowRight style={{ display: "inline-block" }} />
              </span>{" "}
              Connect.
            </h2>
            <p className="text-slate-500">
              If you have any review or something you want to say, you can write
              it here. If it seems that I am expected to reply back to your
              message, I will be happy to reply back. If your message is
              considered as a reference message, it will be displayed in the
              reference section. {`\u{1F604}`}
            </p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <div className="w-[90%] mx-auto ">
              {!started ? (
                <div>
                  Hi There {`\u{1F44B}`}, if you want connect me please{" "}
                  <a
                    href="#"
                    onClick={startConnect}
                    className="text-red-500 underline underline-offset-2"
                  >
                    click here.
                  </a>
                </div>
              ) : (
                <div className="flex flex-col gap-2 relative gap-y-5">
                  {step !== 1000 && (
                    <>
                      {data.name && (
                        <div className={step === 1 ? "mb-10" : ""}>
                          <span className="text-red-500 font-bold">Name:</span>{" "}
                          {data.name}
                        </div>
                      )}
                      {data.email && (
                        <div className="mb-16">
                          <span className="text-red-500 font-bold">Email:</span>{" "}
                          {data.email}
                        </div>
                      )}
                    </>
                  )}

                  <div className="relative">
                    {step === 0 && (
                      <Fragment>
                        <label
                          className={`absolute text-2xl -z-0 transition-all left-2 transform -translate-y-1/2 ${
                            inputFocus === true ? "-top-1/2" : "top-1/2"
                          }`}
                        >
                          <TypewriterComponent
                            options={{
                              autoStart: true,
                              loop: false,
                              strings: "Please write your name.",
                              cursorClassName: "text-red-500 animate-ping",
                            }}
                          />
                        </label>
                        <input
                          type="text"
                          className={`h-16 text-2xl w-full border border-x-0 border-y-0 border-b-2 bg-transparent outline-none relative ${
                            inputFocus ? "text-opacity-100" : "text-opacity-0"
                          }`}
                          ref={inputRef}
                          onFocus={handleInputOnFocus}
                          onBlur={handleInputOnBlur}
                        />
                      </Fragment>
                    )}
                    {step === 1 && (
                      <Fragment>
                        <label
                          className={`absolute text-2xl -z-0 transition-all left-2 transform -translate-y-1/2 ${
                            inputFocus === true ? "-top-1/2" : "top-1/2"
                          }`}
                        >
                          <TypewriterComponent
                            options={{
                              autoStart: true,
                              loop: false,
                              strings: "Please write your email.",
                              cursorClassName: "text-red-500 animate-ping",
                            }}
                          />
                        </label>
                        <input
                          type="text"
                          className={`h-16 text-2xl w-full border border-x-0 border-y-0 border-b-2 bg-transparent outline-none relative ${
                            inputFocus ? "text-opacity-100" : "text-opacity-0"
                          }`}
                          ref={inputRef}
                          onFocus={handleInputOnFocus}
                          onBlur={handleInputOnBlur}
                        />
                      </Fragment>
                    )}
                    {step === 2 && (
                      <Fragment>
                        <label
                          className={`absolute text-2xl -z-0 transition-all left-2 transform -translate-y-1/2 ${
                            inputFocus === true ? "-top-1/2" : "top-1/2"
                          }`}
                        >
                          <TypewriterComponent
                            options={{
                              autoStart: true,
                              loop: false,
                              strings: "Please write your message",
                              cursorClassName: "text-red-500 animate-ping",
                            }}
                          />
                        </label>
                        <textarea
                          className={`h-16 text-2xl w-full border border-x-0 border-y-0 border-b-2 bg-transparent outline-none relative ${
                            inputFocus ? "text-opacity-100" : "text-opacity-0"
                          }`}
                          rows={6}
                          ref={textareaRef}
                          onFocus={handleInputOnFocus}
                          onBlur={handleInputOnBlur}
                        />
                      </Fragment>
                    )}
                    {step === 1000 && (
                      <div className="bg-green-500 bg-opacity-20 text-green-500 border border-green-500 p-2 pl-10 before:content-['✅'] before:inline-block before:mr-2">
                        Message has been sent successfully !
                      </div>
                    )}
                  </div>
                  {step !== 1000 && (
                    <Button type="warning" onClick={handleNextStep}>
                      {step < 2 ? <>Next</> : <>Send</>}
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Connect;
