import { useState, useEffect } from "react";
import supabase from "../helpers/supabaseClient";
import { Navigate } from "react-router-dom";

const Wrapper = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      setAuthenticated(!!session);
      setLoading(false);
    };
    getSession();
  }, []);

  if (loading) {
    return (
      <div>
        <i class="fi fi-ss-half-loading animate-spin text-green-500"></i>
      </div>
    );
  } else {
    if (authenticated) {
      return <>{children}</>;
    }
    return <Navigate to="/login" />;
  }
};

export default Wrapper;
