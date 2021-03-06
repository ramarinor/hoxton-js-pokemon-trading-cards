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

	//code for toggling the picture;
	let picture = 1;
	setInterval(function () {
		if (picture === 1) {
			imgCardEl.src = pokemon.sprites.other.dream_world.front_default;
			picture++;
		} else {
			imgCardEl.src = pokemon.sprites.other["official-artwork"].front_default;
			picture--;
		}
	}, 1000);

	return imgCardEl;
}

function createCardText(pokemon) {
	const ulCardEl = document.createElement("ul");
	ulCardEl.setAttribute("class", "card--text");
	ulCardEl.style.listStyle = "none";

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

function createCardTextGames(pokemon) {
	const ulCardEl = document.createElement("ul");
	ulCardEl.setAttribute("class", "card--text");
	ulCardEl.style.listStyle = "none";
	ulCardEl.innerText = "Appeared in:";

	const gamesAppeared = pokemon.game_indices.map(function (game) {
		return game.version.name;
	});
	for (const game of gamesAppeared) {
		const liEl = document.createElement("li");
		liEl.style.display = "inline-block";
		liEl.style.margin = "0.2rem ";
		liEl.innerText = `${game}`;
		ulCardEl.append(liEl);
	}
	return ulCardEl;
}

function createCard(pokemon) {
	const liCardEl = document.createElement("li");
	liCardEl.setAttribute("class", "card");
	liCardEl.append(createCardTitle(pokemon), createCardImage(pokemon), createCardText(pokemon), createCardTextGames(pokemon));
	ulCardsEl.append(liCardEl);
}

const ulCardsEl = document.querySelector(".cards");
ulCardsEl.style.listStyle = " none";
for (const pokemon of data) {
	createCard(pokemon);
}
