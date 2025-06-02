import { useEffect, useState } from "react";
import supabase from "../helpers/supabaseClient";
import { toast, Toaster } from "sonner";
import DashboardCard from "../components/DashboardCard";

const ADMIN_ID = "6faa4854-b471-4614-a598-b094300ad8ab"; //se le pone el id del usuario que provee supabase y viene de .evn 

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data?.user || null);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (loading) {
      toast("Loading...");
    }
  }, [loading]);

  if (!user || user.id !== ADMIN_ID) {
    return <div>No tienes permiso para ver esta página.</div>;
  }

  return (
    <>
      <div className="md:flex justify-between items-center mb-4 px-4  text-green-600 w-[80%] mx-auto ">
        <h1 className="text-xl">Dashboard</h1>
        <p className="text-gray-500 text-sm">Bienvenido  <span className="text-xl text-green-600">😁 {user.email.split("@gmail.com")} ✌️</span></p>
      </div>
      <DashboardCard />
      <Toaster
        position="bottom-right"
        richColors
      />
    </>
  );
};
export default Dashboard;
