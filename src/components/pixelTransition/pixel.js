function generatePixelPattern() {
    const svgSize = 400; // Larger canvas for more squares
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", svgSize);
    svg.setAttribute("height", svgSize);
    svg.setAttribute("viewBox", `0 0 ${svgSize} ${svgSize}`);
  
    // Generate 100 random squares
    for (let i = 0; i < 100; i++) {
      const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      rect.setAttribute("x", Math.random() * (svgSize - 12));
      rect.setAttribute("y", Math.random() * (svgSize - 12));
      rect.setAttribute("width", "12");
      rect.setAttribute("height", "12");
      rect.setAttribute("fill", "hsl(49, 100%, 98%)");
      rect.setAttribute("fill-opacity", "0.9");
      svg.appendChild(rect);
    }
  
    const svgString = new XMLSerializer().serializeToString(svg);
    return `url("data:image/svg+xml;base64,${btoa(svgString)}")`;
  }
  
  document.querySelector('.pixel-transition').style.backgroundImage = generatePixelPattern();