import type { FC, MouseEvent } from "react";
import { useCallback } from "react";

import type { ButtonProps } from "./Button";
import { Button } from "./Button";
import { useWalletModal } from "./useWalletModal";

const WalletModalButton: FC<ButtonProps> = ({
  children = "Connect",
  onClick,
  ...props
}) => {
  const { visible, setVisible } = useWalletModal();

  const handleClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      if (onClick) onClick(event);
      if (!event.defaultPrevented) setVisible(!visible);
    },
    [onClick, setVisible, visible]
  );

  return (
    <Button
      className="wallet-adapter-button-trigger"
      onClick={handleClick}
      {...props}
    >
      {children}
    </Button>
  );
};

export default WalletModalButton;
