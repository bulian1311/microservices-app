export const fetchProducts = jest.fn().mockResolvedValue({
  count: 1,
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
});

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

export const sendMessage = async (...args: any): Promise<void> => {
  await setTimeout(() => {}, 500);
};

export const sendCart = async (user: any, cart: any) => {
  await setTimeout(() => {}, 500);
};
