import { GEO } from "./../type";
import axios from "axios";

export const GeoDetail = (item) => ({
  type: GEO,
  payload: item,
});
axios.defaults.headers.post["Content-Type"] = "application/json";
export const GeoGet = () => {
  return async (dispatch) => {
    try {
      console.log("getting")
        const res = await axios.post("/ipaddress/userip");
        dispatch(GeoDetail(res.data));

        console.log({done:res.data});
    } catch (error) {
        console.log(error);
        
    }
 
  };
};
