import axios from 'axios'
import service from './'

let instance = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 1000
})

const Http = {}; //包裹请求方法的容器

// 对service进行循环遍历输出不同的请求方法，也就是遍历 CONTACT_API
// 下边会将  请求格式/参数 进行统一为 params,isFormData,config
for (let key in service) {
    let api = service[key]  //api包含url method 

    Http[key] = async function(
        // 方法接受的参数

        // 参数1 --- 请求参数params
        // get请求的话，参数放到URL上
        // post、put、patch请求的话，对应的参数是data
        // delete请求的话，默认放在URL上（当然也可以放在data）
        params,
    ){
        
    }
}