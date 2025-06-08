type Props = {
  type?: "button" | "reset" | "submit";
  className?: string;
  label?: string;
};

const Button = (props: Props) => {
  return (
    <button type={props.type} className={`${props.className} w-full max-w-[520px] h-full max-h-[48px] py-[16px] flex items-center justify-center font-bold cursor-pointer text-[16px] leading-[24px] rounded-[4px]`}>
      {props.label}
    </button>
  );
};

export default Button;
