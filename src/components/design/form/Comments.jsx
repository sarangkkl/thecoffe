import { useState } from "react";
import { useForm } from "react-hook-form";
import { CgSmileNeutral } from "react-icons/cg";
import { BsEmojiHeartEyes } from "react-icons/bs";

import CommentPreviews from "../card/CommentPreviews";

export default function FeedbackForm({ id, comment, post }) {
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (values, e) => {
    e.preventDefault();
    setLoading(!loading);

    const data = { id, post, ...values };

    const response = await fetch("/api/comment", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setLoading(loading);

    if (!response.ok) {
      setErrorMsg(!errorMsg);
      reset(e.target.values);
    }

    setSuccessMsg(!successMsg);
    reset(e.target.values);
  };

  return (
    <>
      {successMsg && (
        <div className="msg_box success an_fade-1">
          <div className="icon disabled">
            <BsEmojiHeartEyes />
          </div>
          <p className="msg">Thanks for your feedback.</p>
          <p>Once it has been approaved, it will appear below.</p>

          <div
            onClick={() => setSuccessMsg(!successMsg)}
            className="btn view_comment"
          >
            Close
          </div>
        </div>
      )}

      {errorMsg && (
        <div className="msg_box error an_fade-1">
          <div className="icon disabled update">
            <CgSmileNeutral />
          </div>

          <p className="msg">Something went wrong! </p>
          <div onClick={() => setErrorMsg(!errorMsg)} className="btn try_again">
            Try again
          </div>
        </div>
      )}

      <>
        <div className="comments an_fade-1">
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <h1>Leave a comment</h1>

            <p style={{ marginBottom: "1.5rem" }}>Give us your feedback</p>

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
              <span className="text">Your thoughts</span>
              <textarea
                style={errors?.Name && { border: "1px solid red" }}
                {...register("Message", { required: true })}
              ></textarea>

              {errors?.Message && errors.Message?.type === "required" && (
                <p className="error_msg">The field is empty!</p>
              )}
            </div>

            <button
              className="btn submit"
              type="submit"
              style={
                loading
                  ? { background: "#474747", pointerEvents: "none" }
                  : { background: "#2c2c2c" }
              }
            >
              {loading ? (
                <div className="button_load">
                  <div className="load_animation"></div>
                  <p style={{ margin: 0 }}>Saving your comment</p>
                </div>
              ) : (
                <p style={{ margin: 0 }}>Post comment</p>
              )}
            </button>
          </form>
        </div>

        {comment.length > 0 && <CommentPreviews data={comment} />}
      </>

      <style jsx>{`
        .msg_box {
          position: relative;
          z-index: 1;
          width: 100%;
          padding: 3rem;
          margin: 5rem 0 0;
          text-align: center;
        }

        .success {
          background: #d4edda;
          color: #3f8b51;
        }

        .msg {
          font-size: 1.7rem;
          font-weight: 700;
          color: #326c40;
        }

        .icon {
          padding: 0.3rem;
          color: #59a267;
          cursor: initial;
        }

        .update {
          color: #f89890;
        }

        .error {
          background: #ffbab5;
        }
        .error p {
          color: #990a00;
        }

        .btn {
          color: white;
          border: 0px;
          font-size: 1rem;
          font-weight: 700;
        }

        .btn:active {
          transform: scale(0.95);
        }

        .try_again {
          margin-top: 1rem;
          color: #990a00;
          background: #f37f7694;
        }

        .try_again:hover {
          background: #f37f76;
        }

        .view_comment {
          margin-top: 1rem;
          color: #377446;
          background: #96e1a8;
        }

        .view_comment:hover {
          background: #70d187;
        }

        .comments {
          position: relative;
          padding: 2rem;
          margin: auto;
          z-index: 1;
        }

        h1 {
          letter-spacing: 0;
          margin-bottom: 0.5rem;
        }

        .form {
          position: relative;
          max-width: 600px;
          overflow: hidden;
          margin: auto;
          padding: 2.5rem 0;
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
          border: 2px solid #000;
        }

        .error_msg {
          color: #ca0808;
          font-size: 0.8rem;
          margin: 0.2rem 0;
        }

        .submit {
          width: 100%;
          padding: 1rem;
          border-radius: 50px;
        }

        .button_load {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }

        .load_animation {
          width: 19px;
          height: 19px;
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

        @media (max-width: 600px) {
          .comments {
            padding: 0;
          }
        }
      `}</style>
    </>
  );
}
