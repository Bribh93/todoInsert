import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Wrapper from "./pages/Wrapper";
import Layout from "./pages/Layout";
import Documents from "./pages/Documents";
import CssPage from "./pages/CssPage";
import HtmlPage from "./pages/HtmlPage";
import ReactPage from "./pages/ReactPage";
import JsPage from "./pages/JsPage";
import SupabasePage from "./pages/SupabasePage";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            path="*"
            element={<NotFound />}
          />
          <Route
            index
            element={<Home />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/documents"
            element={
              <Wrapper>
                <Documents />
              </Wrapper>
            }
          />
          <Route
            path="/csspage"
            element={
              <Wrapper>
                <CssPage />
              </Wrapper>
            }
          />
          <Route
            path="/htmlpage"
            element={
              <Wrapper>
                <HtmlPage />
              </Wrapper>
            }
          />
          <Route
            path="/reactpage"
            element={
              <Wrapper>
                <ReactPage />
              </Wrapper>
            }
          />
          <Route
            path="/jspage"
            element={
              <Wrapper>
                <JsPage />
              </Wrapper>
            }
          />
          <Route
            path="/supabasepage"
            element={
              <Wrapper>
                <SupabasePage />
              </Wrapper>
            }
          />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
