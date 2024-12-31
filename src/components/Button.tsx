import { ReactElement } from "react";

interface Buttonprops {
  text: string;
  size: "sm" | "lr" | "md";
  startIcon?: ReactElement;
  variant: "primary" | "secondary";
  onClick?: () => void;
  fullWidth?: boolean;
  disabled? : boolean; 
}

const sizestyle = {
  sm: "px-2 py-1 text-sm rounded-sm",
  md: "px-4 py-2 text-md rounded-md",
  lr: "px-8 py-4 rounded-xl text-xl",

};

const variantStyle = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-200 text-purple-600",
};

const defaultStyle = "flex items-center justify-between gap-2"; // Added gap between icon and text.

export const Button = (props: Buttonprops) => { 
  return (
    <button 
      className={`${sizestyle[props.size]} ${props.disabled ? "opacity-45": ""}  ${variantStyle[props.variant]} ${defaultStyle} ${props.fullWidth ? "w-full mx-auto" : ""}`}
      onClick={props.onClick} // Ensure onClick works properly
   disabled={props.disabled} > 
      {props.startIcon && <span>{props.startIcon}</span>} {/* Ensures icon is optional */}
    {props.text} 
    </button>
  );
};
