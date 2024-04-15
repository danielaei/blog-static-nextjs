import React from "react";
import { HeaderSection } from "../../components/shared/other/headerSection";
describe("<HeaderSection />", () => {
  it("renders", () => {
    const data = {
      title: "Header Section Title Cypress",
      content: "Header Section Content Cypress",
    };
    cy.mount(
      <HeaderSection header={data.title}>
        <p>{data.content}</p>
      </HeaderSection>
    );
    cy.get("section").within(function ($section) {
      cy.wrap($section).get("h3").contains(data.title);
      cy.wrap($section).get("p").contains(data.content);
    });
  });
});
