import career from '../assets/image/careers.png'
import pic from '../assets/image/okx5.jpeg'

function Connected() {
  return (
    <div className="relative py-3">
      <img src={pic} alt="frame" className='w-[90%] md:w-[85%] lg:w-[75%]'/>
      <div className='flex pl-4 pr-1 absolute top-[4%] md:pl-8 lg:pl-16 lg:top-[3%]'>
        <p className='text-white my-auto text-xs pt-6 md:text-base lg:text-2xl lg:pt-10 lg:w-[50%]'>Stay connected, share freely, and save it all with OKTC.</p>
        <img src={pic} alt="pic" className='w-[50%] md:ml-14 md:w-[46%] lg:w-[45%] lg:ml-0'/>
      </div>
    </div>
  );
}

export default Connected