import { SYSTEM_ERROR } from "../constants/apiEndpoints";
import axios from 'axios'
import { GET_HEADING } from "../constants/apiEndpoints";
import { API_TOKEN } from "../config/api";

/**
 * Function to fetch all the team members.
*/
export const getHeading = () => {
  return new Promise((resolve, reject) => {
    try {
      // do an SDK, DB call or API endpoint axios call here and return the promise.
      axios
        .get(GET_HEADING, {
          headers: {
            Authorization: `Bearer ` + API_TOKEN
          }
        })
        .then((res) => {
          console.log("getHeading > axios res=", res);
          resolve(res.data);
        })
        .catch((err) => {
          console.log("getHeading > axios err=", err);
          reject("Error in getHeading axios!");
        });
    } catch (error) {
      console.error("in userServices > getHeading, Err===", error);
      reject(SYSTEM_ERROR);
    }
  });
};