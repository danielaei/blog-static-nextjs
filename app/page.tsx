import { Articles } from "@/components/article";
import { HeaderSection } from "@/components/shared";

export default function Home() {
  return (
    <>
      <HeaderSection header="Recent blog posts">
        <Articles />
      </HeaderSection>
      <HeaderSection header="All blog posts">
        <Articles />
      </HeaderSection>
    </>
  );
}
