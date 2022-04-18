<template>
  <div class="pagination">
    <!-- стрелка назад -->
    <a
      @click.prevent="goPage(page - 1)"
      class="pagination__item"
      :class="{'pagination__item_disable': isPageFirstActive}"
    >
      <div class="pagination__arrow pagination__arrow_left"></div>
    </a>
    <!-- первая страница -->
    <a
      @click.prevent="goPage(1)"
      class="pagination__item"
      :class="{ 'pagination__item_is-active': isPageFirstActive }"
    >
      1
    </a>
    <!-- три точки -->
    <a v-if="page - 2 > 0" class="pagination__item pagination__item_dots">
      ...
    </a>
    <a
      @click.prevent="goPage(pageIndex)"
      v-for="(pageIndex, i) in pagesRange"
      :key="i"
      class="pagination__item"
      :class="{ 'pagination__item_is-active': pageIndex === page }"
    >
      {{ pageIndex }}
    </a>
    <!-- три точки -->
    <a
      v-if="page + 2 < pagesTotal"
      class="pagination__item pagination__item_dots"
    >
      ...
    </a>
    <!-- последняя страница -->
    <a
      @click.prevent="goPage(pagesTotal)"
      class="pagination__item"
      :class="{ 'pagination__item_is-active': isPageLastActive }"
    >
      {{ pagesTotal }}
    </a>
    <!-- стрелка вперед -->
    <a
      @click.prevent="goPage(page + 1)"
      class="pagination__item"
      :class="{'pagination__item_disable': isPageLastActive}"
    >
      <div class="pagination__arrow pagination__arrow_right"></div>
    </a>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  computed: {
    isPageFirstActive() {
      return this.page === 1;
    },
    isPageLastActive() {
      return this.page === this.pagesTotal;
    },
    page() {
      return this.$store.state.posts.page;
    },
    postCount() {
      return this.$store.state.posts.postCount;
    },
    limit() {
      return this.$store.state.posts.limit;
    },
    pagesTotal() {
      return this.$store.getters.pagesTotal;
    },
    pagesRange() {
      /** Минимальное число страниц */
      const min = 1;
      /** Максимальное число страниц */
      const max = this.pagesTotal;
      /** Текущая страница */
      const current = this.page;
      /** Максимальное число отображаемых страниц не включая первую и последнюю */
      const count = 3;
      /** Если 0 или 0...1 */
      if (max === 0 || max === 1 || !max) return [];
      /** Диапазон возможных отображаемых страниц от-до не включая первую и последнюю */
      const range_min = min + 1;
      const range_max = max - 1;
      /**Если 0...2 и больше */
      let pages = [];
      /** Если текущая страница равна первой */
      if (current === min) {
        for (let i = range_min; i <= count + 1 && i <= range_max; i++) {
          pages.push(current + i - 1);
        }
      }
      /** Если текущая страница равна максимуму (последней) */
      if (current === max) {
        for (
          let i = range_max;
          i >= max - count && i >= range_min;
          i--
        ) {
          pages.push(current - (current - i));
        }
        pages = pages.reverse();
      }
      /** Если текущая страница лежит в пределе от минимума до максимума */
      if (current > min && current < max) {
        /** Пытаемся добавить страницу слева */
        if (current - 1 >= range_min) {
          pages.push(current - 1);
        }
        /** Пытаемся текущую страницу */
        if (current >= range_min && current <= range_max) {
          pages.push(current);
        }
        /** Пытаемся добавить страницу справа */
        if (current + 1 <= range_max) {
          pages.push(current + 1);
        }
        /** Если число добавленных страниц меньше максимально показываемых - добавляем слева или справа*/
        if (pages.length < count) {
          const page_left = pages[0] - 1;
          const page_right = pages[pages.length - 1] + 1;

          if (page_left >= range_min) {
            pages.unshift(page_left);
          }
          if (page_right <= range_max) {
            pages.push(page_right);
          }
        }
      }
      return pages;
    },
  },
  methods: {
    goPage(n) {
      this.$store.commit('updatePage', n);
      this.$store.dispatch('fetchPosts');
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: flex-end;

  &__item {
    width: 32px;
    height: 32px;
    border: 1px solid #E2E2E2;
    box-sizing: border-box;
    border-radius: 4px;
    font-family: 'SF Pro Regular', sans-serif;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8px;

    &:last-of-type {
      margin-right: 0;
    }

    &_disable {
      pointer-events: none;
    }

    &_is-active {
      color: #FF008A;
      border-color: #FF008A;
    }

    &_dots {
      cursor: text;
    }
  }

  &__arrow {
    width: 7px;
    height: 7px;
    border-top: 2px solid #E2E2E2;
    border-right: 2px solid #E2E2E2;

      &_right {
        transform: rotate(45deg);
        margin-right: 4px;
      }

      &_left {
        transform: rotate(-135deg);
        margin-left: 4px;
      }
  }
}
</style>