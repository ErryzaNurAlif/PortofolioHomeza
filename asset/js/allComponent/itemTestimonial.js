class ItemTestimonial extends HTMLElement{
    set dataItemTestimonial (dataItemTestimonial){
        this._dataItemTestimonial = dataItemTestimonial;
        this.render();
    }

    render(){
        this.innerHTML = `
        <figure>
            <img src="${this._dataItemTestimonial.src}">
        </figure>

        <div class="desc-testi">
            <p>${this._dataItemTestimonial.deskripsi}</p>

            <h3>${this._dataItemTestimonial.nameTesti}</h3>

            <p>${this._dataItemTestimonial.nameProject}</p>
        </div>
        `;
    }
}

customElements.define("item-testi", ItemTestimonial);