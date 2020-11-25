import axios, { AxiosResponse } from "axios";

type TUrlProps = {
  searchQuery: string;
  limit: number;
  orderBy: "RANDOM()" | "price" | "title" | "id";
  order: "ASC" | "DESC";
  offset: number;
};

type TProductResponse = {
  count: number;
  products: any[];
};

type TMessage = {
  name: string;
  phone: string;
  email: string;
  message: string;
  prefer: string;
  date: string;
  address: string;
};

axios.defaults.baseURL = "https://magmer-server.herokuapp.com/";

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

export const api = {
  fetchProducts: async ({
    limit,
    orderBy,
    order,
    offset,
    searchQuery,
  }: TUrlProps): Promise<TProductResponse> => {
    let urlOptions: string = `/products?limit=${limit}&orderBy=${orderBy}&offset=${offset}&order=${order}`;
    if (searchQuery) urlOptions += `&search=${searchQuery}`;

    const res: AxiosResponse = await axios.get(urlOptions);
    return res.data;
  },
  fetchCategories: async (): Promise<any[]> => {
    const res: AxiosResponse = await axios.get("/categories");
    return res.data;
  },
};

export const mailer = {
  sendMessage: async (user: TMessage): Promise<void> => {
    await axios.post("/mailer/message", { user });
  },

  sendCart: async (user: TMessage, cart: any) => {
    await axios.post("/mailer/cart", { user, cart });
  },
};
