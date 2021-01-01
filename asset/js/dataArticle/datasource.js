import dataRecent from './datarecent.js';
import dataTestimonial from './dataTestimonial.js';

class DataSource{
    static dataSourceRecent(){
        return  new Promise((resolve,reject) => {
            if(dataRecent.length > 0){
                resolve(dataRecent);
            } else {
                reject('Tidak ada data recent');
            }
        })
    }

    static dataSourceTestimonial(){
        return new Promise((resolve,reject) => {
            if(dataTestimonial.length > 0) {
                resolve(dataTestimonial);
            } else {
                reject('Tidak ada data testimonial');
            }
        })
    }
}

export default DataSource;

