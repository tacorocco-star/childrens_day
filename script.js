const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        letter.classList.add("open");
    }, 50);
});
