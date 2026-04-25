"use client";
import { IconLock, IconMail } from "@tabler/icons-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { InputBox } from "./ui/inputBox";
import "react-phone-input-2/lib/style.css";
import { PhoneInput } from "./ui/phone-input";
import { EnterButton } from "./ui/Enterbutton";
import { WalletIcon } from "./ui/walletIcon";
import { ToggleButton } from "./ui/toggleButton";
export const SignInCard = () => {
  const [signUp, setSignUp] = useState<boolean>(false);

  return (
    <div className="font-inter relative z-10 mt-[22vh] mb-8">
      {signUp && (
        <motion.div
          layoutId="Card-h"
          transition={{
            duration: 0.18,
            ease: "easeInOut",
          }}
          className="shadow-card flex h-100 w-85 flex-col rounded-2xl border border-white/30 bg-neutral-950/60 backdrop-blur-xl"
        >
          <ToggleButton
            layoutId="Cardbutton"
            setSignUp={setSignUp}
            signUp={signUp}
          />{" "}
          <motion.h2 layoutId="heading" className="mx-5 text-neutral-50">
            Create an account
          </motion.h2>
          <motion.div
            animate={{
              filter: "blur(0px)",
            }}
            initial={{
              filter: "blur(10px)",
            }}
            transition={{
              duration: 0.05,
            }}
            className="flex flex-col"
          >
            <div className="mx-5 mt-2.5 flex w-full items-center gap-2.5">
              <InputBox className="w-36" placeholder="First name" />
              <InputBox className="w-36" placeholder="Last name" />
            </div>
            <div className="border-InputBorder mx-5 mt-2.5 flex items-center gap-0 rounded-sm border bg-neutral-50/5 px-2">
              <IconMail
                size={20}
                strokeWidth={1}
                className="stroke-neutral-300"
              />
              <InputBox
                placeholder="Enter your email"
                className="border-none bg-transparent"
              />
            </div>
            <div className="mx-5 mt-2.5">
              {" "}
              <PhoneInput className="text-neutral-400" defaultCountry="US" />
            </div>
          </motion.div>
          <EnterButton title="Creat an account" />
          <motion.div
            layoutId="OrSignIn"
            transition={{
              duration: 0.18,
            }}
            className="text-placeholder mt-4 mr-5 flex w-full items-center justify-center gap-2 text-[10px]"
          >
            <div className="bg-placeholder/95 h-px w-23.5"></div>
            <div>OR SIGN IN WITH</div>
            <div className="bg-placeholder/95 h-px w-23.5"></div>
          </motion.div>
          <div className="mx-auto mt-4 flex gap-8">
            <motion.div
              layoutId="icon1"
              transition={{
                duration: 0.18,
              }}
            >
              <WalletIcon src="/Icons/phantom.svg" />
            </motion.div>
            <motion.div
              layoutId="icon2"
              transition={{
                duration: 0.18,
              }}
            >
              <WalletIcon src="/Icons/metamask.svg" />
            </motion.div>
            <motion.div
              layoutId="icon3"
              transition={{
                duration: 0.18,
              }}
            >
              <WalletIcon src="/Icons/exodus.svg" />
            </motion.div>
          </div>
          <motion.div
            layoutId="alreadyacc"
            transition={{
              duration: 0.18,
            }}
            className="text-placeholder mx-auto mt-3 cursor-pointer text-[10px]"
          >
            Already have an account?
          </motion.div>
        </motion.div>
      )}
      {!signUp && (
        <motion.div
          layoutId="Card-h"
          transition={{
            duration: 0.18,
            ease: "easeInOut",
          }}
          className="font-inter bg- shadow-card flex h-89 w-85 flex-col rounded-2xl border border-white/30 bg-neutral-950/60 backdrop-blur-xl"
        >
          <ToggleButton
            layoutId="Cardbutton"
            setSignUp={setSignUp}
            signUp={signUp}
          />{" "}
          <motion.h2 layoutId="heading" className="mx-5 text-neutral-50">
            Login account
          </motion.h2>
          <motion.div
            animate={{
              filter: "blur(0px)",
            }}
            initial={{
              filter: "blur(10px)",
            }}
            transition={{
              duration: 0.05,
            }}
            className="flex flex-col"
          >
            <div className="border-InputBorder mx-5 mt-2.5 flex items-center gap-0 rounded-sm border bg-neutral-50/5 px-2">
              <IconMail
                size={20}
                strokeWidth={1}
                className="stroke-neutral-300"
              />
              <InputBox
                placeholder="Enter your email"
                className="border-none bg-transparent"
              />
            </div>
            <div className="border-InputBorder mx-5 mt-2.5 flex items-center gap-0 rounded-sm border bg-neutral-50/5 px-2">
              <IconLock
                size={20}
                strokeWidth={1}
                className="stroke-neutral-300"
              />
              <InputBox
                placeholder="Enter your password"
                className="border-none bg-transparent"
              />
            </div>
          </motion.div>
          <EnterButton title="Login account" />
          <motion.div
            layoutId="OrSignIn"
            transition={{
              duration: 0.18,
            }}
            className="text-placeholder mt-4 mr-5 flex w-full items-center justify-center gap-2 text-[10px]"
          >
            <div className="bg-placeholder/95 h-px w-23.5"></div>
            <div>OR SIGN IN WITH</div>
            <div className="bg-placeholder/95 h-px w-23.5"></div>
          </motion.div>
          <div className="mx-auto mt-4 flex gap-8">
            {" "}
            <motion.div
              layoutId="icon1"
              transition={{
                duration: 0.18,
              }}
            >
              <WalletIcon src="/Icons/phantom.svg" />
            </motion.div>
            <motion.div
              layoutId="icon2"
              transition={{
                duration: 0.18,
              }}
            >
              <WalletIcon src="/Icons/metamask.svg" />
            </motion.div>
            <motion.div
              layoutId="icon3"
              transition={{
                duration: 0.18,
              }}
            >
              <WalletIcon src="/Icons/exodus.svg" />
            </motion.div>
          </div>
          <motion.div
            layoutId="alreadyacc"
            transition={{
              duration: 0.18,
            }}
            className="text-placeholder mx-auto mt-3 cursor-pointer text-[10px]"
          >
            Already have an account?
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};
