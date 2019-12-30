import request from "request.js"

const getHomePageData=()=>{
  return request({ url: "/getHomePageContent", method:"post"});
};

module.exports={
  getHomePageData
}
