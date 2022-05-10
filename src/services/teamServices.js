import { SYSTEM_ERROR } from "../constants/apiEndpoints";
import axios from 'axios'
import { GET_ALL_TEAM_MEMBERS } from "../constants/apiEndpoints";
import { API_TOKEN } from "../config/api";

/**
 * Function to fetch all the team members.
*/
export const getAllTeamMembers = () => {
  console.log("teamService > getAllTeamMembers called...");
  return new Promise((resolve, reject) => {
    try {
      // do an SDK, DB call or API endpoint axios call here and return the promise.
      axios
        .get(GET_ALL_TEAM_MEMBERS, {
          headers: {
            Authorization: `Bearer ` + API_TOKEN
          }
        })
        .then((res) => {
          console.log("getAllTeamMembers > axios res=", res);
          resolve(res.data);
        })
        .catch((err) => {
          console.log("getAllTeamMembers > axios err=", err);
          reject("Error in getAllTeamMembers axios!");
        });
    } catch (error) {
      console.error("in userServices > getAllTeamMembers, Err===", error);
      reject(SYSTEM_ERROR);
    }
  });
};