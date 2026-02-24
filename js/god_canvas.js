document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById('god_canvas');
  const ctx = canvas.getContext('2d');

  const width = canvas.width;
  const height = canvas.height;
  const imageData = ctx.createImageData(width, height);
  const data = imageData.data;

  const chunkSize = 65536;
  for (let i = 0; i < data.length; i += chunkSize) {
    const end = Math.min(i + chunkSize, data.length);
    const chunk = new Uint8Array(end - i);
    window.crypto.getRandomValues(chunk);
    for (let j = i; j < end; j += 4) {
      data[j]     = chunk[j - i];
      data[j + 1] = chunk[j - i + 1];
      data[j + 2] = chunk[j - i + 2];
      data[j + 3] = 255;
    }
  }

  ctx.putImageData(imageData, 0, 0);
});
