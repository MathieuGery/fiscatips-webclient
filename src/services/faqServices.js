import { SYSTEM_ERROR } from "../constants/apiEndpoints";
import axios from 'axios'
import { GET_ALL_FAQ } from "../constants/apiEndpoints";

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
            Authorization: `Bearer 6621d2372306b3d11d92857f724c3ee37faaa28dbeec6953e844bab1686d3f6f8423469774dce4f07ad64145ff927e1cb82a6dad0b708ac9d627b3b436a5b7bf8becbed135f4d58d062548ccbabda691ef5fc9b3fdfd01caf599b1e296949554a107c7fa5cd3df611b20eda853fad11bc60f2447c0f728a9f189345b0ec51505`
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