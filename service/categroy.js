import request from "request.js"

const getCategory = () => {
  return request({ url: "/getCategory", method: "post" });
};

module.exports = {
  getCategory
}
