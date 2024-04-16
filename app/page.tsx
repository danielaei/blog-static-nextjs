import { Articles } from "@/components/article";
import { Newsletter } from "@/components/newsletter";
import { HeaderSection, TitleSection } from "@/components/shared";
import { articles } from "@/constant";

export default function Home() {
  return (
    <>
      <TitleSection title="the blog" />
      <Newsletter />
      <HeaderSection header="Recent blog posts">
        <Articles data={articles.data} options={{ ui: "V2" }} />
      </HeaderSection>
      <HeaderSection header="All blog posts">
        <Articles data={articles.data} options={{ ui: "V1" }} />
      </HeaderSection>
    </>
  );
}
