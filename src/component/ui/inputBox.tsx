import { cn } from "@/src/lib/utils";

interface Inputs {
  placeholder: string;
  className?: string;
}

export const InputBox = ({ placeholder, className }: Inputs) => {
  return (
    <input
      placeholder={placeholder}
      className={cn(
        "placeholder:text-placeholder border-InputBorder rounded-sm border bg-neutral-50/5 p-1.5 px-2 text-[14px] tracking-wide text-neutral-100 placeholder:font-light focus:outline-0",
        className,
      )}
    ></input>
  );
};
