import { defineStore } from 'pinia';

// TODO: articlesName -> MAX 50 resultatów

export const useArticleStore = defineStore('articles', {
  state: () => {
    return {
      articleTitle: 'Nic wartoścowego Nie ma',
      articleText:
        'Była sobie długa i mroźna zima! Nikt się tego nie spodziewał',
      articleDate: new Date(Date.now()).toDateString(),
      articleAuthor: 'Darek Araczews',
      articleSearchResult: '',
      articlesName: [
        {
          articleTitle: 'Nic wartoścowego',
        },
        {
          articleTitle: 'Nic wartoścowego Nie ma',
        },
      ],
    };
  },
  actions: {
    databaseConnect() {
      this.articlesName = [
        {
          articleTitle: 'Nic wartoścowego',
        },
        {
          articleTitle: 'Nic wartoścowego Nie ma',
        },
      ];
    },
  },
});
