import Image from "next/image";

export const Background = () => {
  return (
    <div className="absolute h-full w-full">
      <Image
        alt=""
        src={"/Background.svg"}
        height={0}
        width={0}
        className="h-full w-full object-cover"
      ></Image>
    </div>
  );
};
