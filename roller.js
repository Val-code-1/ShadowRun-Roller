let roll = document.getElementById("Roll");
roll.addEventListener("click", () => {
  let Dice = [];
  let amount = document.getElementById("dice").value;
  console.log("amount" + amount);
  for (let i = 0; i < amount; i++) {
    let random = Math.random();
    let d6 = RollD6(random);
    console.log("random" + random);
    Dice.push(d6);
  }
  let playerResults = document.getElementById("playerResults");
  // playerResults.textContent = Dice
  playerResults.style.display = "flex";
  playerResults.style.alignItems = "baseline";
  playerResults.style.flexDirection = "column";
  let Row = document.createElement("span");
  Row.style.display = "flex";
  Row.style.alignItems = "baseline";
  Row.style.flexDirection = "row";
  Row.style.margin = "0px";
  Dice.forEach((die) => {
    let viewable = document.createElement("p");
    viewable.style.display = "flex";
    viewable.style.margin = "0px";
    viewable.style.fontSize = "31px";
    if (die < 2) {
      viewable.style.color = "red";
      viewable.style.fontSize = "36px";
    }
    if (die > 4) {
      viewable.style.fontWeight = "bolder";
      viewable.style.color = "green";
      viewable.style.fontSize = "46px";
    }

    viewable.textContent = die;
    Row.appendChild(viewable);
  });
  playerResults.appendChild(Row);
  console.log("Dice", Dice);
});
function RollD6(fraction) {
  return Math.floor(fraction * 6) + 1;
}
