class ItemRecent extends HTMLElement{
    set dataItemRecent (dataItemRecent) {
        this._dataItemRecent = dataItemRecent;
        this.render();
    }

    render() {
        this.innerHTML = `
        <figure>
            <img src="${this._dataItemRecent.src}">
        </figure>

        <div class="price">
            <p>${this._dataItemRecent.price }</p>
            <ul>
                <li><img src="asset/images/hotel-left-side-bed.png">${this._dataItemRecent.countBed}</li>
                <li><img src="asset/images/bathtup.png">${this._dataItemRecent.countBed}</li>
            </ul>
        </div>

        <div class="deskripsi">
            <h3>${this._dataItemRecent.nameHouse}</h3>
            <p>${this._dataItemRecent.locationHouse}</p>
        </div>
        `;
    }
}

customElements.define("item-recent", ItemRecent);
