import { TitleSectionProps } from "@/types";
import React from "react";

export const TitleSection = ({ title }: TitleSectionProps) => {
  return <h3 className="text-8xl uppercase border-t border-b border-black dark:border-white py-5 text-center">{title}</h3>;
};
