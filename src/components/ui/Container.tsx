import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: TContainerProps) => {
  return (
    <div className="w-full h-full max-w-7xl mx-auto px-10 lg:px-0">
      {children}
    </div>
  );
};

export default Container;
