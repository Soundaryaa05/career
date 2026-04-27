import { useState } from "react";
import { recommend } from "../api";

export default function Questionnaire() {
  const [skills, setSkills] = useState("");
  const [result, setResult] = useState([]);

  const submit = async () => {
    const res = await recommend(skills.split(","));
    setResult(res.data);
  };

  return (
    <div>
      <input placeholder="Enter skills (comma separated)"
        onChange={e=>setSkills(e.target.value)} />
      <button onClick={submit}>Get Careers</button>

      {result.map(c => <p key={c._id}>{c.title}</p>)}
    </div>
  );
}