import { SYSTEM_ERROR } from "../constants/apiEndpoints";
import axios from 'axios'
import { GET_ALL_FAQ } from "../constants/apiEndpoints";
import { API_TOKEN } from "../config/api";

/**
 * Function to fetch all the team members.
*/
export const getAllFaqs = () => {
  console.log("faqService > getAllFaqs called...");
  return new Promise((resolve, reject) => {
    try {
      // do an SDK, DB call or API endpoint axios call here and return the promise.
      axios
        .get(GET_ALL_FAQ, {
          headers: {
            Authorization: `Bearer ` + API_TOKEN
          }
        })
        .then((res) => {
          console.log("getAllFaqs > axios res=", res);
          resolve(res.data);
        })
        .catch((err) => {
          console.log("getAllFaqs > axios err=", err);
          reject("Error in getAllFaqs axios!");
        });
    } catch (error) {
      console.error("in userServices > getAllFaqs, Err===", error);
      reject(SYSTEM_ERROR);
    }
  });
};