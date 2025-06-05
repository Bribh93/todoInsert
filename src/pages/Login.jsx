import { useState } from "react";
import supabase from "../helpers/supabaseClient";
import { Toaster, toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("false");

  const handleSubmit = async (event) => {
    event.preventDefault()

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      toast.error(` ${error.message}`);
      setEmail("");
      setPassword("");
      return;
    }
    if (data) {
      toast.success("Your account was created successfully");
      navigate("/htmlpage");
      return null;
    }
  };
  return (
    <div className=" grid place-content-center  page-transition">
      <h1 className="text-2xl mb-10">Log in</h1>

      <form
        className="space-y-10"
        onSubmit={handleSubmit}
      >
        <div className="w-full max-w-md relative border rounded-full">
          <label
            htmlFor="email"
            className="absolute left-2 top-0 -translate-y-6  uppercase font-bold text-xs"
          >
            Name
          </label>
          <input
            id="email"
            type="text"
            className="py-3 pl-14 pr-4 rounded-full w-full outline-none  ring-offset-2  focus:ring-2  transition-all"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            autoComplete="email"
          />
          <i className="fi fi-rr-user absolute top-1 left-1 w-10 h-8 flex items-center justify-center bg-transparent rounded-s-full border-r border-tertiary text-muted-foreground pointer-events-none"></i>
        </div>
        <div className="w-full max-w-md relative border rounded-full">
          <label
            htmlFor="password"
            className="absolute left-2 top-0 -translate-y-6 text-muted-foreground uppercase font-bold text-xs"
          >
            Password
          </label>
          <input
            id="password"
            type={showPassword ? "password" : "text"}
            className="py-3 pl-4 pr-14 rounded-full w-full outline-none bg-background-secondary placeholder:text-muted-foreground ring-offset-2 ring-offset-background focus:ring-2 focus:ring-background-tertiary transition-all"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            autoComplete="current-password"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            type="button"
            className="absolute top-1 right-1 w-10 h-10 flex items-center justify-center dark:bg-gray-950/60 rounded-full"
          >
            {showPassword ? (
              <i className="fi fi-rr-lock"></i>
            ) : (
              <i class="fi fi-rr-lock-open-alt"></i>
            )}
          </button>
        </div>
        <Toaster
          closeButton
          richColors
        />
        <div className="text-right -mt-8 ">
          <span className="text-xs p-3">
            Don't have a account?
            <Link
              className="hover:text-green-500 font-semibold"
              to={"/register"}
            >
              {" "}
              Create Account
            </Link>
          </span>
        </div>
        <button
          type="submit"
          className="w-full -mt-5 bg-transparent border-2 border-green-500/50 text-green-500 py-2 px-5 rounded-full hover:bg-green-500 hover:text-white transition-colors"
        >
          Log in
        </button>
      </form>
    </div>
  );
};
export default Login;
