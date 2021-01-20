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

export const fetchProducts = async ({
  limit,
  orderBy,
  order,
  offset,
  searchQuery,
}: TUrlProps): Promise<TProductResponse> => {
  await setTimeout(() => {}, 500);

  return {
    count: 0,
    products: [
      {
        id: 111,
        title: "Test product",
        description: "Test description",
        category: "test category",
        price: 123,
        url: "www",
        images: '["http://www."]',
        specifications: '{"111": "qqq"}',
        producer: "{}",
        tags: "test tag",
      },
    ],
  };
};

export const fetchCategories = jest.fn(
  async (): Promise<any[]> => {
    await setTimeout(() => {}, 500);
    return [
      {
        id: 1,
        name: "test",
      },
    ];
  }
);

export const sendMessage = async (user: TMessage): Promise<void> => {
  await setTimeout(() => {}, 500);
};

export const sendCart = async (user: any, cart: any) => {
  await setTimeout(() => {}, 500);
};
