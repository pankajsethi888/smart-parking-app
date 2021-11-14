const DrawRect = (detections, ctx) => {
  detections.forEach((prediction) => {
    // extract prediction result
    const [x, y, width, height] = prediction["bbox"];
    const text = prediction["class"];

    const color = "red";
    ctx.align = "center";
    ctx.strokeStyle = color;
    ctx.font = "22px Arial";
    ctx.weight = "bold";
    ctx.fillStyle = color;

    // Draw Rectangle on canvas
    ctx.beginPath();
    ctx.fillText(text, x, y);
    ctx.rect(x, y, width, height);
    ctx.stroke();
  });
};

export default DrawRect;
