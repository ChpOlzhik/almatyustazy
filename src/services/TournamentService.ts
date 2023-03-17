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
    subject: string,
    category: number,
    isKazakhProficient: boolean,
    englishProficiency: boolean,
    pedagogicalExperienceCurrent: number,
    pedagogicalExperience: number
  ): Promise<AxiosResponse<any>> {
    return axios({
      method: "put",
      url: API_URL + "/profile/updateProfileInfo",
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
        category,
        isKazakhProficient,
        englishProficiency,
        pedagogicalExperienceCurrent,
        pedagogicalExperience,
      },
    });
  }
}
export default new TournamentService();
