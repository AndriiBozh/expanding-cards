const expandBtn = document.querySelectorAll(".expand-card-btn");

expandBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    const cardBody = card.querySelector(".card-body");
    if (!cardBody.classList.contains("hide")) {
      cardBody.classList.add("hide");
      btn.innerHTML = "Show Card";
    } else if (cardBody.classList.contains("hide")) {
      cardBody.classList.remove("hide");
      btn.innerHTML = "Hide Card";
    }
  });
});
