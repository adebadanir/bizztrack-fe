import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type Props = {
  type?: string;
  name?: string;
  label?: string;
  htmlfor?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: Props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [type, setType] = useState(props.type);
  const onClick = () => {
    setIsClicked(!isClicked);
    setType(isClicked ? "password" : "text");
  };
  return (
    <div className="flex flex-col gap-[4px] w-full max-w-[520px]">
      <label htmlFor={props.htmlfor}>{props.label}</label>
      <div className="flex h-[48px] w-full bg-white border-b border-b-[#697077] p-[24px] items-center justify-between">
        <input type={type} value={props.value} placeholder={props.placeholder} className="w-full" />
        {props.type === "password" ? (
          <button type="button" onClick={onClick}>
            {isClicked ? <FaEyeSlash /> : <FaEye />}
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Input;
