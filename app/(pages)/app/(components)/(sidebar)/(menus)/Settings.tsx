import { ThemeButton } from "@/components/custom/ThemeButton";
import { H1, P } from "@/components/custom/typography";

function Settings() {
  return (
    <>
      <H1>Settings</H1>
      <div className="flex mx-auto gap-3 items-center mt-10">
        <ThemeButton />
        <P>Change Theme</P>
      </div>
    </>
  );
}

export { Settings };
