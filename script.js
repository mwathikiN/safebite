// Ensure DOM is fully loaded before attaching any listeners
document.addEventListener('DOMContentLoaded', () => {

  // -------------------- Scan Page Logic --------------------
  const uploadBtn = document.getElementById('uploadBtn');
  const continueBtn = document.getElementById('continueBtn');
  const fileInput = document.getElementById('fileInput');
  const uploadCard = document.getElementById('uploadCard');
  const resultsCard = document.getElementById('resultsCard');

  // Make file input clickable via custom button
  if(uploadBtn && fileInput) {
    uploadBtn.addEventListener('click', () => {
      fileInput.click();
    });
  }

  // Show selected file name (optional)
  if(fileInput) {
    fileInput.addEventListener('change', () => {
      if(fileInput.files.length > 0) {
        uploadBtn.textContent = `Selected: ${fileInput.files[0].name}`;
      }
    });
  }

  // Handle continue / scan
  if(continueBtn && fileInput && uploadCard && resultsCard) {
    continueBtn.addEventListener('click', () => {
      if(!fileInput.files.length) {
        alert("Please upload or take a photo first!");
        return;
      }

      // Show processing animation
      uploadCard.style.opacity = 0.5;
      continueBtn.textContent = "Analyzing...";
      continueBtn.disabled = true;

      // Optional: animate confidence and icons while “processing”
      const safeCircle = resultsCard.querySelector('.circle-glow');
      const cautionTriangle = resultsCard.querySelector('.triangle-glow');

      if(safeCircle) safeCircle.style.animation = 'pulse 1.5s infinite alternate';
      if(cautionTriangle) cautionTriangle.style.animation = 'pulse 1.5s infinite alternate';

      // Simulate backend processing
      setTimeout(() => {
        uploadCard.style.display = 'none';
        resultsCard.style.display = 'flex';
        continueBtn.textContent = "Scan Now"; // reset button
        continueBtn.disabled = false;
      }, 1500); // 1.5s delay
    });
  }

  // -------------------- Homepage Scan Button Only Fix --------------------
  const scanNowBtn = document.getElementById('scanNowBtn');
  if(scanNowBtn) {
    scanNowBtn.addEventListener('click', () => {
      window.location.href = 'scan.html';
    });
  }

});
  
// -------------------- Optional Pulsing Animation for Neon Effect --------------------
const style = document.createElement('style');
style.innerHTML = `
@keyframes pulse {
  0% { transform: scale(1); box-shadow: 0 0 10px currentColor; }
  50% { transform: scale(1.05); box-shadow: 0 0 25px currentColor; }
  100% { transform: scale(1); box-shadow: 0 0 10px currentColor; }
}`;
document.head.appendChild(style);
