<template>
  <div class="comments">
    <div class="comments__title">
      Комментарии
    </div>
    <div class="comments__item comment" v-for="comment in comments" :key="comment.id">
      <div class="comment__avatar"></div>
      <div class="comment__content">
        <div class="comment__name">{{comment.name}}</div>
        <div class="comment__text">{{comment.body}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comments',
  computed: {
    comments() {
      return this.$store.state.posts.comments;
    }
  },
}
</script>

<style lang="scss">
.comments {
  margin-bottom: 30px;

  &__title {
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 38px;
  }

  &__item {
    margin-bottom: 36px;
  }
}

.comment {
  display: flex;
  font-size: 18px;

  &__avatar {
    flex-shrink: 0;
    width: 36px;
    height: 36px;
    margin-right: 12px;
    background-image: url("./../assets/avatar.svg");
  }

  &__name {
    font-weight: 600;
    margin-bottom: 10px;
    letter-spacing: 0.5px;
  }

  &__text {
    font-weight: 400;
    color: rgba(60, 60, 67, 0.6);
  }
}

</style>
