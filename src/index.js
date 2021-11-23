function createCardTitle(pokemon) {
	const h2CardTitleEl = document.createElement("h2");
	h2CardTitleEl.innerText = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
	h2CardTitleEl.setAttribute("class", "card--title");
	return h2CardTitleEl;
}
function createCardImage(pokemon) {
	const imgCardEl = document.createElement("img");
	imgCardEl.setAttribute("width", "256");
	imgCardEl.setAttribute("class", "card--img");
	imgCardEl.src = pokemon.sprites.other["official-artwork"].front_default;
	return imgCardEl;
}

function createCardText(pokemon) {
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
	return ulCardEl;
}

function createCard(pokemon) {
	const liCardEl = document.createElement("li");
	liCardEl.setAttribute("class", "card");
	liCardEl.append(createCardTitle(pokemon));
	liCardEl.append(createCardImage(pokemon));
	liCardEl.append(createCardText(pokemon));
	ulCardsEl.append(liCardEl);
}

const ulCardsEl = document.querySelector(".cards");

const pokemon = window.data[0];
console.log(pokemon);
for (const pokemon of data) {
	createCard(pokemon);
}
