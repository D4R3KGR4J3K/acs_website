import { defineStore } from 'pinia';

export const useArticleStore = defineStore('articles', {
  state: () => {
    return {
      articles: [
        {
          articleTitle: '',
          articleText: '',
          articleDate: '',
          articleAuthor: '',
        },
      ],
    };
  },
  actions: {
    databaseConnect() {
      this.articles = [
        {
          articleTitle: 'Nic wartoścowego',
          articleText:
            'Była sobie długa i mroźna zima! Nikt się tego nie spodziewał',
          articleDate: new Date(Date.now()).toDateString(),
          articleAuthor: 'Darek Araczewski',
        },
        {
          articleTitle: 'Nic wartoścowego Nie ma',
          articleText:
            'Była sobie długa i mroźna zima! Nikt się tego nie spodziewał',
          articleDate: new Date(Date.now() - 900).toDateString(),
          articleAuthor: 'Darek Araczews',
        },
      ];
    },
  },
});
