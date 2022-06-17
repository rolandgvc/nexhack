import type {
  // CSSProperties,
  FC,
  MouseEvent,
  ReactElement,
} from "react";
import type React from "react";

export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  endIcon?: ReactElement;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  startIcon?: ReactElement;
  //   style?: CSSProperties;
  tabIndex?: number;
}

export const Button: FC<ButtonProps> = ({
  children,
  className,
  disabled,
  onClick,
  tabIndex,
  startIcon,
  endIcon,
}) => {
  return (
    <button
      className={`wallet-adapter-button ${className || ""}`}
      disabled={disabled}
      onClick={onClick}
      tabIndex={tabIndex || 0}
      type="button"
    >
      {startIcon && (
        <i className="wallet-adapter-button-start-icon">{startIcon}</i>
      )}
      {children}
      {endIcon && <i className="wallet-adapter-button-end-icon">{endIcon}</i>}
    </button>
  );
};
