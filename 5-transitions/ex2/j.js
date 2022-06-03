const balls = document.querySelectorAll(".balls");

balls.forEach((ball) =>
  ball.addEventListener("click", () => console.log("ball clicked"))
);
