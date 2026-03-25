import { LoginPayload, SignupPayload } from "./auth.type";
import * as api from "./auth.api";
import { loginSchema, signupSchema } from "./auth.validation";

export const authSevice = {
  async login(payload: LoginPayload) {
    loginSchema.parse(payload);
    return api.authApi.login(payload);
  },

  async signup(payload: SignupPayload) {
    signupSchema.parse(payload);
    return api.authApi.signup(payload);
  },
};
