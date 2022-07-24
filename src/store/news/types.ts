export interface NewsInterface {
  id: number,
  userId: number,
  title: string,
  body: string,
}

export interface NewsStateInterface {
  news: NewsInterface[] | [],
  randomNewsPost: NewsInterface | null,
}
