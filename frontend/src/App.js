import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [skills, setSkills] = useState("");
  const [result, setResult] = useState([]);

  const handleClick = async () => {
    const res = await axios.post(
      "http://localhost:5000/api/career/recommend",
      { skills: skills.split(",") }
    );
    setResult(res.data);
  };

  return (
    <div className="container">
      <h1>🎓 Career Guidance Platform</h1>

      <input
        placeholder="Enter skills (e.g. coding, creativity)"
        onChange={(e) => setSkills(e.target.value)}
      />

      <br /><br />

      <button onClick={handleClick}>Get Careers</button>

      <div className="cards">
        {result.map((c) => (
          <div className="card" key={c._id}>
            <h3>💼 {c.title}</h3>
            <p>{c.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;