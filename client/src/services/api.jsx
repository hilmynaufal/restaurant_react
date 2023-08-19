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

export const getAllMenu = async () => {
    const result = await axios.get(`${baseUrl}/food`)
    // console.log(result)
    return result.data
}

export const addOrder = async (id, table, listCart, date, total) => {

    const result = await axios.post(`${baseUrl}/order`, {
        id: id,
        table_no: table,
        listCart: listCart,
        date: date,
        total: total,
        chasier: '',
        status: "Not Payed"
    })
    return result.data
}

export const getAllOrder = async () => {
    const result = await axios.get(`${baseUrl}/order`)
    // console.log(result)
    return result.data
}

export const getListCartFromDb = async (id) => {
    const result = await axios.get(`${baseUrl}/order?id=${id}`)
    // console.log(result)
    return result.data
}

export const putPaymenToDb = async (status, orderId, chasier) => {
    const result = await axios.put(`${baseUrl}/order`, {
        orderId: orderId,
        status: status,
        chasier: chasier
    })
    // console.log(result)
    return result.data
}