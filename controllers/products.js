const Product = require('../models/product');

const getAllProducts = async (request, response) =>{
        try{
            const products = await Product.findAll({
                where: {
                    isDeleted: 0
                },
                raw: true
            })
            response.render('products/allProducts', {products});
        }catch(e){
            
        }
}


module.exports = {
    getAllProducts
}