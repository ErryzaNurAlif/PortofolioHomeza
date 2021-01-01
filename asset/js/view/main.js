import DataSource from '../dataArticle/datasource.js';
import '../allComponent/listRecent.js';
import '../allComponent/listTestimonial.js';

const main = () => {
    //Recent
    const contentRecent = async() => {
        try{
            const resultRecent = await DataSource.dataSourceRecent();
            renderResultRecent(resultRecent);
        } catch(message){
            follbackResultRecent(message);
        }
    }

    const renderResultRecent = (resultRecent) => {
        const listRecent = document.querySelector("list-recent");
        listRecent.dataListRecent = resultRecent;
    }

    const follbackResultRecent = (message) =>{
        console.log(message);
    }
    contentRecent();

    //Testimonial

    const contentTestimonial = async() => {
        try{
            const resultTestimonial = await DataSource.dataSourceTestimonial();
            renderResultTestimonial(resultTestimonial);
        } catch(message){
            follbackResultTestimonial(message);
        }
    }

    const renderResultTestimonial = (resultTestimonial) => {
        const listTestimonial = document.querySelector("list-testi");
        listTestimonial.dataListTestimonial = resultTestimonial;
    }
    const follbackResultTestimonial = (message) => {
        console.log(message);
    }
    contentTestimonial();
}

export default main;

