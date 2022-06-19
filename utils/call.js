import axios from "axios";
import { getCookie } from "./cookies";

export const apiURL =
  process.env.NODE_ENV == "development"
    ? "https://mitiendaap.herokuapp.com"
    : "https://mitiendaap.herokuapp.com";


    //https://block.loca.lt/v1
    //https://sistema-blockchaim.herokuapp.com/v1
    // https://api.quantiumtech.com.co/v1

export const certGenURL =
  process.env.NODE_ENV == "development"
    ? "https://certificate.loca.lt"
    : "https://certificate.loca.lt";

function header(method, url, data, head, files) {
  const options = {
    method,
  };

  const urlComplete = false;

  if (urlComplete) {
    options.url = `${url}`;
  } else {
    options.url = `${apiURL}${url}`;
  }

  if (data !== null) {
    if (files === 0) {
      options.data = JSON.stringify(data);
    } else {
      options.data = data;
    }
  }

  options.headers = {
    "Content-Type": files !== 0 ? "multipart/form-data" : "application/json",
  };

  if (head !== 0) {
    options.headers = {
      ssid: `${head === 1 ? getCookie("ssid") : head}`,
      "Content-Type": files !== 0 ? "multipart/form-data" : "application/json",
    };
  }

  return options;
}

function Call(method = "GET", url, data = null, head = 0, files = 0) {
  return new Promise((resolve, reject) => {
    try {
      axios(header(method, url, data, head, files))
        .then((success) => {
          resolve(success.data);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
}

export default Call;
