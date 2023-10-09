import { Activity, columns } from "./columns"
import { DataTable } from "./data-table"

const data: Activity[] = [
    {
        id: "1",
        date: new Date("07-20-2023"),
        description: "Pagamento de conta de Luz",
        value: 250.95,
        type: "expense"
    },
    {
        id: "2",
        date: new Date("07-25-2023"),
        description: "Pagamento de internet",
        value: 99.90,
        type: "expense"
    },
    {
        id: "3",
        date: new Date("08-01-2023"),
        description: "Pagamento de aluguel",
        value: 1258.00,
        type: "expense"
    },
    {
        id: "4",
        date: new Date("07-06-2023"),
        description: "salario de Julho",
        value: 2560.00,
        type: "revenue"
    }
]

async function getData(): Promise<Activity[]> {
  // Fetch data from your API here.
  return data;
}

export default async function ActivityTable() {
  const data = await getData()

  return (
    <div className="container mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
  )
}