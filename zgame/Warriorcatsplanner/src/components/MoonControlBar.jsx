import React from "react";

export default function MoonControlBar({ moon, onSkipMoon, onBackMoon }) {
  return (
    <div className="moon-bar">
      <button className="button" onClick={onBackMoon}>⏪ Go Back a Moon</button>
      <span>Moon: {moon}</span>
      <button className="button" onClick={onSkipMoon}>⏩ Skip a Moon</button>
    </div>
  );
}
