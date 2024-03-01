class Profile extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		return ['name', 'type', 'height', 'image'];
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(propName, oldValue, newValue) {
		this[propName] = newValue;
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
    <div>
    <h1>${this.name}</h1>
    <img src="${this.image}" alt="Pudin">
    <p>${this.type}</p>
    <p>${this.height}</p>
    </div>`;
	}
}
customElements.define('profile-pokemon', Profile);
export default Profile;
