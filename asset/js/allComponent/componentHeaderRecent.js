class ComponentHeaderRecent extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `
            <div id="recent-top">
                <h3>Recent</h3>
                <h2>Recently Added Properties</h2>
            </div>

            <div id="find-bottom">
                <a href="">Find More Project
                    <img src="asset/images/Icon metro-arrow-right.png" alt="">
                </a>
            </div>
            `;
    }
}
customElements.define("component-header-recent", ComponentHeaderRecent);