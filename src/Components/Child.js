import { useState } from "react";
import "./Child.css";
import Dog from "../Images/dog.jpeg";

function Child({ name, surname }) {
  // new state variable
  //     state variable       mutation function        initial value
  const [patsOnRichardsHead, setPatsOnRichardsHead] = useState(0);

  function handlePat() {
    setPatsOnRichardsHead(patsOnRichardsHead + 1);
  }
  return (
    <>
      <h2>
        Dogs name is {name} {surname}
      </h2>
      <img src={Dog} alt="boerboel" onClick={handlePat} />
      <p> Number of pats on his head: {patsOnRichardsHead}</p>
    </>
  );
}

export default Child;
