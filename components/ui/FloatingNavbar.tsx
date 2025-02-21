"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: { name: string; link: string; icon?: JSX.Element }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const current = scrollYProgress.get();
      let direction = current - (scrollYProgress.getPrevious() || 0);

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          window.history.replaceState(null, "", window.location.origin);
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    };

    const unsubscribe = scrollYProgress.onChange(handleScroll);
    return () => unsubscribe();
  }, [scrollYProgress]);

  const handleNavClick = (link: string) => {
    // Ensure this code only runs on the client side
    if (typeof window !== "undefined") {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -120, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4 backdrop-blur-lg bg-opacity-75",
            className
          )}
        >
          {navItems.map((item) => (
            <Link key={item.name} href={item.link} passHref legacyBehavior>
              <a
                onClick={() => handleNavClick(item.link)}
                className="text-white"
              >
                {item.icon}
                {item.name}
              </a>
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
