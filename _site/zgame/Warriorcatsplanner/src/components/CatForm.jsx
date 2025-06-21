import React from "react";

export default function CatForm({ onSave, onCancel, initialData }) {
  // This will be the form for adding/editing a cat
  // For now, just a placeholder
  return (
    <form>
      <div>Cat Form (add/edit)</div>
      {/* Fields: image, name, description, age, rank, death age */}
      <div className="form-actions">
        <button className="button" type="submit">Save</button>
        <button className="button" type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}
