import { useState } from 'react';
import Dropdown from './Dropdown';

type Props = {
  fullName?: string;
  department?: string;
};

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className=" flex flex-col">
      <nav className="bg-white w-full flex items-center justify-between p-[10px] h-[60px]">
        <div className="">Logo</div>
        <div className="flex items-center gap-[8px]">
          <div className="flex flex-col">
            <div className="">{props.fullName}</div>
            <div className="text-[#6F6F6F] text-sm">{props.department}</div>
          </div>
          <button
            onClick={toggleMenu}
            className="w-[40px] h-[40px] bg-[#C1C7CD] rounded-full flex items-center justify-center"
          >
            <img
              src="/path/to/profile-pic.jpg"
              alt="Profile"
              className="w-full h-full rounded-full"
            />
          </button>
        </div>
      </nav>
      {isOpen === true ? <Dropdown /> : null}
    </header>
  );
};

export default Navbar;
