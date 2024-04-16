import React from "react";
import { Articles } from "@/components/article";
import { HeaderSection } from "../other/headerSection";
import { articles } from "@/constant";

export const Sidebar = () => {
  return (
    <aside>
      <HeaderSection header="Recent blog posts">
        <Articles data={articles.data} options={{ui:"V3"}} />
      </HeaderSection>
    </aside>
  );
};
