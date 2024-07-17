import axios from "axios";

const baseURL = "http://localhost:8000";

const handleButton1 = () => {
  axios.get(baseURL + "/button1").then((response: any) => {
    const { data } = response;
    return data;
  });
};
const handleButton2 = (color: string) => {
  axios
    .post(baseURL + "/button1", { currentColor: color })
    .then((response: any) => {
      const { data } = response;
      return data;
    });
};

module.exports = { handleButton1, handleButton2 };
