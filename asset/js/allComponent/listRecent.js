import './itemRecent.js';

class ListRecent extends HTMLElement {
    set dataListRecent(dataListRecent) {
        this._dataListRecent = dataListRecent;
        this.render();
    }

    render(){
        this._dataListRecent.forEach((dataItemRecent) => {
            const itemRecent = document.createElement("item-recent");
            itemRecent.dataItemRecent = dataItemRecent;
            this.appendChild(itemRecent);
        });
    }
}

customElements.define("list-recent", ListRecent);