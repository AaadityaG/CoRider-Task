import { LuSendHorizonal } from 'react-icons/lu'; 
import { GrAttachment } from "react-icons/gr";


const Input = () => {
  return (
    <div className="relative ">
      <input type="text" className="w-full rounded-lg px-[8px] py-[16px] pr-10 outline-none" placeholder="Reply to @Rohit Yadav"/>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none cursor-pointer">
        <GrAttachment className="mr-2" /> 
        <LuSendHorizonal /> 
      </div>
    </div>
  )
}

export default Input;
