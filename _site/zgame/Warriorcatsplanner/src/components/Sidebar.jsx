import React from "react";

export default function Sidebar({ onSave, onCreateClan }) {
  return (
    <aside className="sidebar">
      <button className="button" style={{ marginBottom: "1rem" }} onClick={onSave}>Save</button>
      <div className="section-title">🛠️ Clan Management</div>
      <button className="button" onClick={onCreateClan}>🔨 Create Clan</button>
      {/* Living clans will be listed here */}
    </aside>
  );
}
