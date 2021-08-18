import { useEffect, useState } from "react";
import * as Tone from "tone";
import { Piano } from "./Piano";
import { notes } from "./notes";

function App() {
  const oscOneArray = ["sine", "square", "sawtooth", "triangle"];
  let i = 0;
  const [note, setNote] = useState(null);
  const [oscTypeOne, setOscTypeOne] = useState(oscOneArray[i]);
  const oscOne = new Tone.Synth({
    oscillator: { type: oscTypeOne },
  }).toDestination();
  const oscTwo = new Tone.PolySynth().toDestination();
  const oscThree = new Tone.PolySynth().toDestination();
  const handleTypeOne = (i) => {
    setOscTypeOne(oscOneArray[i++]);
  };
  const playNote = (note) => {
    console.log(note);
    oscOne.triggerAttackRelease(note, "16n");
  };

  return (
    <>
      <Piano note={note} setNote={setNote} playNote={playNote} />
      <button onClick={handleTypeOne}>{oscTypeOne}</button>
    </>
  );
}

export default App;
