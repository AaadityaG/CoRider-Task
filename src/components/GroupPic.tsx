import First from '../assets/1.png'
import Second from '../assets/2.png'
import Third from '../assets/3.png'
import Fourth from '../assets/4.png'


const GroupPic = () => {
  return (
    // <div>
    //   <img src="" alt="" />
    // </div>

    <div className="relative h-12 w-12 rounded-full overflow-hidden">
      <img src={First} alt="Circular Image" className="w-6 h-6 absolute top-0 left-0"  />
      <img src={Second} alt="Circular Image" className="w-6 h-6 absolute top-0 right-0"  />
      <img src={Third} alt="Circular Image" className="w-6 h-6 absolute bottom-0 left-0"  />
      <img src={Fourth} alt="Circular Image" className="w-6 h-6 absolute bottom-0 right-0"  />
    </div>
  )
}

export default GroupPic
