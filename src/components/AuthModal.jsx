import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import TextArea from "./TextArea";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";

export default function AuthModal() {
  const [actionState, setActionState] = useState("signin");

  const switchActionState = (action) => {
    setActionState(action);
  };

  return (
    <>
      <button
        className="btn btn-md btn-accent"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Masuk
      </button>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-base-100">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          {actionState === "signin" ? (
            <SigninForm switchActionState={switchActionState} />
          ) : actionState === "signup" ? (
            <SignupForm switchActionState={switchActionState} />
          ) : (
            ""
          )}
        </div>
      </dialog>
    </>
  );
}
