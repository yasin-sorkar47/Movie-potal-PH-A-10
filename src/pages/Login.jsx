import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context";

export default function Login() {
  const [err, setErr] = useState(null);

  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const { singInUser, singInWithGoogle, setUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    setErr(null);
    // singIn
    singInUser(data.email, data.password)
      .then((result) => {
        reset();
        navigate("/");
      })
      .catch((error) => {
        setErr("invalid password or email.");
      });
  };

  const handleSingIngWithGoogle = () => {
    singInWithGoogle()
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setUser(null);
      });
  };

  return (
    <div className="hero  min-h-screen">
      <div className="card bg-base-100 w-full max-w-xl shrink-0 shadow-2xl">
        <h1 className="text-5xl font-bold text-center pt-8">Login now!</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            {err && <p className="text-red-500">{err}</p>}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>

            <label className="label">
              <p className="label-text-alt  ">
                If you don't have an account please{" "}
                <Link to={"/register"} className="link link-hover font-bold">
                  Register
                </Link>
              </p>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <div className="form-control mt-3">
            <button
              onClick={handleSingIngWithGoogle}
              type="button"
              className="btn btn-success text-white"
            >
              <FaGoogle />
              Login with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
