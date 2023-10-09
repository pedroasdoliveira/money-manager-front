import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const InsertActivityForm = () => {
  return (
    <div className="flex space-x-2 p-8">
      <Input type="date" className="w-max-[10rem]" />
      <Input type="text" placeholder="Descreva a atividade..." />
      <Input type="number" className="w-max" placeholder="Digite o valor..." />

      <Select>
        <SelectTrigger className="w-80">
          <SelectValue placeholder="Atividade" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="0">Entrada</SelectItem>
          <SelectItem value="1">Saída</SelectItem>
        </SelectContent>
      </Select>

      <Button>Incluir</Button>
    </div>
  );
};

export default InsertActivityForm;
