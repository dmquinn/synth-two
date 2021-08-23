import React from "react";
import * as Tone from "tone";

export function Piano({ playNote, noteEl }) {
  const oscOne = new Tone.Synth({
    oscillator: { type: "sine" },
  }).toDestination();
  const handleClick = (e) => {
    console.log(e.target.value);
    // oscOne.triggerAttackRelease(noteEl, "8n");
  };
  return (
    <>
      <div id="piano">
        <input
          class="key white"
          type="button"
          value="c3"
          ref={noteEl}
          onClick={handleClick}
        ></input>
        <input
          class="key black"
          type="button"
          value="db3"
          onClick={handleClick}
        ></input>
        <input
          class="key white"
          type="button"
          value="d3"
          onClick={handleClick}
        ></input>
        <input
          class="key black"
          type="button"
          value="eb3"
          onClick={handleClick}
        ></input>
        <input
          class="key white"
          type="button"
          value="e3"
          onClick={handleClick}
        ></input>
        <input
          class="key white"
          type="button"
          value="f3"
          onClick={handleClick}
        ></input>
        <input
          class="key black"
          type="button"
          value="gb3"
          onClick={handleClick}
        ></input>
        <input
          class="key white"
          type="button"
          value="g3"
          onClick={handleClick}
        ></input>
        <input
          class="key black"
          type="button"
          value="ab3"
          onClick={handleClick}
        ></input>
        <input
          class="key white"
          type="button"
          value="a3"
          onClick={handleClick}
        ></input>
        <input
          class="key black"
          type="button"
          value="bb3"
          onClick={handleClick}
        ></input>
        <input
          class="key white"
          type="button"
          value="b3"
          onClick={handleClick}
        ></input>
        <input
          class="key white"
          type="button"
          value="c4"
          onClick={handleClick}
        ></input>
        <input
          class="key black"
          type="button"
          value="db4"
          onClick={handleClick}
        ></input>
        <input
          class="key white"
          type="button"
          value="d4"
          onClick={handleClick}
        ></input>
        <input
          class="key black"
          type="button"
          value="eb4"
          onClick={handleClick}
        ></input>
        <input
          class="key white"
          type="button"
          value="e4"
          onClick={handleClick}
        ></input>
        <input
          class="key white"
          type="button"
          value="f4"
          onClick={handleClick}
        ></input>
        <input
          class="key black"
          type="button"
          value="gb4"
          onClick={handleClick}
        ></input>
        <input
          class="key white"
          type="button"
          value="g4"
          onClick={handleClick}
        ></input>
        <input
          class="key black"
          type="button"
          value="ab4"
          onClick={handleClick}
        ></input>
        <input
          class="key white"
          type="button"
          value="a4"
          onClick={handleClick}
        ></input>
        <input
          class="key black"
          type="button"
          value="bb4"
          onClick={handleClick}
        ></input>
        <input
          class="key white"
          type="button"
          value="b4"
          onClick={handleClick}
        ></input>
        <input
          class="key white"
          type="button"
          value="c5"
          onClick={handleClick}
        ></input>
      </div>
    </>
  );
}
