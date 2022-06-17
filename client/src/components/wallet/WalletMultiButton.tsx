import { useQuery } from "@apollo/react-hooks";
import { useWallet } from "@solana/wallet-adapter-react";
import { useRouter } from "next/router";
import type { FC } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { GetUserByAddressDocument } from "generated/graphql";

import type { ButtonProps } from "./Button";
import { Button } from "./Button";
import WalletConnectButton from "./WalletConnectButton";
import { WalletIcon } from "./WalletIcon";
import WalletModalButton from "./WalletModalButton";

const WalletMultiButton: FC<ButtonProps> = ({ children, ...props }) => {
  const { publicKey, wallet, disconnect } = useWallet();
  const { refetch } = useQuery(GetUserByAddressDocument, {
    variables: { address: publicKey?.toString() },
    fetchPolicy: "no-cache", // for debugging purposes
  });
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const address = useMemo(() => publicKey?.toBase58(), [publicKey]);
  const textContent = useMemo(() => {
    if (children) return children;
    if (!wallet || !address) return null;
    return `${address.slice(0, 4)}..${address.slice(-4)}`;
  }, [children, wallet, address]);

  const openDropdown = useCallback(() => {
    setActive(true);
  }, []);

  const closeDropdown = useCallback(() => {
    setActive(false);
  }, []);

  const openProfile = useCallback(async () => {
    closeDropdown();

    // route to user profile
    const newData = await refetch();
    router.push(`/${newData.data.getUserByAddress.username}`);
  }, [router, closeDropdown, refetch]);

  const copyAddress = useCallback(async () => {
    if (address) {
      await navigator.clipboard.writeText(address);
      closeDropdown();
    }
  }, [address, closeDropdown]);

  const signOut = useCallback(() => {
    disconnect();
    closeDropdown();
  }, [disconnect, closeDropdown]);

  // Close wallet dropdown when clicking outside
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const node = ref.current;
      if (!node || node.contains(event.target as Node)) return;
      closeDropdown();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, closeDropdown]);

  if (!wallet)
    return <WalletModalButton {...props}>{children}</WalletModalButton>;
  if (!address)
    return <WalletConnectButton {...props}>{children}</WalletConnectButton>;

  return (
    <div className="wallet-adapter-dropdown" ref={ref}>
      <Button
        // aria-expanded={false}
        className="wallet-adapter-button-trigger"
        // style={{ pointerEvents: active ? "none" : "auto", ...props.style }}
        onClick={active ? closeDropdown : openDropdown}
        startIcon={<WalletIcon wallet={wallet} />}
        {...props}
      >
        {textContent}
      </Button>
      <ul
        aria-label="dropdown-list"
        className={`wallet-adapter-dropdown-list ${
          active && "wallet-adapter-dropdown-list-active"
        }`}
        role="menu"
      >
        <li
          key="profile"
          onMouseDown={openProfile}
          className="wallet-adapter-dropdown-list-item"
          role="menuitem"
        >
          Profile
        </li>
        <li
          key="sign-out"
          onMouseDown={signOut}
          className="wallet-adapter-dropdown-list-item"
          role="menuitem"
        >
          Sign Out
        </li>
        <li
          key="address"
          onMouseDown={copyAddress}
          className="wallet-adapter-dropdown-list-item"
          role="menuitem"
        >
          {textContent}
        </li>
      </ul>
    </div>
  );
};

export default WalletMultiButton;
