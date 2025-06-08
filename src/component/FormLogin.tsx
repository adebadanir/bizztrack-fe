import Input from "./Input";
import Button from "./Button";

const FormLogin = () => {
  const handleSubmit = () => {
    return null;
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-[520px] gap-[16px] p-[80px] border border-[#D0D0D0] bg-white">
      <div className="flex flex-col gap-[8px] items-center justify-center">
        <h1 className="text-4xl">Welcome Back</h1>
        <p className="text-lg text-[#6F6F6F]">Please login to continue.</p>
      </div>
      <Input label="Email Address" type="email" placeholder="example@email.com" />
      <Input label="Password" placeholder="*********" type="password" />
      <Button label="Login" className="bg-[#0F62FE] text-white hover:opacity-90" type="submit" />
    </form>
  );
};

export default FormLogin;
