import React from "react";

type Props = {
  children?: React.ReactNode;
  text: string;
};

export const Test: React.FC<Props> = ({ children, text }) => (
  <div>
    <div>{text}</div>
    <div>{children}</div>
  </div>
);
