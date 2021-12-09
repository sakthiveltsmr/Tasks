const flag = document.createElement("img");
flag.src =
  "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png";
flag.setAttribute("class", "flags");

const info = document.createElement("div");
info.setAttribute("class", "info");
info.innerHTML = `
  <h2>United State Of America</h2>
  <p><span class="side-heading">Population :</span> 323,947,000</p>
  <p><span class="side-heading">Region :</span> America</p>
  <p><span class="side-heading">Capitals :</span> Washington, D.C</p>
  `;

const container = document.createElement("div");
container.setAttribute("class", "container");
container.append(flag, info);
document.body.append(container);
