<template>
  <div class="comments">
    <div class="comments__title">
      Комментарии
    </div>
    <div class="comments__item comment">
      <div class="comment__avatar"></div>
      <div class="comment__content">
        <div class="comment__name">Чувак</div>
        <div class="comment__text">Коммент</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comments'
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
}

.comment {
  display: flex;
  font-size: 18px;

  &__avatar {
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
