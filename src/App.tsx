import './App.css'

import Sender from './components/Sender'
import Reciever from './components/Reciever'
import Input from './components/Input'
import GroupPic from './components/GroupPic'

import { FaArrowLeftLong } from "react-icons/fa6";
import { MdMoreVert } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";




function App() {

  return (
    <>
      <div id='wrapper' className='flex items-center justify-center h-screen font-Mulish'>
        <div id='phone' className='w-[400px] h-screen bg-[white] rounded-lg	px-4 py-4 overflow-auto'> 
          
          {/* <div id="Phone-space" className='border-2 p-1'>
            Mobile Space
          </div> */}

          <div id='Chat-Upper' className='order-2 flex justify-between items-center mb-[16px]'>
            <div className='flex gap-3 items-center'>
              <FaArrowLeftLong size='24' />
              <h1 className='text-[24px] font-[700]'>Trip 1</h1>
            </div>
            <FaRegEdit size='20' />
          </div>

          <div id='Group-Details' className='order-2 flex justify-between mb-20'>
            <div className='flex gap-3 '>
              {/* <div>Image Comp</div> */}
              <GroupPic />
              <div className='flex flex-col items-start text-[18px]'>
                <p className='text-[#606060]s'>From <span className='font-[700] text-[#000000]'>IGI Airport, T3</span></p>
                <p className='text-[#606060]'>To <span className='font-[700] text-[#000000]'>Sector 28</span></p>
              </div>
            </div>
            {/* <div>Dots</div> */}
            <MdMoreVert size='24'/>
          </div>


          <div id="line-with-text" className='mb[20px] text-[14px]'>
            <span>12 JAN, 2023</span>
          </div>

          
        <div id='Chats' className='flex justify-between flex-col'>
          <div className="flex justify-start">
            <Sender />
          </div>
          <div className="flex justify-end">
            <Reciever />
          </div>
          <div className="flex justify-start">
            <Sender />
          </div>
          <div className="flex justify-start">
            <Sender />
          </div>
        </div>


        
        <Input />

        {/* <div id="Phone-space" className='border-2 p-1'>
            Mobile Space
          </div> */}

        </div>
      </div>
    </>
  )
}

export default App
