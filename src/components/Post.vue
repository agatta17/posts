<template>
  <div class="post">
    <router-link :to="`post${post.id}`" class="post__img"></router-link>
    <div class="post__text">
      <router-link :to="`post${post.id}`" class="post__title">{{post.title}}</router-link>
      <div class="post__description">{{post.body}}</div>
    </div>
    <div class="post__footer">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 19.8042L10.0868 16H18C19.1046 16 20 15.1046 20 14V2C20 0.89543 19.1046 0 18 0H2C0.89543 0 0 0.89543 0 2V14C0 15.1046 0.89543 16 2 16H4V19.8042ZM9.5132 14L6 16.1958V14H2V2H18V14H9.5132Z" fill="black"/>
      </svg>
      <div class="post__comments">{{commentsLength}}</div>
      <router-link :to="`post${post.id}`">
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4374 0C15.0921 0 15.7197 0.26142 16.1781 0.723423L19.279 3.82432C19.7407 4.286 20.0001 4.91217 20.0001 5.56508C20.0001 6.21799 19.7407 6.84416 19.279 7.30584L7.95751 18.6238C7.25902 19.4295 6.2689 19.9245 5.1346 20.0023H0V19.0023L0.00324765 14.7873C0.0884382 13.7328 0.578667 12.7523 1.3265 12.0934L12.6954 0.724628C13.1564 0.26083 13.7834 0 14.4374 0ZM5.06398 18.0048C5.59821 17.967 6.09549 17.7184 6.49479 17.2616L14.0567 9.69972L10.3023 5.94519L2.6961 13.5496C2.29095 13.9079 2.04031 14.4092 2 14.8678V18.0029L5.06398 18.0048ZM11.7167 4.53115L15.4709 8.2855L17.8648 5.89162C17.9514 5.80502 18.0001 5.68756 18.0001 5.56508C18.0001 5.4426 17.9514 5.32514 17.8648 5.23854L14.7611 2.13486C14.6755 2.04855 14.5589 2 14.4374 2C14.3158 2 14.1992 2.04855 14.1136 2.13486L11.7167 4.53115Z" fill="black"/>
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    post: Object
  },
  computed: {
    commentsLength() {
      return this.post.comments.length
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  border: 1px solid #E2E2E2;
  border-radius: 20px;
  font-family: 'Manrope', sans-serif;
  display: flex;
  flex-direction: column;

  &__img {
    max-width: 307px;
    height: 250px;
    min-width: 228px;
    cursor: pointer;
    background-image: url("./../assets/post-image.svg");
    background-position-x: center;
  }

  &__text {
    padding: 14px 16px 22px 16px;
    flex: 1 1 auto;
  }

  &__title {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 8px;
    max-height: 58px;
    overflow: hidden;
    cursor: pointer;
    color: #000;
    text-decoration: none;
    display: block;
  }

  &__description {
    font-size: 17px;
    line-height: 22px;
    color: rgba(60, 60, 67, 0.6);
    max-height: 45px;
    overflow: hidden;
  }

  &__footer {
    display: flex;
    align-items: start;
    padding: 0 0 14px 18px;
  }

  &__comments {
    color: rgba(60, 60, 67, 0.6);
    font-size: 17px;
    line-height: 17px;
    margin-left: 12px;
    margin-right: 34px;
  }
}
</style>
