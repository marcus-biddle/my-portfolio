import React, { forwardRef, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence, type HTMLMotionProps, easeOut } from "framer-motion";

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

type RippleButtonProps = HTMLMotionProps<"button"> & {
  children: React.ReactNode;
  className?: string;
};

export const RippleButton = forwardRef<HTMLButtonElement, RippleButtonProps>(
  ({ children, className = "", ...props }, ref) => {
    const [ripples, setRipples] = useState<Ripple[]>([]);
    const buttonRef = useRef<HTMLButtonElement>(null);

    // forward ref to internal button
    React.useImperativeHandle(ref, () => buttonRef.current as HTMLButtonElement);

    const createRipple = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
      const button = buttonRef.current;
      if (!button) return;

      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = event.clientX - rect.left - size / 2;
      const y = event.clientY - rect.top - size / 2;

      const newRipple: Ripple = {
        id: Date.now(),
        x,
        y,
        size,
      };

      setRipples((prev) => [...prev, newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 600);
    }, []);

    const handleClick = useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        createRipple(event);
        if (props.onClick) {
          props.onClick(event);
        }
      },
      [createRipple, props]
    );

    const transition = {
      duration: 0.6,
      ease: easeOut,
    };

    return (
      <motion.button
        {...props}
        ref={buttonRef}
        onClick={handleClick}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        className={`relative overflow-hidden ${className}`}
      >
        {children}
        <AnimatePresence>
          {ripples.map(({ id, x, y, size }) => (
            <motion.span
              key={id}
              initial={{ scale: 0, opacity: 0.5 }}
              animate={{ scale: 2, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={transition}
              style={{
                position: "absolute",
                borderRadius: "50%",
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                width: size,
                height: size,
                top: y,
                left: x,
                pointerEvents: "none",
              }}
            />
          ))}
        </AnimatePresence>
      </motion.button>
    );
  }
);
RippleButton.displayName = "RippleButton";
