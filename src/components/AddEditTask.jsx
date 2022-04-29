import React, { useState } from "react";

// uncontrolled form ie. we do not use the form tag but handle all of the form state ourselves
export default function AddEditTask({ onComplete, type, defaultValue }) {
  const [name, setname] = useState(defaultValue.name);
  const [desc, setdesc] = useState(defaultValue.desc);
  const [date, setdate] = useState(defaultValue.date);

  return (
    <>
      <h1>{type} task</h1>

      <label>Task name: </label>
      <input type='text' value={name} onChange={(e) => setname(e.target.value)} />
      <br />
      <label>Task description: </label>
      <input type='text' value={desc} onChange={(e) => setdesc(e.target.value)} />
      <br />
      <label>Task date: </label>
      <input type='date' value={date} onChange={(e) => setdate(e.target.value)} />
      <br />
      <button
        onClick={() => {
          onComplete(name, desc, date);
          setname(defaultValue.name);
          setdesc(defaultValue.desc);
          setdate(defaultValue.dtate);
        }}>
        {type} TASK
      </button>
    </>
  );
}
