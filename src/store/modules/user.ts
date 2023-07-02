import type { News } from '@/model/news'

interface State {
  selectedNews: News
}

const state = (): State => {
  return {
    selectedNews: {} as News
  }
}

const getters = {

}

const mutations = {
    updateSelectedNews(state: State, news: News) {
        state.selectedNews = news;
    }
  }

export default {
    nsamespaced: true,
    state,
    getters,
    mutations
}