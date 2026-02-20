// import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Newsboard from "./components/Newsboard";
import { useState } from "react";

const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <div className="app-container">
      <Navbar setCategory={setCategory} />
      <Hero setCategory={setCategory} />
      <Newsboard category={category} />
    </div>
  )

}

export default App;