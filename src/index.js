const ulCardsEl = document.querySelector(".cards");

const pokemon = window.data[0];
console.log(pokemon);

const liCardEl = document.createElement("li");
liCardEl.setAttribute("class", "card");
const h2CardTitleEl = document.createElement("h2");
h2CardTitleEl.innerText = pokemon.name;
h2CardTitleEl.setAttribute("class", "card--title");
liCardEl.append(h2CardTitleEl);

const imgCardEl = document.createElement("img");
imgCardEl.setAttribute("width", "256");
imgCardEl.setAttribute("class", "card--img");
imgCardEl.src = pokemon.sprites.front_default;
liCardEl.append(imgCardEl);

const ulCardEl = document.createElement("ul");
ulCardEl.setAttribute("class", "card--text");

const statsArray = ["HP", "ATTACK", "DEFENSE", "SPECIAL-ATTACK", "SPECIAL-DEFENSE", "SPEED"];

for (let i = 0; i < statsArray.length; i++) {
	const statName = statsArray[i];
	const statValue = pokemon.stats[i].base_stat;
	const liEl = document.createElement("li");
	liEl.innerText = `${statName}: ${statValue}`;
	ulCardEl.append(liEl);
}

liCardEl.append(ulCardEl);

ulCardsEl.append(liCardEl);
