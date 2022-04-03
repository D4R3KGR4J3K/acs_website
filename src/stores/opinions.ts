import { defineStore } from 'pinia';

export const useOpinionsStore = defineStore('opinions', {
  state: () => {
    return {
      totalPages: 2,
      nowPage: 1,
      totalItems: 3,
      showOpinions: [
        {
          author: 'Adam Mirek',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos repellat eligendi est, laborum reic',
          stars: 5,
        },
      ],
      opinions: [
        {
          author: 'Adam Mirek',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos repellat eligendi est, laborum reic',
          stars: 5,
        },
      ],
    };
  },
  actions: {
    databaseConnect() {
      this.opinions = [
        {
          author: 'Adam Mer',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos repellat eligendi est, laborum reic',
          stars: 5,
        },
        {
          author: 'Adam Mder',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos repellat eligendi est, laborum reic',
          stars: 2,
        },
        {
          author: 'Adam Mirek',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos repellat eligendi est, laborum reic',
          stars: 4,
        },
      ];
      this.showOpinions = [
        {
          author: 'Adam Mer',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos repellat eligendi est, laborum reic',
          stars: 5,
        },
        {
          author: 'Adam Mder',
          text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos repellat eligendi est, laborum reic',
          stars: 2,
        },
      ];
    },
    nextPage(number: number) {
      const newValue = this.nowPage + number;
      if (newValue <= 0 || newValue > this.totalPages) return;
      this.nowPage += number;

      if (this.nowPage == this.totalPages) {
        const numberToShow = this.totalPages * 2 - this.totalItems;
        if (numberToShow == 1) {
          this.showOpinions = [this.opinions[this.totalItems - 1]];
          return;
        }
      }

      this.showOpinions = [
        this.opinions[this.nowPage * 2 - 2],
        this.opinions[this.nowPage * 2 - 1],
      ];
    },
  },
});
