class itemWorkWhite extends HTMLElement {
    connectedCallback(){
        this.src = this.getAttribute("src") || null;
        this.title = this.getAttribute("title") || null;
        this.desc = this.getAttribute("desc") || null;
        
        this.render();
    }

    render(){
        this.innerHTML = `
        <figure>
            <img src="${this.src}">
        </figure>

        <h3>${this.title}</h3>

        <p>${this.desc}</p>
        `;
    }

    attributeChangeCallback(name,oldValue,newValue){
        this[name] = newValue;
        this.render();
    }

    static get observeredAttributes(){
        return ["src","title","desc"];
    }
}

customElements.define("item-work-white", itemWorkWhite);