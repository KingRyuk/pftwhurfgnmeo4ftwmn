// Utility to copy text to clipboard
export function copyText(text) {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text);
  } else {
    // fallback
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    return Promise.resolve();
  }
}
