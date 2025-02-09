import React from "react";
import SUCCESSIMAGE from "../../assets/success.gif";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="bg-slate-200 w-full max-w-md mx-auto flex justify-center items-center flex-col p-4 m-2 rounded">
      <img src={SUCCESSIMAGE} width={350} height={350} alt="Success" />
      <p className="text-green-600 font-bold text-xl">Payment Successfully</p>
      <Link
        to="/shop/account"  // ✅ Updated Link
        className="p-2 px-3 mt-5 border-2 border-green-600 rounded font-semibold text-green-600 hover:bg-green-600 hover:text-white"
      >
        See Order
      </Link>
    </div>
  );
};

export default Success;
