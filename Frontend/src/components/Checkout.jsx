import { useState } from "react";

export default function Checkout() {
  const [paymentType, setPaymentType] = useState("COD");

  return (
    <div className="flex justify-center items-center  px-4">
      <div className="bg-white p-10  w-full max-w-3xl">
        <h2 className="text-center text-3xl font-semibold mb-6">Checkout</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input name="name" placeholder="Name" className="p-3 border rounded w-full" required />
          <input name="address" placeholder="Address" className="p-3 border rounded w-full" required />
          <input name="phone" placeholder="Phone" className="p-3 border rounded w-full" required />
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
              <input name="cardNumber" placeholder="Card Number" className="p-3 border rounded w-full" required />
              <input name="expiry" placeholder="Expiry Date" className="p-3 border rounded w-full" required />
              <input name="cvv" placeholder="CVV" className="p-3 border rounded w-full" required />
            </>
          )}
          {paymentType === "UPI" && (
            <input name="upiPin" placeholder="Provide UPI PIN" className="p-3 border rounded w-full" required />
          )}
          <div className="col-span-1 md:col-span-2 ">
            <button type="submit" className="w-full p-3  rounded bg-green-500 text-white ">Place Order</button>
          </div>
        </form>
      </div>
    </div>
  );
}


