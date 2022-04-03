import { defineStore } from 'pinia';

export const useItemsStore = defineStore('items', {
  state: () => {
    return {
      items: [
        {
          title: 'template',
          img: '',
          price: 23.44,
          description: '',
          time: 2,
        },
      ],
      totalPages: 2,
      totalItems: 4,
      nowPage: 1,
    };
  },
  actions: {
    databaseConnect() {
      this.items = [
        {
          title: 'template',
          img: '',
          price: 23.44,
          description: '',
          time: 2,
        },
        {
          title: 'template',
          img: '',
          price: 23.44,
          description: '',
          time: 2,
        },
        {
          title: 'template',
          img: '',
          price: 23.44,
          description: '',
          time: 2,
        },
      ];
    },
    changeNowPage(number: number) {
      const newValue = this.nowPage + number;
      if (newValue <= 0 || newValue > this.totalPages) return;
      this.nowPage += number;
    },
  },
});
