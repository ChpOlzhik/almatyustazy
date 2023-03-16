import axios, { AxiosResponse } from "axios";
import { API_URL } from "./AuthService";
import dayjs, { Dayjs } from "dayjs";

class TournamentService {
  async updatePhoto(formData: FormData): Promise<AxiosResponse<any>> {
    return axios.post(API_URL + "/profile", formData, {
      headers: {
        Authorization:
          "Bearer " +
          JSON.parse(localStorage.getItem("user") || "{}").authenticationToken,
      },
    });
  }
  async updateProfile(
    firstName: string,
    lastName: string,
    middleName: string,
    birthDate: Dayjs,
    group: string,
    subject: string
  ): Promise<AxiosResponse<any>> {
    return axios({
      method: "put",
      url: API_URL + "/profile/uploadProfileInfo",
      headers: {
        Authorization:
          "Bearer " +
          JSON.parse(localStorage.getItem("user") || "{}").authenticationToken,
      },
      data: {
        firstName,
        lastName,
        middleName,
        birthDate,
        group,
        subject,
      },
    });
  }
}
export default new TournamentService();
