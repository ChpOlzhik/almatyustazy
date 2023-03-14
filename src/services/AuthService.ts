import axios from "axios";
import $api from "../http";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
import { API_URL } from "../http/index";

export type userType = {
  userName: "string";
  email: "string";
  firstName: "string";
  lastName: "string";
  middleName: "string";
  birthDate: "string";
  profilePhoto: "string";
  group: "string";
  subject: "string";
};
class AuthService {
  async login(
    username: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return axios
      .post(API_URL + "/auth/login", {
        username,
        password,
        Origin: "http://localhost:3000",
      })
      .then((response) => {
        if (response.data.authenticationToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
          window.location.href = "/profile";
        }
        return response.data;
      })
      .catch((error) => {
        return error;
      });
  }

  async register(
    username: string,
    password: string,
    email: string,
    middleName: string,
    firstName: string,
    lastName: string
  ): Promise<AxiosResponse<any>> {
    return axios.post(API_URL + "/auth/signup", {
      username,
      password,
      email,
      middleName,
      firstName,
      lastName,
    });
  }

  async logout() {
    window.location.href = "/login";
  }
  async getCurrentUser(): Promise<AxiosResponse<userType>> {
    return axios
      .get(API_URL + "/profile", {
        headers: {
          Authorization:
            "Bearer " +
            JSON.parse(localStorage.getItem("user") || "{}")
              .authenticationToken,
        },
      })
      .then((response) => {
        return response.data;
      });
  }
}

export default new AuthService();
