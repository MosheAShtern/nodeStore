const Product = require('../models/product');

const getAllProducts = async (request, response) => {
        try{
            const products = await Product.findAll({
                where: {
                    isDeleted: 0
                },
                raw: true
            })
            response.render('products/allProducts', {products});
        }catch(e){
            // response.status('500')
        }
}


//  /product?id=20
const getProduct = async (request, response) => {
    const {id} = request.query;
    const productId = parseInt(id);
    let error = '';
    if(!Number.isNaN(productId)){
        const product = await Product.findOne({
            where: {
                id
            },
            raw: true
        })
        if(product){
            response.render('products/product', {product});
        }else{
            error = `Product with id #${id} was not found`;
        }
    }else{
        error = 'Invalid product id passed';
    }
    if(error){
        response.render('404', {error});
    }
    
}


module.exports = {
    getAllProducts,
    getProduct
}