import { FC } from "react";

interface ButtonProps {
  buttonStyle: string;
  buttonTitle: string;
  onclick: () => void;
}

const Button: FC<ButtonProps> = ({ buttonStyle, buttonTitle, onclick }) => {
  return (
    <div>
      <button
        onClick={onclick}
        className={` px-3 py-1 text-sm  ${buttonStyle} rounded-md`}
      >
        {buttonTitle}
      </button>
    </div>
  );
};

export default Button;
