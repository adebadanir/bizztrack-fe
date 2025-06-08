import { NavLink } from "react-router";

const Dropdown = () => {
  return (
    <div className="w-[120px] p-[8px] z-20 absolute self-end bg-white right-2 top-16 rounded-sm border border-gray-100">
      <NavLink to="/profile" className="block px-[4px] py-[2px] text-sm text-[#161616] hover:bg-[#F2F4F8] rounded-sm">
        Profile
      </NavLink>
      <button className="block px-[4px] py-[2px] text-sm hover:bg-[#F2F4F8] rounded-sm cursor-pointer w-full text-left text-red-500 ">Logout </button>
    </div>
  );
};

export default Dropdown;
