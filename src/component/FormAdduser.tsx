import { MdClose } from "react-icons/md";
import Input from "./Input";

type Props = { onClick?: () => void };
const FormAdduser = (props: Props) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
    // Handle form submission logic here
  };
  return (
    <div className="absolute top-0 left-0 w-full h-full z-10">
      <div className="w-screen h-screen flex justify-center items-center bg-black/50">
        <form onSubmit={handleSubmit} className="w-full bg-white p-[16px] max-w-[500px] h-fit flex flex-col items-center gap-[8px]">
          <div className="w-full flex justify-end">
            <button>
              <MdClose onClick={props.onClick} />
            </button>
          </div>
          <h3 className="font-semibold text-3xl text-left">Add User</h3>
          <Input label="Full Name" placeholder="Full Name" />
          <Input label="Email" placeholder="Email" />
          <Input label="Employee Number" placeholder="Employee Number" />
          <div className="flex">
            <select name="" id="">
              <option value="">Department</option>
            </select>
            <select name="" id="">
              <option value="Role">Role</option>
            </select>
          </div>
          <Input label="Password" placeholder="Password" />
          <Input label="Confirm Password" placeholder="Confirm Password" />
          <button className="bg-blue-500 text-white font-medium px-[4px] py-[8px] w-fit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormAdduser;
