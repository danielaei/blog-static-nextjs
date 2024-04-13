import { Articles } from "@/components/article";
import { HeaderSection } from "@/components/shared";
import { articleMock1, articleMock2 } from "@/constant";
import React from "react";

export default function PostsPage() {
  return (
    <HeaderSection header="Top Posts">
      <Articles {...articleMock2} />
    </HeaderSection>
  );
}
