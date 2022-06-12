import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

export default function Newsletter() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values, e) => {
    e.preventDefault();
    setLoading(!loading);
    toast.loading("Saving your response");

    const response = await fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.text();

    toast.dismiss();
    setLoading(loading);

    if (!response.ok) {
      toast.error(data);
      reset(e.target.values);
    }

    toast.success(data);
    reset(e.target.values);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="title"> Subscribe to our Newsletter </p>
        <p>Subscribe to get all the latest blogs and future updates.</p>

        <div className="inputbox">
          <input
            style={errors?.Name && { border: " 2px solid #027066" }}
            {...register("Name", {
              required: true,
            })}
            type="text"
            placeholder="Your Name"
          />

          {errors?.Name && errors.Name?.type === "required" && (
            <p className="error_msg">The field is empty!</p>
          )}
        </div>

        <div className="inputbox">
          <input
            style={errors?.Email && { border: " 2px solid #027066" }}
            {...register("Email", {
              required: true,
              pattern:
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
            type="text"
            placeholder="Your Email"
          />

          {errors?.Email && (
            <>
              {errors.Email?.type === "required" && (
                <p className="error_msg">The field is empty!</p>
              )}
              {errors.Email?.type === "pattern" && (
                <p className="error_msg">Invalid Email! </p>
              )}
            </>
          )}
        </div>

        <button
          className="btn"
          type="submit"
          disabled={loading}
          style={
            loading
              ? { background: "#39948c", pointerEvents: "none" }
              : { background: "#027066" }
          }
        >
          {loading ? <div className="load_animation"></div> : "Subscribe"}
        </button>

        <Toaster position="bottom-right" />
      </form>

      <style jsx>{`
        .load_animation {
          width: 19px;
          height: 19px;
          margin: auto;
          border: 2px solid #a1d8d3;
          border-color: #a1d8d3 #a1d8d3 #a1d8d3 transparent;
          border-radius: 100%;
          animation: transform 1s linear infinite;
        }
        @keyframes transform {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }

        form {
          position: relative;
          max-width: 540px;
          margin: 1rem auto;
          text-align: center;
          padding: 2rem;
          display: flex;
          flex-direction: column;
        }

        .title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        p {
          margin-bottom: 2rem;
        }

        .inputbox {
          position: relative;
          width: 100%;
          height: auto;
          padding: 0 0 0.5rem;
        }

        .inputbox input {
          position: relative;
          outline: none;
          width: 100%;
          height: 45px;
          padding: 0 1.3rem;
          font-size: 1rem;
          transition: 0.5s;
          color: black;
          border: 2px solid #c5f0eb;
          background: #d0f7f3c2;
        }

        .btn {
          color: #a1d8d3;
          border: 0px;
          font-size: 1rem;
          font-weight: 700;
          background: #027066;
          border-radius: 0;
        }

        .btn:hover {
          background: #39948c;
        }

        .error_msg {
          color: #000000;
          font-size: 0.8rem;
          margin: 0.2rem 0;
          text-align: left;
          font-weight: 600;
        }

        @media (max-width: 600px) {
          form {
            padding: 2rem 0 0;

            text-align: left;
          }
        }
      `}</style>
    </>
  );
}
