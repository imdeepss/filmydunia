import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-screen relative min-w-0 flex-grow px-9 2xl:mx-9 2xl:max-w-container 2xl:px-0">
        {children}
      </div>
    </div>
  );
};

export default Container;
