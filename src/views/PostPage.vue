<template>
  <div class="post">
    <div class="post__image"></div>
    <div class="container">
      <h1 class="post__title" v-if="post.title">{{post.title}}</h1>
      <textarea class="post__textarea" v-if="post.body && isEditing" v-model="editedPost"/>
      <div class="post__description" v-else-if="post.body">{{post.body}}</div>
      <button class="post__edit-btn" v-if="post.body &&!isEditing" @click="editPost">
        <svg class="post__edit-icon" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4373 0C15.0921 0 15.7197 0.26142 16.1781 0.723423L19.279 3.82432C19.7407 4.286 20 4.91217 20 5.56508C20 6.21799 19.7407 6.84416 19.279 7.30584L7.95749 18.6238C7.25901 19.4295 6.26889 19.9245 5.13459 20.0023H-1.52588e-05V19.0023L0.00323239 14.7873C0.088423 13.7328 0.578652 12.7523 1.32648 12.0934L12.6954 0.724628C13.1564 0.26083 13.7833 0 14.4373 0ZM5.06395 18.0048C5.59818 17.967 6.09546 17.7184 6.49476 17.2616L14.0567 9.6997L10.3023 5.94518L2.69607 13.5496C2.29092 13.9079 2.04028 14.4092 1.99997 14.8678V18.0029L5.06395 18.0048ZM11.7167 4.53113L15.4709 8.28549L17.8648 5.89162C17.9514 5.80502 18 5.68756 18 5.56508C18 5.4426 17.9514 5.32514 17.8648 5.23854L14.7611 2.13486C14.6755 2.04855 14.5589 2 14.4373 2C14.3157 2 14.1992 2.04855 14.1135 2.13486L11.7167 4.53113Z" fill="#FF008A"/>
        </svg>
        Редактировать текст
      </button>
      <div class="post__edit-menu edit-menu" v-if="isEditing">
        <button class="edit-menu__item edit-menu__item_save" @click="savePost">Сохранить изменения</button>
        <button class="edit-menu__item edit-menu__item_cancel" @click="cancelEditing">Отменить</button>
      </div>
      <h1 v-if="!post.title && !post.body">{{isLoading ? 'Загрузка...' : 'Пост не найден'}}</h1>
      <Comments v-if="comments.length"/>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  components: {
    Comments: () => import('@/components/Comments.vue')
  },
  data() {
    return {
      isEditing: false,
      editedPost: '',
    }
  },
  computed: mapState({
    post: state => state.posts.post,
    comments: state => state.posts.comments,
    isLoading: state => state.posts.isLoading,
  }),
  methods: {
    ...mapActions(["sendPost"]),
    editPost() {
      this.isEditing = true;
      this.editedPost = this.post.body;
    },
    async savePost() {
      await this.sendPost({id: this.post.id, body: this.editedPost});
      this.isEditing = false;
    },
    cancelEditing() {
      this.isEditing = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  font-family: 'Manrope', sans-serif;

  &__image {
    width: 100%;
    height: 285px;
    max-width: 973px;
    margin: 0 auto;
    background-image: url('./../assets/article-cover.png');
    background-position-x: center;
  }

  &__title {
    font-size: 34px;
    margin: 25px 0 30px 0;
    padding-bottom: 30px;
    border-bottom: solid 1px #D1D1D6;
  }

  &__description {
    font-family: 'Manrope', sans-serif;
    font-size: 18px;
    line-height: 30px;
    color: rgba(60, 60, 67, 0.6);
    margin-bottom: 36px;
    white-space: pre-line;
  }

  &__textarea {
    width: 100%;
    padding: 20px 95px 40px 20px;
    border: 1px solid #D1D1D6;
    border-radius: 8px;
    font-family: 'Manrope', sans-serif;
    font-size: 18px;
    line-height: 30px;
    color: #000;
    margin-bottom: 30px;
    min-height: 170px;
    outline: none;
    box-sizing: border-box;
  }

  &__edit-btn {
    display: flex;
    align-items: center;
    border: none;
    background: none;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.5px;
    color: #FF008A;
    padding: 0;
    margin-bottom: 36px;
    cursor: pointer;
  }

  &__edit-icon {
    margin-right: 18px;
  }

  &__edit-menu {
    margin-bottom: 30px;
  }
}

.edit-menu {
  display: flex;

  &__item {
    font-family: 'Manrope', sans-serif;
    height: 50px;
    box-sizing: border-box;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 300;
    font-size: 18px;
    line-height: 18px;

    &_save {
      background: #FF008A;
      color: #FFF;
      width: 309px;
      border: 0;
      margin-right: 30px;
    }

    &_cancel {
      background: #FFF;
      color: #FF008A;
      width: 325px;
      border: 1px solid #FF008A;
    }
  }
}

@media (max-width: 767px) {
  .post {
    &__title {
      font-size: 32px;
    }

    &__description {
      font-size: 17px;
      line-height: 22px;
      margin-bottom: 26px;
    }

    &__textarea {
      padding: 15px;
      font-size: 17px;
      line-height: 22px;
      margin-bottom: 20px;
    }
  }
}
</style>