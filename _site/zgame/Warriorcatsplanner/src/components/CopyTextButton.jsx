import React from "react";

export default function CopyTextButton({ label = "📋 Copy Text", onCopy }) {
  return (
    <button className="button copy-text-btn" onClick={onCopy}>
      {label}
    </button>
  );
}
