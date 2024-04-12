import { Articles } from "@/components/article";
import { HeaderSection } from "@/components/shared";
import { articleMock1, articleMock2 } from "@/constant";

export default function Home() {
  return (
    <>
      <HeaderSection header="Recent blog posts">
        <Articles {...articleMock2} />
      </HeaderSection>
      <HeaderSection header="All blog posts">
        <Articles {...articleMock1} />
      </HeaderSection>
    </>
  );
}
