import CardTaskReact from "../components/logicPage/CardTaskReact"
import ReactInsert from "../components/logicPage/ReactInsert"

const ReactPage = () => {
  return (
    <div className="page-transition mx-4">

        <ReactInsert/>
        <CardTaskReact/>
    </div>
  )
}
export default ReactPage;