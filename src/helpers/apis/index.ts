const base = "http://localhost:3000";
const apis = {
  getOrderIn: base + "/api/getAllOrderIn",
  getProduct: base + "/api/getProduct?ProductID=",
  getOrderOut: base + "/api/getAllOrderOut",
  getAvailability: base + "/api/getAvailability",
};
export default apis;
