import Axios from 'axios'

export const getProducts = async (price, category) => {
    try {
        let api_url = "https://apis.aspenku.com/api/v1/product?"
        if(category) {
            api_url += `subCategory=${category}`
        }
        let reqApi = await Axios.get(api_url, {
            headers: {
                Authorization: "Basic QXNwZW5rdTpBc3Blbmt1?"
            }
        })
        let products = reqApi.data.data.rows
        if (price) {
            let minPrice = price.split('-')[0]
            let maxPrice = price.split('-')[1]
        
            products = products.filter(val => {
                let sell_price = parseInt((val.sell_price).split('.')[0])
                return minPrice <= sell_price && sell_price <= maxPrice
            })
        }
        
        return products
    } catch (error) {
        return []
    }
}