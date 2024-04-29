import ThreeDProvider from "@/components/ThreeDProvider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-screen h-screen relative items-center justify-center space-between md:gap-[500px]">
      <ThreeDProvider className="absolute w-full" theme="dark" />
      <div className="w-full max-w-[300px] h-full max-h-[600px] border-[1px] border-black rounded-full md:flex items-center justify-center z-10 bg-white hidden">
        {" "}
        hidden in small device
      </div>

      <div className="w-full max-w-[300px] h-full max-h-[600px] border-[1px] border-black rounded-full flex items-center justify-center z-10 bg-white">
        {" "}
        always show
      </div>
    </main>
  );
}
