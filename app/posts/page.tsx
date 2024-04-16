import { Articles } from "@/components/article";
import { HeaderSection } from "@/components/shared";
import { articles } from "@/constant";
import React from "react";
export default function PostsPage() {
  return (
    <HeaderSection header="Top Posts">
      <Articles data={articles.data} options={{ui:"V2"}} />
    </HeaderSection>
  );
}
