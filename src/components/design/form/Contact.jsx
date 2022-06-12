import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

export default function ContactForm() {
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
    toast.loading("Sending your response...");

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.text();
    toast.dismiss();

    if (!response.ok) {
      toast.error(data);
      reset(e.target.values);
      setLoading(loading);
    }

    toast.success(data);
    reset(e.target.values);
    setLoading(loading);
  };

  return (
    <>
      <>
        <div className="contact" id="contact-us">
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <Toaster position="bottom-right" />

            <h2>Get in touch</h2>

            <div className="inputbox">
              <span className="text">Your Name</span>
              <input
                style={errors?.Name && { border: "1px solid red" }}
                {...register("Name", {
                  required: true,
                })}
                type="text"
              />

              {errors?.Name && errors.Name?.type === "required" && (
                <p className="error_msg">The field is empty!</p>
              )}
            </div>

            <div className="inputbox">
              <span className="text">Your Email</span>
              <input
                style={errors?.Name && { border: "1px solid red" }}
                {...register("Email", {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
                type="text"
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

            <div className="inputbox">
              <span className="text">Your message</span>
              <textarea
                style={errors?.Name && { border: "1px solid red" }}
                {...register("Message", { required: true })}
              ></textarea>

              {errors?.Message && errors.Message?.type === "required" && (
                <p className="error_msg">The field is empty!</p>
              )}
            </div>

            <button
              className="btn"
              type="submit"
              style={
                loading
                  ? { background: "#474747", pointerEvents: "none" }
                  : { background: "#2c2c2c" }
              }
            >
              {loading ? <div className="load_animation"></div> : "Send"}
            </button>
          </form>
        </div>
      </>

      <style jsx>{`
        .contact {
          padding: 7rem 2rem 4rem;
        }
        .form {
          position: relative;
          margin: auto;
          max-width: 530px;
          padding: 2rem;
        }

        h2 {
          font-size: 2rem;
          letter-spacing: 0;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .text {
          position: relative;
          padding-bottom: 0.5rem;
          display: block;
          font-family: "Nunito Sans", sans-serif;
          font-weight: 700;
          font-size: 0.8rem;
          color: #000;
        }

        .inputbox {
          position: relative;
          width: 100%;
          height: auto;
          padding: 0 0 0.5rem;
        }

        .inputbox:nth-of-type(3) {
          margin-bottom: 1rem;
        }
        .inputbox input {
          position: relative;
          width: 100%;
          height: 45px;
          padding: 0 1.3rem;
          outline: none;
          font-size: 1.1rem;
          transition: 0.1s ease;
          color: #1d1d1d;
          border: 1px solid #0000003d;
        }

        .inputbox textarea {
          position: relative;
          width: 100%;
          height: 120px;
          font-family: "Nunito Sans", sans-serif;
          outline: none;
          resize: none;
          padding: 1.3rem;
          font-size: 1.1rem;
          transition: 0.1s ease;
          color: #1d1d1d;
          border: 1px solid #0000003d;
        }

        .inputbox input:focus,
        .inputbox textarea:focus {
          border: 1px solid #000;
        }

        .error_msg {
          color: #ca0808;
          font-size: 0.8rem;
          margin: 0.2rem 0;
        }

        .btn {
          color: white;
          border: 0px;
          font-size: 1rem;
          font-weight: 700;
          width: 100%;
          padding: 0.9rem;
          border-radius: 10px;
        }

        .btn:active {
          transform: scale(0.95);
        }

        .load_animation {
          width: 19px;
          height: 19px;
          margin: auto;
          border: 2px solid white;
          border-color: white white white transparent;
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

        @media (max-width: 767px) {
          .contact {
            padding: 4rem 0 2rem;
          }
        }
      `}</style>
    </>
  );
}
