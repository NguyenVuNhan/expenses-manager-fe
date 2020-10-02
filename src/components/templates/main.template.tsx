import React, { ReactNode } from "react";

type MainTemplateProps = {
  children: ReactNode;
};

const MainTemplate = ({ children }: MainTemplateProps) => {
  return (
    <div>
      {/* <Navbar /> */}
      <div>{children}</div>
    </div>
  );
};

export default MainTemplate;
