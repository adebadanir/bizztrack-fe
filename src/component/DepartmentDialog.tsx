import { MdClose } from 'react-icons/md';
import Input from './Input';

type Props = { onClick?: () => void; type: string };
const DepatmentDialog = (props: Props) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
    // Handle form submission logic here
  };
  return (
    <div className="absolute top-0 left-0 w-full h-full z-10">
      <div className="w-screen h-screen flex justify-center items-center bg-black/50">
        <form
          onSubmit={handleSubmit}
          className="w-full bg-white p-[16px] max-w-[500px] h-fit flex flex-col items-center gap-[8px]"
        >
          <div className="w-full flex justify-end">
            <button>
              <MdClose onClick={props.onClick} />
            </button>
          </div>
          <h3 className="font-semibold text-3xl text-left">
            {props.type} Department
          </h3>
          <Input label="Deparment Name" placeholder="Deparment Name" />
          <Input label="Description" placeholder="Description" />

          <button className="bg-blue-500 text-white font-medium px-8 py-[8px]">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DepatmentDialog;
