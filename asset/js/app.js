//Header
import './allComponent/contentHeader.js';

import './animation/showmenu.js';

//Header-bottom-content
import './allComponent/bottomContent.js';

import './animation/backgroundscrollheader.js';
//Recent
// import dataRecent from './dataArticle/datarecent.js';
// import './allComponent/listRecent.js';

//Component-header-recent
import './allComponent/componentHeaderRecent.js';

// const listRecent = document.querySelector("list-recent");
// listRecent.dataListRecent = dataRecent;

//Work white
import './allComponent/itemWorkWhite.js';

//Work Blue
import './allComponent/itemWorkBlue.js';

// //Testimonial 
// import dataTestimonial from './dataArticle/dataTestimonial.js';
// import './allComponent/listTestimonial.js';

// const listTestimonial = document.querySelector("list-testi");
// listTestimonial.dataListTestimonial = dataTestimonial;

//Recent dan Testimonial 
import main from './view/main.js';
document.addEventListener('DOMContentLoaded',main);
