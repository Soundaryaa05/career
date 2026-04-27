import { useState } from "react";
import { login } from "../api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await login({ email, password });
    localStorage.setItem("token", res.data.token);
    alert("Logged in");
  };

  return (
    <div>
      <input placeholder="email" onChange={e=>setEmail(e.target.value)} />
      <input placeholder="password" onChange={e=>setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}