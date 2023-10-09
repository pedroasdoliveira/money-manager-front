import { BadgeDollarSign } from "lucide-react";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="container flex h-20 rounded-xl items-center m-auto gap-4 bg-zinc-800 shadow-md">
        <BadgeDollarSign size={60} className="text-emerald-400" />

        <h1 className="uppercase text-slate-100 font-bold text-2xl">Money Manager</h1>
      </div>

      <div className="container items-center gap-4 w-md m-auto mt-2 h-auto rounded-xl shadow-md bg-slate-50"> 
        {children}
      </div>
    </>
  );
};

export default DashboardLayout;
