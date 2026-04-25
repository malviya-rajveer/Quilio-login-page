"use client";
import { motion } from "motion/react";
import { Dispatch, SetStateAction } from "react";
export const ToggleButton = ({
  setSignUp,
  signUp,
}: {
  setSignUp: Dispatch<SetStateAction<boolean>>;
  signUp: boolean;
  layoutId: string;
}) => {
  return (
    <motion.button
      layoutId="bigButton"
      onClick={() => setSignUp(!signUp)}
      className="relative m-4 flex w-39 items-center justify-center rounded-[22px] border-b border-white/30 bg-neutral-900/80 py-[3px]"
    >
      <div className="h-[35px] w-[75px] cursor-pointer p-[1px] text-[15px] text-neutral-300">
        <div className="flex h-full w-full items-center justify-center">
          SignIn
        </div>
      </div>
      <div className="h-[35px] w-[75px] cursor-pointer p-[1px] text-[15px] text-neutral-300">
        <div className="flex h-full w-full items-center justify-center">
          SignUp
        </div>
      </div>
      {signUp && (
        <motion.div
          layoutId="CardButton"
          transition={{
            duration: 0.25,
            ease: "easeInOut",
          }}
          className="absolute left-1 h-[35px] w-[75px] cursor-pointer rounded-full bg-white/30 bg-linear-to-br to-zinc-800 to-40% p-[1px] text-[15px] text-white"
        >
          <div className="absolute flex h-full w-full items-center justify-center rounded-full bg-zinc-800 bg-linear-to-b from-white/10">
            SignIn
          </div>
        </motion.div>
      )}
      {!signUp && (
        <motion.div
          layoutId="CardButton"
          transition={{
            duration: 0.25,
            ease: "easeInOut",
          }}
          className="absolute right-1 h-[35px] w-[75px] cursor-pointer rounded-full bg-white/30 bg-linear-to-br to-zinc-800 to-40% p-[1px] text-[15px] text-white"
        >
          <div className="absolute flex h-full w-full items-center justify-center rounded-full bg-zinc-800 bg-linear-to-b from-white/10">
            SignUp
          </div>
        </motion.div>
      )}
    </motion.button>
  );
};
