import React from "react";

export default function Header({ onLoad }) {
  return (
    <header className="header">
      <div style={{ width: 120 }}></div>
      <div className="header-title">Wolf Light: Warrior Cats Planner</div>
      <div className="header-actions">
        <button className="button" onClick={onLoad}>Load Save</button>
      </div>
    </header>
  );
}
