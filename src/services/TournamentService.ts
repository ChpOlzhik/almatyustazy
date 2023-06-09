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
  async registerTournament(
    presentationUrl: string
  ): Promise<AxiosResponse<any>> {
    return axios.put(
      API_URL + "/student/team/update",
      {
        presentationUrl,
      },
      {
        headers: {
          Authorization:
            "Bearer " +
            JSON.parse(localStorage.getItem("user") || "{}")
              .authenticationToken,
        },
      }
    );
  }

  async sendForm(formData: FormData): Promise<AxiosResponse<any>> {
    return axios.post(
      API_URL + "/student/team/uploadAndSetApplicationForm",
      formData,
      {
        headers: {
          Authorization:
            "Bearer " +
            JSON.parse(localStorage.getItem("user") || "{}")
              .authenticationToken,
        },
      }
    );
  }
  async sendPresentation(formData: FormData): Promise<AxiosResponse<any>> {
    return axios.post(
      API_URL + "/student/team/uploadAndSetPresentation",
      formData,
      {
        headers: {
          Authorization:
            "Bearer " +
            JSON.parse(localStorage.getItem("user") || "{}")
              .authenticationToken,
        },
      }
    );
  }
  async getGroups(): Promise<AxiosResponse<any>> {
    return axios.get(API_URL + "/profile/groups", {
      headers: {
        Authorization:
          "Bearer " +
          JSON.parse(localStorage.getItem("user") || "{}").authenticationToken,
      },
    });
  }
  async getCategories(): Promise<AxiosResponse<any>> {
    return axios.get(API_URL + "/profile/categories", {
      headers: {
        Authorization:
          "Bearer " +
          JSON.parse(localStorage.getItem("user") || "{}").authenticationToken,
      },
    });
  }
  async getSubjects(): Promise<AxiosResponse<any>> {
    return axios.get(API_URL + "/profile/subjects", {
      headers: {
        Authorization:
          "Bearer " +
          JSON.parse(localStorage.getItem("user") || "{}").authenticationToken,
      },
    });
  }
}
export default new TournamentService();
