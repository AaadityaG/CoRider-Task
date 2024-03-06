
const Sender = () => {
  return (
    <div className="flex gap-2 m-2 drop-shadow-sm w-[85%]">
        {/* <div id="logo" className=""> */}
            <img src="https://picsum.photos/200/300" className="rounded-full w-24 h-8"  alt="Senders logo" />
        {/* </div> */}
        <div>
            <p id="message" className="rounded-lg bg-[#ffffff] p-2 text-[#606060] rounded-tl-none text-left leading-[17.57px] font-[400] text-[14px] shadow-md">
                Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the ride and save money
            </p>
        </div>
    </div>
  )
}

export default Sender;
