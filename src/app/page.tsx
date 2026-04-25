import { SignInCard } from "../component/signIn";
import { Background } from "../component/ui/background";
import { Logo } from "../component/ui/logo";

export default function Home() {
  return (
    <main className="relative z-0 flex min-h-screen w-full scroll-m-10 justify-center overflow-hidden font-sans">
      <header>
        <Logo className="-top-3 left-5 size-20 scale-60" />
      </header>
      <div className="absolute flex h-full w-full items-center justify-center">
        <Logo className="size-205 translate-x-5 fill-white xl:size-265" />
      </div>
      <SignInCard />
      <Background />
    </main>
  );
}
