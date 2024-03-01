import * as components from './components/indexPadre.js';
import { dataCards } from './data/data.js';

class AppContainer extends HTMLElement {
	cards = [];
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });

		data.forEach((element) => {
			const card = this.ownerDocument.createElement('profile-pokemon');
			card.setAttribute('name', element.name);
			card.setAttribute('type', element.type);
			card.setAttribute('height', element.height);
			card.setAttribute('image', element.image);
			this.cards.push(card);
		});
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
		<profile-pokemon message="prueba"></profile-pokemon>
		`;
		this.cardPokemon.forEach((cardFinal) => {
			this.shadowRoot.appendChild(cardFinal);
		});
	}
}

customElements.define('app-container', AppContainer);
