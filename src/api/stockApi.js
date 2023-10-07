import axios from 'axios'

const API_KEY = 'ckg0op1r01qknh1jkd40ckg0op1r01qknh1jkd4g'
const BASE_URL = 'https://finnhub.io//api/v1'

export const stockApi = {
    getStocks: async () => {
        const response = await axios.get(`${BASE_URL}/stock/symbol?exchange=US&token=${API_KEY}`)

        return response.data // массив акций
    }
}
