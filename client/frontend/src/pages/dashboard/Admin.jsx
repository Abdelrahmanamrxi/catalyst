
import { FaAngleRight } from "react-icons/fa6"



export default function Admin() {


  return (
    <div className="lg:flex w-full lg:flex-row h-screen">           
      <div className="grid md:h-full h-full lg:h-full sm:h-64 grid-cols-2 gap-4 p-3 md:p-10 w-full justify-center md:w-full">
  <div className="rounded-xl flex flex-col hover:bg-black bg-stone-900 text-white p-5 md:p-10 h-auto sm:h-64 md:h-auto">
    <div className="flex flex-row items-center justify-between">
      <h1 className="text-xl mb-2 font-bold font-mono">Users Details</h1>
      <FaAngleRight />
    </div>
    <h1 className="mt-5 font-bold text-lg">User Count: <span className="text-lg font-light">1231</span></h1>
  </div>

  <div className="rounded-xl flex flex-col hover:bg-black bg-stone-800 text-white p-5 md:p-10 h-auto sm:h-64 md:h-auto">
    <div className="flex flex-row items-center justify-between">
      <h1 className="text-xl mb-2 font-bold font-mono">Orders Details</h1>
      <FaAngleRight />
    </div>
    <h1 className="mt-5 font-bold text-lg">Order Count: <span className="text-lg font-light">1231</span></h1>
  </div>

  <div className="rounded-xl flex flex-col hover:bg-black bg-stone-950 text-white p-5 md:p-10 h-auto sm:h-64 md:h-auto">
    <div className="flex flex-row items-center justify-between">
      <h1 className="text-xl mb-2 font-bold font-mono">Product Details</h1>
      <FaAngleRight />
    </div>
  </div>
</div>

    </div>

  );
};
