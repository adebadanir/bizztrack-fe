import { MdOutlineAdd, MdOutlineSearch } from 'react-icons/md';
import Main from '../layout/Main';
import { FaEye, FaFilter, FaTrashAlt } from 'react-icons/fa';
import { useState } from 'react';

import Badge from '../component/Badge';
import DepatmentDialog from '../component/DepartmentDialog';

const Department = () => {
  const [isAddShow, setIsAddShow] = useState(false);
  const [isEditShow, setIsEditShow] = useState(false);

  const handleAddClick = () => {
    setIsAddShow(!isAddShow);
    setIsEditShow(false);
  };

  const handleEditClick = () => {
    setIsEditShow(!isEditShow);
    setIsAddShow(false);
  };

  return (
    <Main>
      <div className="w-full h-full bg-white flex flex-col p-[8px] gap-[16px]">
        <h2 className="font-bold text-2xl">Department Management</h2>
        <div className="flex gap-[4px] w-full items-center  ">
          <div className="flex max-w-[120px] h-full w-full bg-[#F2F4F8] border-b border-b-[#697077] p-[8px] gap-[8px] items-center justify-between">
            <MdOutlineSearch />
            <input type="text" className="w-full" placeholder="Search" />
          </div>
          <button className="w-full h-full flex justify-between items-center max-w-fit px-[8px] py-[4px] bg-blue-500 text-white hover:bg-blue-400">
            <FaFilter />
          </button>
          <button
            onClick={handleAddClick}
            className="w-full h-full flex justify-between items-center max-w-[64px] px-[8px] py-[4px] bg-blue-500 text-white hover:bg-blue-400"
          >
            <MdOutlineAdd />
            Add
          </button>
        </div>
        <table>
          <thead>
            <tr className="bg-[#F2F4F8]">
              <th className="p-[8px] text-left">Name</th>
              <th className="p-[8px] text-left">Created At</th>
              <th className="p-[8px] text-left">Update At</th>
              <th className="p-[8px] text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-[8px]">IT</td>
              <td className="p-[8px]">18-05-2025</td>
              <td className="p-[8px]">
                <Badge type="Badge" />
              </td>
              <td className="flex h-full p-[8px] gap-[4px] items-center">
                <button
                  onClick={handleEditClick}
                  className="text-white bg-blue-500 hover:bg-blue-400 p-[4px] cursor-pointer flex items-center h-full"
                >
                  <FaEye />
                </button>
                <button className="text-white bg-red-500 hover:bg-red-400 p-[4px] cursor-pointer">
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="flex w-full justify-center items-center gap-[8px]">
          <button>{`<`}</button>
          <button>Previous</button>
          <div>1</div>
          <button>Next</button>
          <button>{`>`}</button>
        </div>
      </div>
      {isAddShow && <DepatmentDialog onClick={handleAddClick} type="Add" />}
      {isEditShow && <DepatmentDialog onClick={handleEditClick} type="Edit" />}
    </Main>
  );
};

export default Department;
