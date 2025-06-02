
import CardTaskHtml from "../components/logicPage/CardTaskHtml";
import HtmlInsert from "../components/logicPage/HtmlInsert";

export const HtmlPage = () => {
  return (
    <div className="page-transition mx-4 ">
      <HtmlInsert />
      <CardTaskHtml/>
    </div>
  );
};
export default HtmlPage;