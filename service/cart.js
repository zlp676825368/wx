import request from "request.js"

 const getCartGoods = () => {
    return request({
      url: "/getCategoryGoods"
    });
  };

module.exports = {
  getCartGoods
}