import { SYSTEM_ERROR } from "../constants/apiEndpoints";
import axios from 'axios'
import { POST_CONTACT } from "../constants/apiEndpoints";

const login = async () => {
  const { data } = await axios.post('https://strapi.gery.me/api/auth/local', {
    identifier: 'frontweb@fiscatips.fr',
    password: process.env.REACT_APP_API_PWD
  });
  return (data.jwt)
}

export const postContact = (first_name, last_name, email, phone, message) => {
  return new Promise((resolve, reject) => {
    try {
      // do an SDK, DB call or API endpoint axios call here and return the promise.
      axios
        .post(POST_CONTACT, {
          data: {
              "first_name": first_name,
              "last_name": last_name,
              "email": email,
              "message": message,
              "phone": phone
          },
          headers: {
            Authorization: `Bearer ` + login()
          }
        })
        .then((res) => {
          console.log("postContact > axios res=", res);
          resolve(res.data);
        })
        .catch((err) => {
          console.log("postContact > axios err=", err);
          reject("Error in postContact axios!");
        });
    } catch (error) {
      console.error("in userServices > postContact, Err===", error);
      reject(SYSTEM_ERROR);
    }
  });
};
