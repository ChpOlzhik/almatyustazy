import { axios, AxiosResponse } from "axios";
import { API_URL } from "../http/index";

class TournamentService {
  async updateProfile(formData: FormData): Promise<AxiosResponse<any>> {
    axios.post(API_URL + "/profile", formData, {
      headers: {
        Authorization:
          "Bearer " +
          JSON.parse(localStorage.getItem("user") || "{}").authenticationToken,
      },
    });
  }
}
