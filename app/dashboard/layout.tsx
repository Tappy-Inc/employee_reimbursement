import { NextPage } from "next";
import { PropsWithChildren } from "react";

const layout: NextPage<PropsWithChildren> = ({ children }) => {
  return <>{children}</>;
};

export default layout;
