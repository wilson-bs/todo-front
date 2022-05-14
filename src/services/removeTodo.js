import axios from "axios";
import { apiUrl } from "../config";

export default function removeTodo(id) {
  axios.delete(`${apiUrl}${id}`
  ).catch((error) => console.error(error));
}