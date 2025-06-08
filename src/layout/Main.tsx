import type { ReactNode } from "react";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";

type Props = {
  children: ReactNode;
};

const Main = (props: Props) => {
  return (
    <div className="w-screen h-screen flex flex-col bg-[#F2F4F8]">
      <Navbar fullName="Ade Badani" department="Marketing" />
      <div className="flex h-full">
        <Sidebar />
        <div className="p-[8px] w-full h-full">{props.children}</div>
      </div>
    </div>
  );
};

export default Main;
