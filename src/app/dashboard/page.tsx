import ActivityBalance from "@/components/dashboard/activity-balance";
import ActivityTable from "@/components/dashboard/activity-table";
import InsertActivityForm from "@/components/dashboard/insert-activity-form";

const Dashboard = () => {
  return (
    <>
        <InsertActivityForm />

        <ActivityTable />

        <ActivityBalance />
    </>
  );
};

export default Dashboard;
