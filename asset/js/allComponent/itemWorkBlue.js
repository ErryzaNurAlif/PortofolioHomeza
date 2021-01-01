class itemWorkBlue extends HTMLElement{
    connectedCallback(){
        this.src = this.getAttribute("src") || null;
        this.heading = this.getAttribute("heading") || null;
        this.desc = this.getAttribute("desc") || null;

        this.render();
    }

    render(){
        this.innerHTML = `
        <figure>
            <img src="${this.src}">
        </figure>

        <h3>${this.heading}</h3>

        <p>${this.desc}</p>
    `;
    }

    attributeChangeCallback(name,oldValue,newValue){
        this[name] = newValue;
        this.render();
    }

    static get observeredAttributes(){
        return["src","heading","desc"];
    }
}

customElements.define("item-work-blue", itemWorkBlue);