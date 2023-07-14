import axios from 'axios'

const baseUrl = 'https://restaurant-api-iota.vercel.app'

export const login = async (email, password) => {
    console.log({email: email, password: password})
    const statusCode = await axios.post(`${baseUrl}/login`, {
        email: email,
        password: password
    })
    return statusCode.data
}

export const register = async (name, email, password) => {
    console.log({name: name, email: email, password: password})
    const result = await axios.post(`${baseUrl}/register`, {
        name: name,
        email: email,
        password: password
    })
    console.log(result)
    return result.data
}