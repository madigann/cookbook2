export interface IRecipe {
  id: number;
  name: string;
  description: string | null;
  rating: number;
  done: boolean | null;
  imageUrl: string | null;
}
