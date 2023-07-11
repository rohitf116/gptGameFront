import { useState } from "react";
import axios from "axios";
function App() {
  const [option1, setOption1] = useState(
    "A wizard enters a magical dark forest."
  );
  const [option2, setOption2] = useState(
    `An explorer enters an interdimensional time machine.`
  );
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const handleClick = async (option) => {
    const { data } = await axios.post("http://localhost:8000", { option });
    console.log(data);
    const tata = JSON.parse(data.result.content);
    console.log(tata, "tata");
    setDescription(tata.story);
    setImage(data.image);
  };
  return (
    <>
      <div>
        {image && <img src={image} alt="Image" width={400} height={300} />}
        {description && <p>{description}</p>}
        <button onClick={() => handleClick(option1)}>{option1}</button>
        <button onClick={() => handleClick(option2)}>{option2}</button>
      </div>
    </>
  );
}
function Option() {}

export default App;
