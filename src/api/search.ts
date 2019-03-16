import axios from "axios";
import { API_KEY } from "../../config/kakao";

const API_ENDPOINT = "https://dapi.kakao.com/v3/search/book";

export type SearchBookSortBy = "accuracy" | "latest";
export type SearchBookType = "title" | "isbn" | "publisher" | "person";

export interface SearchBookParams {
  query: string;
  sort?: SearchBookSortBy;
  page?: number;
  size?: number;
  target?: SearchBookType;
}

export async function searchBooks({
  query,
  sort,
  page,
  size,
  target
}: SearchBookParams) {
  const result = await fetch(`${API_ENDPOINT}?query=${query}`, {
    headers: {
      Authorization: `KakaoAK ${API_KEY}`
    },
    method: "GET"
  });

  return result;
}
