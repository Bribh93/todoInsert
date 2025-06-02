import CardTaskSupabase from "../components/logicPage/CardTaskSupabase";
import SupabaseInsert from "../components/logicPage/SupabaseInsert";

const SupabasePage = () => {
  return (
    <div className="page-transition mx-4">
      <SupabaseInsert />
      <CardTaskSupabase />
    </div>
  );
};
export default SupabasePage;
