export interface IUser {
  name: string;
  phone: string;
  email: string;
  message: string;
  prefer: "phone" | "email";
}
