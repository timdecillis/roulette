import axios from "axios";

const baseURL = "http://localhost:8000";

export async function handleNumberRequest() {
  const response = await axios.get(baseURL + "/button1/");
  const { data } = response;
  return data;
}
export async function handleColorRequest(color: string) {
  const response = await axios.post(baseURL + "/button2/", {
    currentColor: color,
  });
  const { data } = response;
  return data;
}
