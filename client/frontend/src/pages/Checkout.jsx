import { useState } from "react"
import { MdOutlinePayment } from "react-icons/md";
import { useLocation } from "react-router-dom";

export default function Checkout() {
    const order=JSON.parse(localStorage.getItem('cart'))
    const governorates = [
        "Cairo", "Alexandria", "Giza", "Dakahlia", "Red Sea", "Beheira", "Fayoum",
        "Gharbia", "Ismailia", "Monufia", "Minya", "Qaliubiya", "New Valley", 
        "Suez", "Aswan", "Assiut", "Beni Suef", "Port Said", "Damietta", "Sharkia", 
        "South Sinai", "Kafr El Sheikh", "Matrouh", "Luxor", "Qena", "North Sinai", 
        "Sohag"]
        const [paypal,set_paypal]=useState(false)
    const location=useLocation();
    const sum=location.state.sum
  return (
    <div className="m-5 md:flex md:flex-row h-screen">
    {/* Left Section: Form */}
    <div className="md:w-1/2 w-full flex flex-col">
      <div className="flex items-center justify-center mt-9 mb-4">
        <h1 className="text-3xl font-sans font-bold">Checkout</h1>
        
      </div>
      <h1 className="text-2xl font-sans font-bold mb-3">Contact</h1>
  
      <div className="flex flex-col">
        <div>
          <label className="mb-2 text-base block">Email</label>
          <input
            type="email"
            placeholder="jack@gmail.com"
            className="mb-3 px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-blue-500"
          />
        </div>
  
        <h1 className="text-2xl font-sans font-bold mb-5">Payment Information</h1>
  
        <div>
          <label className="mb-2 text-base block">Country</label>
          <input
            type="text"
            placeholder="Egypt"
            disabled
            className="mb-3 px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-blue-500"
          />
        </div>
  
        <div className="flex md:flex-row flex-col md:space-x-3">
          <div className="w-full">
            <label className="mb-2 text-base block">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              className="mb-3 px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-blue-500"
            />
          </div>
          <div className="w-full">
            <label className="mb-2 text-base block">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="mb-3 px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-blue-500"
            />
          </div>
        </div>
  
        <div className="w-full">
          <label className="mb-2 text-base block">Address</label>
          <input
            type="text"
            placeholder="Address"
            className="mb-3 px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-blue-500"
          />
        </div>
        <div className="w-full">
          <label className="mb-2 text-base block">Apartment or Suite</label>
          <input
            type="text"
            placeholder="Apartment , Suite ,etc.."
            className="mb-3 px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-blue-500"
          />
        </div>
  
        <div>
          <label className="mb-2 text-base block">Governorate</label>
          <select
            className="mb-3 px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-blue-500"
          >
            <option value="">Select Governorate</option>
            {governorates.map((governorate, index) => (
              <option key={index} value={governorate}>
                {governorate}
              </option>
            ))}
          </select>
        </div>
  
        <div className="w-full">
          <label className="mb-2 text-base block">Phone</label>
          <input
            type="text"
            placeholder="+20"
            className="mb-3 px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-blue-500"
          />
        </div>
  
        <h1 className="mt-5 mb-3 text-2xl font-sans font-bold">Payment Method</h1>
  
        <div className="border-1 flex flex-row gap-1 border-black px-2 py-2 ">
          <input type="radio" name="payment-type" /> <h1>Cash On Delivery (COD)</h1>
        </div>
  
        <div
          className={`border-1 mb-10 border-black ${
            paypal ? "bg-gray-200" : "bg-white"
          } ${paypal ? "border-b-1" : ""} px-2 py-2 rounded-md`}
        >
          <div className="flex flex-row gap-1 items-center">
            <input
              onClick={() => {
                set_paypal(!paypal);
              }}
              type="radio"
              name="payment-type"
            />{" "}
            <h1
              className={`flex  flex-row items-center  font-sans text-lg gap-3`}
            >
              Credit Card <MdOutlinePayment />
            </h1>
          </div>
  
          {paypal && (
            <div className="w-full mt-3">
              <hr />
              <label className="mb-2 text-base block">Card Number</label>
              <input
                type="text"
                placeholder="2321-3123-1233-0111"
                className="mb-3 px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-blue-500"
              />
              <div className="flex space-x-3">
                <div className="w-1/2">
                  <label className="mb-2 text-base block">Expiration Date</label>
                  <input
                    type="text"
                    placeholder="03/27"
                    className="mb-3 px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-blue-500"
                  />
                </div>
                <div className="w-1/2">
                  <label className="mb-2 text-base block">Security Code</label>
                  <input
                    type="text"
                    placeholder="231"
                    className="mb-3 px-4 py-2 text-base rounded-md bg-white border border-gray-400 w-full outline-blue-500"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
  <div className="md:hidden  flex flex-col">
    {order.map((product)=>{
      return(
        <div className="flex mb-5 border-b-2 shadow-md border-black rounded-lg p-3 flex-row items-center justify-between gap-2" key={product.productID}>
         <div className="">
          <img className="w-14 rounded-md" src={product.image}/>
          <h1 className="mt-3 font-sans font-semibold text-md">{product.title}</h1>
          </div>
          <h1 className="font-sans">{product.price} EGP</h1>
         
          </div>
      )
    })}
    <div className="flex flex-row mb-2 items-center justify-between ">
  <h1>Subtotal</h1>
  <h1 className="font-bold font-sans text-lg">{sum}.00 EGP</h1>
</div>
<div className="flex  flex-row mb-3 items-center justify-between">
  <h1 className="font-sans">Shipping</h1>
  <h1 className="font-bold font-sans text-lg">FREE</h1>
</div>
<div className="flex mb-5  flex-row items-center justify-between">
  <h1 className="font-bold text-2xl font-sans">Total</h1>
<h1 className="font-bold text-xl font-sans">{sum} EGP</h1>
</div>

  </div>
        <button className="bg-green-700 font-sans font-semibold hover:bg-green-900 focus:outline-blue-700 mb-5 uppercase rounded-sm text-white px-3 py-2">
          Pay Now
        </button>
      </div>
    </div>
  
  
    <div className="md:w-1/2  w-full hidden md:flex  mt-9 mb-4 ml-12 items-center  md:justify-center">
    <div className="flex flex-col gap-3">
    {order.map((product) => {
  return (
    <div className="flex items-center border-b-2 shadow-md shadow-t-lg p-5 rounded-lg border-black justify-between space-x-2" key={product.productID}>
      <div className="relative">
        <img src={product.image} className="w-12 bg-gray-600 object-cover" alt={product.title} />
        <span className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 bg-black  text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
          {product.quantity}
        </span>
      </div>
      <h1 className="text-md font-sans tracking-tight font-semibold leading-tight">{product.title}</h1>
      <h1 className="pl-5 font-sans">{product.price} EGP</h1>

    </div>
  );
})}
<div className="md:flex flex-row items-center md:justify-between hidden">
  <h1>Subtotal</h1>
  <h1 className="font-bold font-sans text-lg">{sum}.00 EGP</h1>
</div>
<div className="md:flex hidden flex-row items-center md:justify-between">
  <h1 className="font-sans">Shipping</h1>
  <h1 className="font-bold font-sans text-lg">FREE</h1>
</div>
<div className="md:flex hidden flex-row items-center md:justify-between">
  <h1 className="font-bold text-2xl font-sans">Total</h1>
<h1 className="font-bold text-xl font-sans">{sum}EGP</h1>
</div>
      </div>
    </div>
  </div>
  
  
  )
}
