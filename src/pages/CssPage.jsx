import CardTasksCss from "../components/logicPage/CardTasksCss";
import CssInsert from "../components/logicPage/CssInsert";

function CssPage() {
  return (
    <div className="page-transition mx-4">
      <CssInsert />
      <CardTasksCss />
    </div>
  );
}
export default CssPage;
