const BAST_URL="http://192.168.1.3:3000";
module.exports=(options)=>{
  return new Promise((resolve,reject)=>{
    wx.request({
      url: BAST_URL+options.url,
      method: options.method || "get",
      data: options.data || {},
      success: resolve,
      fail: reject
    })
  });
}