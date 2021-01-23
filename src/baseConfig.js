let apiConfig = {};
/**
 *                        协议                   主机
*/
const domain = window.location.protocol + "//" + window.location.host;
if (process.env.NODE_ENV == 'development') {
  apiConfig = {
    api_url: 'http://103.126.126.119:8002/phjr', //接口地址
    upload_path: 'http://103.126.126.119:8002/phjr', //后台上传图片地址
    download_path: 'http://103.126.126.119:8002/phjr', //后台下载图片地址
    app_id: '9cc5700c-8650-414c-843c-974bd4fecc56',//iCity的appId
    redirect_uri: 'http://103.126.126.119:8002/phjr/tyshop/#/',//授权成功后的回调地址
    fi_url: 'http://103.126.126.119:8002/phjr/ficonsole/',
    op_url: 'http://103.126.126.119:8002/phjr/opconsole/',
    hdn_url: 'http://221.204.12.184/phjr/eis/publicrs/quota/openbanknoinfo',
    workingCapitalPolicyId:'223479029509656576'  //应急周转资金政策ID
  }
} else if (process.env.NODE_ENV == 'production' && process.env.VUE_APP_SERVER_ENV == 'test') {
  // 我们测试
  apiConfig = {
    api_url: domain + "/phjr", //接口地址
    upload_path: domain + "/phjr", //后台上传图片地址
    download_path: domain + "/phjr", //后台下载图片地址
    app_id: '9cc5700c-8650-414c-843c-974bd4fecc56',//iCity的appId
    redirect_uri: domain + '/phjr/tyshop/#/',//授权成功后的回调地址
    fi_url: domain + '/phjr/ficonsole/',
    op_url: domain + '/phjr/opconsole/',
    hdn_url: domain + '/phjr/eis/publicrs/quota/openbanknoinfo',
    workingCapitalPolicyId:'223479029509656576'  //应急周转资金政策ID
  }
} else if (process.env.NODE_ENV == 'production' && process.env.VUE_APP_SERVER_ENV == 'ty-test') {
  // 山西测试
  apiConfig = {
    api_url: domain + "/phjr", //接口地址
    upload_path: domain + "/phjr", //后台上传图片地址
    download_path: domain + "/phjr", //后台下载图片地址
    app_id: '1f62c64e-f89a-4c01-b20b-4c01f7b3ad94',//iCity的appId
    redirect_uri: domain + '/phjr/shop/#/',//授权成功后的回调地址
    fi_url: domain + '/phjr/ficonsole/',
    op_url: domain + '/phjr/opconsole/',
    hdn_url: domain + '/phjr/eis/publicrs/quota/openbanknoinfo',
    workingCapitalPolicyId:'226708437036175360'  //应急周转资金政策ID
  }
} else if (process.env.NODE_ENV == 'production' && process.env.VUE_APP_SERVER_ENV == 'ty-prod') {
  // 山西正式
  apiConfig = {
    api_url: domain + "/phjr", //接口地址
    upload_path: domain + "/phjr", //后台上传图片地址
    download_path: domain + "/phjr", //后台下载图片地址
    app_id: '1f62c64e-f89a-4c01-b20b-4c01f7b3ad94',//iCity的appId
    redirect_uri: domain + '/phjr/shop/#/',//授权成功后的回调地址
    fi_url: domain + '/phjr/ficonsole/',
    op_url: domain + '/phjr/opconsole/',
    hdn_url: domain + '/phjr/eis/publicrs/quota/openbanknoinfo',
    workingCapitalPolicyId:'229709938814099456'  //应急周转资金政策ID
  }
}
export default apiConfig