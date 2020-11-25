export interface IFilters {
  searchQuery: string;
  orderBy: "RANDOM()" | "price" | "title" | "id";
  order: "ASC" | "DESC";
  limit: number;
  paginate: boolean;
}
