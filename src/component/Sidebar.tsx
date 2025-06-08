import { MdCheck, MdOutlineAddBox, MdOutlineBarChart, MdOutlineDomain, MdOutlineHome, MdOutlineMail, MdOutlinePeople } from "react-icons/md";
import { NavLink } from "react-router";

const Sidebar = () => {
  const menuItems = [
    { label: "Dashboard", icon: <MdOutlineHome size={24} />, to: "/" },
    { label: "Create Expenses", icon: <MdOutlineAddBox size={24} />, to: "/expense" },
    { label: "Offering", icon: <MdOutlineMail size={24} />, to: "/offering" },
    { label: "Report Expenses", icon: <MdOutlineBarChart size={24} />, to: "/report" },
    { label: "Approval Expenses", icon: <MdCheck size={24} />, to: "/approval-expense" },
    { label: "Approval Report", icon: <MdCheck size={24} />, to: "/approval-report" },
    { label: "User Management", icon: <MdOutlinePeople size={24} />, to: "/user" },
    { label: "Department Management", icon: <MdOutlineDomain size={24} />, to: "/department" },
  ];

  return (
    <div className="bg-white p-[8px] h-full w-full max-w-[200px]">
      {menuItems.map((item, index) => (
        <NavLink to={item.to} key={index} className="flex items-center gap-[4px] p-[8px] hover:bg-[#F2F4F8] cursor-pointer border-b border-b-[#D0D0D0]">
          <div className="font-semibold">{item.icon}</div>
          <span className="font-semibold text-sm">{item.label}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
