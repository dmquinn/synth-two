import { useEffect, useState, useRef } from "react";
import * as Tone from "tone";
import { Piano } from "./Piano";
import { notes } from "./notes";
import { Form, Button, NavDropdown, Dropdown } from "react-bootstrap";

function App() {
  const oscOneArray = ["fmsine", "fmsquare", "fmsawtooth", "fmtriangle"];
  let i = 0;

  const typeEl = useRef("sine");

  const [note, setNote] = useState(null);
  const [oscTypeOne, setOscTypeOne] = useState(oscOneArray[i]);
  const oscOne = new Tone.Synth({
    oscillator: { type: oscTypeOne },
  }).toDestination();
  const oscTwo = new Tone.PolySynth().toDestination();
  const oscThree = new Tone.PolySynth().toDestination();

  const handleTypeOne = () => {};
  const playNote = (note) => {
    console.log(note);
    oscOne.triggerAttackRelease(note, "16n");
  };

  return (
    <>
      <Piano note={note} setNote={setNote} playNote={playNote} />
      <button onClick={setOscTypeOne("fmsquare")} ref="sine">
        fm square
      </button>
    </>
  );
}

export default App;
