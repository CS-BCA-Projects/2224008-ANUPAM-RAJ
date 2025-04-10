import { useState } from "react";


export default function Checkout({onCheckoutComplete}) {
  const [paymentType, setPaymentType] = useState("COD");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCheckoutComplete(); 
  };

 
  return (
    <div className="flex justify-center items-center  px-4">
      <div className="bg-white p-10  w-full max-w-3xl">
        <h2 className="text-center text-3xl font-semibold mb-6">Checkout</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input name="name" placeholder="Name" className="p-2 border rounded w-full" required />
          <input name="address" placeholder="Address" className="p-2 border rounded w-full" required />
          <input name="phone" placeholder="Phone" className="p-2 border rounded w-full" required />
          <select 
            name="paymentType" 
            className="p-3 border rounded w-full" 
            onChange={(e) => setPaymentType(e.target.value)}
            required
          >
            <option value="COD">Cash on Delivery</option>
            <option value="Card">Card Payment</option>
            <option value="UPI">UPI</option>
          </select>
          {paymentType === "Card" && (
            <>
              <input name="cardNumber" placeholder="Card Number" className="p-2 border rounded w-full" required />
              <input name="expiry" placeholder="Expiry Date" className="p-2 border rounded w-full" required />
              <input name="cvv" placeholder="CVV" className="p-2 border rounded w-full" required />
              <input name="Amount" placeholder="Enter the Amount" className="p-2 border rounded w-full" required />
            </>
          )}
          {paymentType === "UPI" && (
            <>
            <input name="upiPin" placeholder="Provide UPI PIN" className="p-2 border rounded w-full" required />
            
            <input name="Money" placeholder="Enter the Amount" className="p-2 border rounded w-full" required />
            </>
          )}
          <div className="col-span-1 md:col-span-2 ">
            <button  type="submit" className="w-full p-2  rounded bg-green-500 text-white ">Proceed To Checkout</button>
          </div>
        </form>
      </div>
    </div>
  );
}


