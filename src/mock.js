import Mock from 'mockjs'

let goodsData = Mock.mock({
  "goodsData|100": [ //生成100条数据 数组
      {
          "id|+1": 1,//生成商品id，自增1
          "desc": "@ctitle(10)", //生成商品信息，长度为10个汉字
          "name": "@cname",//生成商品名 ， 都是中国人的名字
          "price|30-1000": 30, //随机生成商品价格 在30-1000之间
      }
  ]
})
// url为要拦截的请求地址  请求方式  请求数据（规则） （此处api会被mockjs拦截）
Mock.mock('/goods', 'get', ()=>{
  return goodsData
})


// let newsData = Mock.mock({
//   "newsData": [ //生成100条数据 数组
//       {
//           "id|+1": 1,//生成商品id，自增1
//           "desc": "@ctitle(10)", //生成商品信息，长度为10个汉字
//           "title": "@cname",//生成商品名 ， 都是中国人的名字
//           "author": "@cname",
//           "date": "@date" + "@time"
//       }
//   ]
// })
// // url为要拦截的请求地址  请求方式  请求数据（规则） （此处api会被mockjs拦截）
// Mock.mock('/news', 'get', ()=>{
//   return newsData
// })
