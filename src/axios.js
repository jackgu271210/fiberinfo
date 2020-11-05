import axios from 'axios'
import service from './'

let instance = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 1000
})

