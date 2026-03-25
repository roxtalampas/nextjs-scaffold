import { api } from "@/shared/libs/api.service";
import { LoginPayload, SignupPayload } from "./auth.type";

export const authApi = {
  login: (body: LoginPayload) => api.post("/login", body),
  signup: (body: SignupPayload) => api.post("/signup", body),
};
