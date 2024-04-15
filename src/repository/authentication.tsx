import { http } from "../utils/http";

const url = {
  login: () => "/authentication/login",
  register: () => "/authentication/register",
};

const api = {
  login({ email, password }: { email: string; password: string }) {
    return http.post(url.login()).send({
      email,
      password,
    });
  },
  register({
    email,
    password,
    name,
  }: {
    email: string;
    password: string;
    name: string;
  }) {
    return http.post(url.register()).send({
      email,
      password,
      name,
    });
  },
};

export const authenticationRepository = {
  url,
  api,
};
