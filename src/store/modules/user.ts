import type { News } from '@/model/news'

interface State {
  selectedNews: News
  visitedHeadlines: Array<String>
}

const state = (): State => {
  return {
    selectedNews: {} as News,
    visitedHeadlines: []
  }
}

const mutations = {
  updateSelectedNews(state: State, news: News) {
    if (!state.visitedHeadlines.includes(news.title)) {
      state.visitedHeadlines.push(news.title)
    }

    state.selectedNews = news
  }
}

export default {
  nsamespaced: true,
  state,
  mutations
}
