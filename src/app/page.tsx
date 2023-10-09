import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BadgeDollarSign } from "lucide-react";

export default function Home() {
  return (
    <main>
      <div className="h-screen flex items-center pb-60">
        <div className="container space-y-5 p-8 max-w-md bg-gray-50 rounded-xl shadow-md">
          <span className="flex items-center gap-2">
            <BadgeDollarSign size={48} className="text-slate-500" />

            <h1 className="uppercase text-slate-800 font-bold text-xl">
              Money Manager
            </h1>
          </span>

          <Input type="email" placeholder="Entre com seu e-mail" />

          <Input type="password" placeholder="Entre com sua senha" />

          <Button>Entrar</Button>
        </div>
      </div>
    </main>
  );
}
