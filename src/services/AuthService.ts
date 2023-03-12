import axios from "axios";
import $api from "../http";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../models/response/AuthResponse";
import { API_URL } from "../http/index";
class AuthService {
  async login(
    username: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return axios
      .post(API_URL + "/auth/login", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.authenticationToken) {
          localStorage.setItem("user", JSON.stringify(response.data));

          if (response.data.role.includes("ROLE_ADMIN")) {
            window.location.href = "/admin/profile";
          } else if (response.data.role.includes("ROLE_SECRETARY")) {
            window.location.href = "/secretary";
          } else if (response.data.role.includes("ROLE_COMMISSION")) {
            window.location.href = "/commission/dashboard";
          } else {
            window.location.href = "/student/dashboard";
          }
        }
        return response.data;
      })
      .catch((error) => {
        console.log(error);
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
    return $api.post("/auth/signup", {
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
  async getCurrentUser() {
    return JSON.parse(localStorage.getItem("user") || "{}");
  }
}

export default new AuthService();
