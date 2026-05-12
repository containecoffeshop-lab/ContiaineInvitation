const voucherBtn =
  document.getElementById("voucherBtn");

const contentArea =
  document.getElementById("contentArea");

const instructionText =
  document.getElementById("instructionText");


voucherBtn.addEventListener("click", () => {

  // HIDE TEXT BEFORE CLICK
  instructionText.style.display = "none";

  // SHOW CONTENT
  contentArea.classList.add("content-show");

  // START CONFETTI
  startConfetti();

  // DISABLE BUTTON
  voucherBtn.disabled = true;

});


function startConfetti(){

  const container =
    document.getElementById("confetti-container");

  const colors = [
    "#ffffff",
    "#d9d9d9",
    "#f5f5f5",
    "#bfbfbf"
  ];

  for(let i = 0; i < 150; i++){

    const confetti =
      document.createElement("div");

    confetti.classList.add("confetti");

    confetti.style.left =
      Math.random() * 100 + "vw";

    confetti.style.top =
      "-20px";

    confetti.style.background =
      colors[Math.floor(Math.random() * colors.length)];

    confetti.style.width =
      (Math.random() * 10 + 6) + "px";

    confetti.style.height =
      (Math.random() * 14 + 8) + "px";

    confetti.style.animationDuration =
      (Math.random() * 2 + 2) + "s";

    confetti.style.opacity =
      Math.random();

    container.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 4000);

  }

}