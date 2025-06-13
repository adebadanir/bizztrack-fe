import { FaCheck, FaEye, FaFilter, FaTrashAlt } from 'react-icons/fa';
import Main from '../layout/Main';
import FormEditExpense from '../component/FormEditExpense';
import Badge from '../component/Badge';
import { MdOutlineAdd, MdOutlineSearch } from 'react-icons/md';
import { useState } from 'react';

function ReportExpense() {
  const [isAddShow, setIsAddShow] = useState(false);
  const [isEditShow, setIsEditShow] = useState(false);

  const handleAddClick = () => {
    setIsAddShow(!isAddShow);
    setIsEditShow(false);
  };

  const handleEditClick = () => {
    setIsEditShow(!isEditShow);
  };

  return (
    <Main>
      <div className="w-full h-full bg-white flex flex-col p-[8px] gap-[16px]">
        <h2 className="font-bold text-2xl">Reports Expense</h2>
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
              <th className="p-[8px] text-left">Purpose</th>
              <th className="p-[8px] text-left">Amount</th>
              <th className="p-[8px] text-left">Request Date</th>
              <th className="p-[8px] text-left">Description</th>
              <th className="p-[8px] text-left">Refund Amount</th>
              <th className="p-[8px] text-left">Status</th>
              <th className="p-[8px] text-left">Comment</th>
              <th className="p-[8px] text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-[8px]">Visit PT. A</td>
              <td className="p-[8px]">20.000.000</td>
              <td className="p-[8px]">18-05-2025</td>
              <td className="p-[8px]">Visit canvasing new customer</td>
              <td className="p-[8px] text-red-500">1.000.000</td>
              <td className="p-[8px]">
                <Badge type="Pending Manager" />
              </td>
              <td className="p-[8px]"></td>
              <td className="flex h-full p-[8px] gap-[4px] items-center">
                <button
                  onClick={handleEditClick}
                  className="text-white bg-blue-500 hover:bg-blue-400 p-[4px] cursor-pointer flex items-center h-full"
                >
                  <FaEye />
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
      {isEditShow && (
        <FormEditExpense onClick={handleEditClick} type="Detail" />
      )}
    </Main>
  );
}

export default ReportExpense;
