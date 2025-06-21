import React from 'react';

export default function ImageUploader({ label, imageKey, onUpload, getImageUrl }) {
  return (
    <label>
      {label}
      <div style={{ marginTop: 8 }}>
        <input
          type="file"
          accept="image/*"
          id={`upload_${imageKey}`}
          onChange={onUpload}
        />
        <label
          htmlFor={`upload_${imageKey}`}
          className="button"
          style={{ cursor: 'pointer', marginRight: 8, display: 'inline-block' }}
        >
          Upload Image
        </label>
        {imageKey && (
          <div style={{ marginTop: 8 }}>
            <img
              src={getImageUrl(imageKey)}
              alt="Preview"
              style={{ maxWidth: 64, maxHeight: 64, border: '1px solid #ccc' }}
            />
          </div>
        )}
      </div>
    </label>
  );
}
