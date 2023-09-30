import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

export default function SignupForm({ switchActionState }) {
  const [request, setRequest] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  };

  return (
    <form className="flex flex-col gap-4">
      <h1 className="text-3xl font-semibold text-center">Daftar</h1>

      <div className="w-full lg:basis-2/4">
        <Input
          label="Nama"
          isRequire
          name="name"
          placeholder="John Doe"
          handleInputChange={handleInputChange}
        />
      </div>

      <div className="w-full lg:basis-2/4">
        <Input
          label="Email"
          isRequire
          name="email"
          placeholder="johndoe123@gmail.com"
          handleInputChange={handleInputChange}
        />
      </div>

      <div className="w-full lg:basis-2/4">
        <Input
          label="Password"
          isRequire
          name="password"
          placeholder="********"
          type="password"
          handleInputChange={handleInputChange}
        />
      </div>

      <div className="flex justify-between w-full pt-4">
        <Button label="Kirim" />
        <Button
          type="button"
          label="Masuk"
          onClick={() => switchActionState("signin")}
        />
      </div>
    </form>
  );
}
