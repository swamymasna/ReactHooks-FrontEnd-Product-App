import axios from 'axios'

const PRODUCT_API_BASE_URI = "http://localhost:9090/products";

class ProductService{

    getAllProducts(){
        return axios.get(PRODUCT_API_BASE_URI + '/list');
    }

    addProduct(product){
        return axios.post(PRODUCT_API_BASE_URI + '/save' , product);
    }

    deleteProduct(prodId){
        return axios.delete(PRODUCT_API_BASE_URI + '/delete/' + prodId);
    }

    getOneProduct(id){
        return axios.get(PRODUCT_API_BASE_URI + '/edit/' + id);
    }

    updateProduct(prodId , product){
        return axios.put(PRODUCT_API_BASE_URI + '/update/' + prodId , product );
    }
}
export default new ProductService();