import type { FC } from "react";
import type React from "react";
import { useLayoutEffect, useRef } from "react";

export interface CollapseProps {
  children: React.ReactNode;
  expanded: boolean;
  id: string;
}

export const Collapse: FC<CollapseProps> = ({
  id,
  children,
  expanded = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const instant = useRef(true);
  const transition = "height 200ms ease-out";

  const openCollapse = () => {
    const node = ref.current;
    if (!node) return;

    requestAnimationFrame(() => {
      node.style.height = `${node.scrollHeight}px`;
    });
  };

  const closeCollapse = () => {
    const node = ref.current;
    if (!node) return;

    requestAnimationFrame(() => {
      node.style.height = `${node.offsetHeight}px`;
      node.style.overflow = "hidden";
      requestAnimationFrame(() => {
        node.style.height = "0";
      });
    });
  };

  useLayoutEffect(() => {
    if (expanded) {
      openCollapse();
    } else {
      closeCollapse();
    }
  }, [expanded]);

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    function handleComplete() {
      if (!node) return;

      node.style.overflow = expanded ? "initial" : "hidden";
      if (expanded) {
        node.style.height = "auto";
      }
    }

    function handleTransitionEnd(event: TransitionEvent) {
      if (node && event.target === node && event.propertyName === "height") {
        handleComplete();
      }
    }

    if (instant.current) {
      handleComplete();
      instant.current = false;
    }

    node.addEventListener("transitionend", handleTransitionEnd);
    // eslint-disable-next-line consistent-return
    return () => node.removeEventListener("transitionend", handleTransitionEnd);
  }, [expanded]);

  return (
    <div
      // eslint-disable-next-line react/no-children-prop
      children={children}
      className="wallet-adapter-collapse"
      id={id}
      ref={ref}
      role="region"
      style={{
        height: 0,
        transition: instant.current ? undefined : transition,
      }}
    />
  );
};
