export default {
  name:"contact",
  api:{
    getContact:{
      url:"接口地址",
      method:"get",
      toast:true
      // 单个请求级别的钩子
      // hooks:{
      //   beforeReq(){},
      //   afterReqSuccess(body){body.xxx = "请求级别的处理";},
      //   afterReqFail(){},
      // }
    },
 
  },
  // baseUrl:"http://localhost:9000/api",
  // timeout:5000,
  //模块级别的钩子
  // hooks:{
  //   beforeReq(){},
  //   afterReqSuccess(data){data.xxx="模块级别的处理";},
  //   afterReqFail(){},
  // }
}
