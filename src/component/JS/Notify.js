import { ToastContainer, toast } from "react-toastify";

export const registersuccess = () => toast.success("Register Successfull",{
    autoClose: 2000, 
});
export const loginsuccess = () => toast.success("Login Successfull",{
    autoClose: 2000, 
});
export const loginfailed = () => toast.error("Invalid username or password or Sign in if you don't have an account",{
  autoClose: 2000, 
});
export const logoutsuccess = () => toast.warn("Logout Successfull",{
    autoClose: 2000, 
});
export const sendsuccess = () => toast("Thank You",{
    autoClose: 2000, 
});
export default function Notify() {
  return (
    <div>
      <ToastContainer />
    </div>
  );
}
