import { motion } from "motion/react";
import Image from "next/image";

export const WalletIcon = ({ src }: { src: string }) => {
  return (
    <motion.div
      initial={{
        scale: 1,
      }}
      whileTap={{
        scale: [1, 0.92, 1],
      }}
      transition={{
        duration: 0.2,
      }}
    >
      <Image
        className="cursor-pointer"
        src={src}
        alt=""
        width={28}
        height={28}
      />
    </motion.div>
  );
};
