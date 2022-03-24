import axios from "axios";
 const url = process.env.REACT_APP_BASEURL;


 export const generateKey = payload => {
    const URL = `${url}/auth`;
  
    return axios(URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json', // whatever you want
      },
      data: payload,
    })
      .then(response => response.data)
      .catch(error => {
        throw error.response.data.data.message;
        
      });
  };
  