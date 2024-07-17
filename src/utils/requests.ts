import axios from "axios";

const baseURL = "http://localhost:8000";

export function handleNumberRequest () {
  axios.get(baseURL + "/button1").then((response: any) => {
    const { data } = response;
    return data;
  });
};
export function handleColorRequest (color: string) {
  axios
    .post(baseURL + "/button1", { currentColor: color })
    .then((response: any) => {
      const { data } = response;
      return data;
    });
};
