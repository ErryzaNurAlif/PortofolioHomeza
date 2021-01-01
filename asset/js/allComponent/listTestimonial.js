import './itemTestimonial.js';

class ListTestimonial extends HTMLElement {
    set dataListTestimonial(dataListTestimonial){
        this._dataListTestimonial = dataListTestimonial;
        this.render();
    }

    render(){
        this._dataListTestimonial.forEach((dataItemTestimonial) => {
            const itemTesti = document.createElement("item-testi");
            itemTesti.dataItemTestimonial = dataItemTestimonial;
            this.appendChild(itemTesti);
        });
    }
}

customElements.define("list-testi", ListTestimonial);