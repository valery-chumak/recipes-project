export interface Recipe {
  id: string;
  name: string;
  img: string;
  instructions: string;
  ingredients: string[];
  children: string[];
  versions: string[];
  createAt: string;
}
