import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "http://localhost:4000/";

axios.interceptors.response.use(undefined, (error) => {
  const { status } = error.response;
  if (status === 404) {
    console.error("Ошибка 404.");
  }

  if (status === 500) {
    console.error("Ошибка 500.");
  }

  if (error.message === "Network Error") {
    console.error("Ошибка сети.");
  }

  throw error.response;
});

export const auth = {
  login: async (login: string, password: string): Promise<any> => {
    const res: AxiosResponse = await axios.post("/auth/signin", {
      login,
      password,
    });
    return res.data;
  },
};

export const mailer = {
  sendMessage: async (data: any): Promise<void> => {
    await axios.post("/mailer/message", { user: data });
  },
};
