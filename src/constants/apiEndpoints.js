const BASE_URL = 'https://strapi.gery.me/api';
//const BASE_URL = "https://localhost:3000";

export const GET_ALL_TEAM_MEMBERS = BASE_URL + '/team-members?populate=*';
export const GET_ALL_FAQ = BASE_URL + '/faqs?populate=*';
export const GET_HEADING = BASE_URL + '/heading';
export const POST_CONTACT = BASE_URL + '/contacts';
export const SYSTEM_ERROR = "System error. Please try again later!";
