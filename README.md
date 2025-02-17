# i ching 3

## About
This code was generated by [CodeCraftAI](https://codecraft.name)

**User requests:**
create an app to generate all 64 i ching hexagrams and changing line responses when user clicks "Throw coins" button. Use pixel font. Use grey background. Create app with only HTML, CSS, JavaScript. Demonstrate hexagram and changes with lines and titles of hexagram.

Check OUTPUT.md for the complete unaltered output.

## Project Plan
```
### Project Plan for I Ching Hexagram Generator App

---

#### **Project Overview**
The goal is to develop a web-based application that generates I Ching hexagrams and their changing lines using only HTML, CSS, and JavaScript. The app will feature a minimalist design with pixel font and grey background.

---

### **Main Tasks**

#### **1. Project Setup**
- **Task 1.1:** Create project folder structure.
  - `index.html`, `styles.css`, `script.js`
- **Task 1.2:** Link CSS and JavaScript files in the HTML file.

#### **2. HTML Structure**
- **Task 2.1:** Create a container for the hexagram display.
- **Task 2.2:** Add a "Throw Coins" button.
- **Task 2.3:** Add sections for displaying the hexagram title and changing lines.

#### **3. CSS Styling**
- **Task 3.1:** Set the background color to grey (`#808080`).
- **Task 3.2:** Implement pixel font using `@font-face` or Google Fonts (e.g., `Press Start 2P`).
- **Task 3.3:** Style the hexagram lines:
  - Solid lines for yang (`—`).
  - Dashed lines for yin (`-- --`).
- **Task 3.4:** Ensure responsiveness for different screen sizes.

#### **4. JavaScript Logic**
- **Task 4.1:** Simulate coin throws to generate random numbers (6 throws, one per hexagram line).
- **Task 4.2:** Map the results to one of the 64 hexagrams.
- **Task 4.3:** Identify and mark changing lines (yin to yang or yang to yin).
- **Task 4.4:** Update the UI to display the generated hexagram, its title, and changing lines.

#### **5. Testing**
- **Task 5.1:** Test the "Throw Coins" functionality to ensure random hexagram generation.
- **Task 5.2:** Verify that changing lines are correctly identified and displayed.
- **Task 5.3:** Test responsiveness and cross-browser compatibility.

#### **6. Finalization**
- **Task 6.1:** Clean up code and ensure it adheres to best practices.
- **Task 6.2:** Document the code for future maintenance.

---

### **Technical Considerations**

#### **HTML**
- Use semantic HTML elements (`<div>`, `<button>`, `<p>`).
- Ensure accessibility by adding appropriate ARIA attributes.

#### **CSS**
- Use `@font-face` or Google Fonts for pixel font.
- Apply `box-sizing: border-box` for consistent sizing.
- Use `flexbox` or `grid` for layout alignment.

#### **JavaScript**
- Use `Math.random()` to simulate coin throws.
- Store hexagram data (titles and line patterns) in an array or object.
- Use DOM manipulation to update the UI dynamically.

#### **Responsiveness**
- Use media queries to adjust layouts for smaller screens.
- Ensure the hexagram lines and text are readable on all devices.

#### **Performance**
- Optimize JavaScript for efficiency to handle random generation.
- Minimize CSS and JavaScript file sizes for faster loading.

---

### **Timeline**
1. **Day 1:** Project setup, HTML structure, and basic CSS styling.
2. **Day 2:** JavaScript logic for hexagram generation and changing lines.
3. **Day 3:** Testing and debugging.
4. **Day 4:** Finalization and documentation.

---

### **Deliverables**
1. A fully functional web app that generates I Ching hexagrams.
2. Clean, well-documented code.
3. Responsive design that works across devices.

---

Let me know if you need further details or assistance!
```
