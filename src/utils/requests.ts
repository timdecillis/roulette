import axios from "axios";

const baseURL = "http://localhost:8000";

export async function handleNumberRequest() {
  try {
    const response = await axios.get(baseURL + "/number/");
    const { data } = response;
    return data;
  } catch (error) {
    console.error(
      `The following network error occurred while making a request for a random number: ${error}`
    );
  }
}
export async function handleColorRequest(color: string) {
  try {
    const response = await axios.post(baseURL + "/color/", {
      currentColor: color,
    });
    const { data } = response;
    return data;
  } catch (error) {
    console.error(
      `The following network error occurred while making a request for a color: ${error}`
    );
  }
}
