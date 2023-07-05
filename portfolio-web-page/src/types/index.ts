export interface ITool {
  name: string;
  logo: string;
}

export interface ICategory {
  category: string;
  skills: ITool[];
}