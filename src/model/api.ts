import type { News } from "./news"

export interface NewsResponse {
    status: string
    totalResults: number
    articles: News[]
}