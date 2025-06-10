import { MdClose } from 'react-icons/md';
import Input from './Input';
import { useEffect, useState } from 'react';
import { CgAddR } from 'react-icons/cg';
import { FaCircleMinus } from 'react-icons/fa6';

type Props = { onClick?: () => void, type: string };

interface DetailItem {
  id: string; // Unique ID for each detail item to help with React key prop
  product: string;
  amount: number;
}

const FormEditExpense = (props: Props) => {
  const [purpose, setPurpose] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [details, setDetails] = useState<DetailItem[]>(
    // Initialize with one empty detail item
    [{ id: `detail-${Date.now()}-0`, product: '', amount: 0 }]
  );

  const [total, setTotal] = useState<number>(0);

  console.log(details);

  useEffect(() => {
    const calculatedTotal = details.reduce(
      (sum, item) => sum + (Number(item.amount) || 0),
      0
    );
    setTotal(calculatedTotal);
  }, [details]);

  const handleAddDetail = () => {
    setDetails((prevDetails) => [
      ...prevDetails,
      // Generate a more robust unique ID to prevent potential key clashes over time
      {
        id: `detail-${Date.now()}-${Math.random()
          .toString(36)
          .substring(2, 9)}`,
        product: '',
        amount: 0,
      },
    ]);
  };

  const handleDetailChange = (
    index: number,
    field: keyof DetailItem,
    value: string | number
  ) => {
    setDetails((prevDetails) => {
      const newDetails = [...prevDetails];
      if (field === 'amount') {
        // Convert input value to a number. If invalid, default to 0.
        newDetails[index][field] = Number(value) || 0;
      } else {
        // For 'product' field (text input)
        newDetails[index][field] = value as string;
      }
      return newDetails; // Return the new array to trigger re-render
    });
  };

  const handleRemoveDetail = (idToRemove: string) => {
    setDetails((prevDetails) =>
      prevDetails.filter((item) => item.id !== idToRemove)
    );
  };

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
          <h3 className="font-semibold text-3xl text-left">{props.type} Form</h3>
          <Input
            label="Purpose"
            placeholder="Purpose"
            onChange={(e) => setPurpose(e.target.value)}
          />
          <Input
            label="Description"
            placeholder="ex: buy new laptop for company"
            onChange={(e) => setDescription(e.target.value)}
          />

          {/* Details Section */}
          <div className="w-full">
            <label className="text-sm font-medium text-gray-700 block mb-2">
              Details
            </label>
            <div className="flex flex-col gap-3">
              {details.map((item, index) => (
                <div key={item.id} className="flex gap-2 items-center">
                  <Input
                    type="text"
                    placeholder="product. ex: Laptop"
                    value={item.product ? item.product : ''} // Show empty if product is not set
                    onChange={(e) =>
                      handleDetailChange(index, 'product', e.target.value)
                    }
                  />
                  <Input
                    label="" // Label is handled by the "Details" heading
                    placeholder="Amount. ex: 100000"
                    type="number"
                    value={item.amount === 0 ? 0 : item.amount} // Show empty for 0 to allow easier input
                    onChange={(e) =>
                      handleDetailChange(index, 'amount', e.target.value)
                    }
                  />
                  {/* Only show remove button if there's more than one detail item */}
                  {details.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveDetail(item.id)}
                      className="text-red-500 hover:text-red-700 focus:outline-none"
                      title="Remove item"
                    >
                      <FaCircleMinus />
                    </button>
                  )}
                </div>
              ))}
            </div>
            {/* Add New Detail Row Icon */}
            <div className="w-full flex justify-center mt-3">
              <button
                type="button"
                onClick={handleAddDetail}
                className="text-2xl"
                title="Add new item"
              >
                <CgAddR />
              </button>
            </div>
          </div>

          {/* Total Input (Display only, automatically calculated) */}
          <Input
            label="Total"
            placeholder="0"
            value={total.toLocaleString('en-US')} // Format as a currency string for display
            type="text" // Keep as text, as it's not directly editable by user
            onChange={() => {}} // Make it read-only by providing an empty onChange
          />
          <button className="bg-blue-500 text-white font-medium px-8 py-[8px] ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormEditExpense;
