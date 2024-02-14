import { Button } from "@mantine/core";
import { IconBriefcase } from "@tabler/icons-react";
import { Roboto_Mono } from "next/font/google";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-5">
      <IconBriefcase />
      <div className={`font-bold ${roboto.className}`}>Professional Network APP</div>
      <Button>Sign In</Button>
    </div>
  );
}
