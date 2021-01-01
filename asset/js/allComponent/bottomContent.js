class BottomContent extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
        <div id="learn-more">
            <a href="">Learn More</a>
        </div>
        <div id="video">
            <a href=""><img src="asset/images/Icon video.svg" alt=""></a>
        </div>
        `;
    }
}

customElements.define("bottom-content",BottomContent);