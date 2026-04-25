"use client";
import { motion } from "motion/react";
export const EnterButton = ({ title }: { title: string }) => {
  return (
    <motion.button
      layoutId="enterButton"
      initial={{
        scale: 1,
      }}
      whileTap={{
        scale: [1, 0.98, 1],
      }}
      transition={{
        duration: 0.2,
      }}
      className="mx-5 mt-4 w-[87.5%] cursor-pointer rounded-sm bg-white bg-linear-to-t from-neutral-400/15 py-2 text-[14px] text-black"
    >
      {title}
    </motion.button>
  );
};
