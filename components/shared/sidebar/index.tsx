import React from "react";
import { articleMock3 } from "@/constant";
import { Articles } from "@/components/article";
import { HeaderSection } from "../headerSection";

export const Sidebar = () => {
  return (
    <aside>
      <HeaderSection header="Recent blog posts">
        <Articles {...articleMock3} />
      </HeaderSection>
    </aside>
  );
};
