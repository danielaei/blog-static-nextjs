import { Articles } from "@/components/article";
import { Newsletter } from "@/components/newsletter";
import { HeaderSection } from "@/components/shared";
import { TitleSection } from "@/components/shared/titleSection";
import { articleMock1, articleMock2 } from "@/constant";

export default function Home() {
  return (
    <>
      <TitleSection title="the blog" />
      <Newsletter />
      <HeaderSection header="Recent blog posts">
        <Articles {...articleMock2} />
      </HeaderSection>
      <HeaderSection header="All blog posts">
        <Articles {...articleMock1} />
      </HeaderSection>
    </>
  );
}
