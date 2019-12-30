import request from "request.js"

const getCategory = () => {
    return request({
      url: "/getCategory",
      method: "post"
    });
  },
  getgoodsByCategroyId = (categroyId) => {
    return request({
      url: "/getCategoryGoods"
    });
  };

module.exports = {
  getCategory,
  getgoodsByCategroyId
}