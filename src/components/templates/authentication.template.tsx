import React, { ReactNode } from "react";

type AuthenticationTemplateProps = {
  children: ReactNode;
};

const AuthenticationTemplate = ({ children }: AuthenticationTemplateProps) => {
  return <div>{children}</div>;
};

export default AuthenticationTemplate;
