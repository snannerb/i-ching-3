// Hexagram data: Array of 64 hexagrams, each with a title and line pattern (6 lines)
const hexagrams = [
  { title: "1. The Creative", lines: [1, 1, 1, 1, 1, 1] },
  { title: "2. The Receptive", lines: [0, 0, 0, 0, 0, 0] },
  { title: "3. Difficulty at the Beginning", lines: [1, 0, 0, 1, 0, 0] },
  { title: "4. Youthful Folly", lines: [0, 1, 0, 0, 1, 0] },
  // Add all 64 hexagrams here (shortened for brevity)
  // Example:
  { title: "5. Waiting", lines: [0, 1, 0, 1, 0, 1] },
  // ... Continue adding hexagrams
];

// Function to simulate coin throws and generate a hexagram
function generateHexagram() {
  const hexagram = [];
  for (let i = 0; i < 6; i++) {
  const line = Math.floor(Math.random() * 2); // 0 = yin, 1 = yang
  hexagram.push(line);
 }
  return hexagram;
}

// Function to map a hexagram to its corresponding hexagram data
function getHexagramData(hexagram) {
  const hexagramString = hexagram.join("");
  const foundHexagram = hexagrams.find((h) => h.lines.join("") === hexagramString);
  if (!foundHexagram) {
    return { title: "Unknown Hexagram", lines: hexagram };
  }
  return foundHexagram;
}

// Function to identify changing lines (yin to yang or yang to yin)
function getChangingLines(hexagram) {
  const changingLines = [];
  hexagram.forEach((line, index) => {
    if (Math.random() < 0.25) { // 25% chance for a line to change
      changingLines.push(index + 1); // Lines are 1-indexed
    }
  });
  return changingLines;
}

// Function to display the hexagram in the UI
function displayHexagram(hexagram, title, changingLines) {
  const container = document.getElementById("hexagram-container");
  const titleElement = document.getElementById("hexagram-title");
  const linesElement = document.getElementById("changing-lines");

  // Clear previous hexagram
  container.innerHTML = "";

  // Add lines to the container
  hexagram.forEach((line) => {
    const lineElement = document.createElement("div");
    lineElement.textContent = line === 1 ? "——————" : "——  ——"; // Yang or yin line
    container.appendChild(lineElement);
  });

  // Display title and changing lines
  titleElement.textContent = title;
  if (changingLines.length > 0) {
    linesElement.textContent = `Changing Lines: ${changingLines.join(", ")}`;
  } else {
    linesElement.textContent = "No changing lines.";
  }
}

// Event listener for the "Throw Coins" button
document.getElementById("throw-coins").addEventListener("click", () => {
  const hexagram = generateHexagram();
  const hexagramData = getHexagramData(hexagram);
  const changingLines = getChangingLines(hexagram);
  displayHexagram(hexagram, hexagramData.title, changingLines);
});