import Link from "next/link";
import React from "react";

interface HeadingProps {
  link?: string;
  text?: string;
  text2?: string;
  dark?: boolean;
}

const PrimaryButton: React.FC<HeadingProps> = ({ link, text, text2, dark }) => {
  return (
    <>
      {dark ? (
        <div className="dark">
          {link ? (
            <Link
              href={link}
              className="inline-block"
              style={{ textDecoration: "none" }}
            >
              <div className="buttons1">
                <button className="btn ValkyRegular xl:py-[30px] lg:py-[25px] md:py-[25px] py-[20px]">
                  <span></span>
                  <p
                    data-start={text2 ? text2 : text}
                    data-text={text2 ? text2 : text}
                    data-title={text}
                  ></p>
                </button>
              </div>
            </Link>
          ) : (
            <div className="buttons1">
              <button className="btn ValkyRegular xl:py-[30px] lg:py-[25px] md:py-[25px] py-[20px]">
                <span></span>
                <p
                  data-start={text2 ? text2 : text}
                  data-text={text2 ? text2 : text}
                  data-title={text}
                ></p>
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="light">
          {link ? (
            <Link
              href={link}
              className="inline-block"
              style={{ textDecoration: "none" }}
            >
              <div className="buttons">
                <button className="btn ValkyRegular xl:py-[30px] lg:py-[25px] md:py-[25px] py-[20px]">
                  <span></span>
                  <p
                    data-start={text2 ? text2 : text}
                    data-text={text2 ? text2 : text}
                    data-title={text}
                  ></p>
                </button>
              </div>
            </Link>
          ) : (
            <div className="buttons">
              <button className="btn ValkyRegular xl:py-[30px] lg:py-[25px] md:py-[25px] py-[20px]">
                <span></span>
                <p
                  data-start={text2 ? text2 : text}
                  data-text={text2 ? text2 : text}
                  data-title={text}
                ></p>
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default PrimaryButton;
