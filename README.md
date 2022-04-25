## Задача

Разработать Single Page Application с использованием Vue.js, Vuex, Vue-Router.

Реализовать:

- вывод списка постов;
- возможность просмотреть конкретный пост по его ID и комментарии к нему;
- редактирование текста поста;
- поиск по постам;
- пагинацию.

[Макет](https://www.figma.com/file/SJ3UeSpADQmG6oD3ZBLKDg/Single-Page-Application?node-id=0%3A1)

![image](https://user-images.githubusercontent.com/12274146/165114687-86e279c8-2fd5-40bd-8f57-43b528bbef40.png)

Используем тестовый API: https://jsonplaceholder.typicode.com

Получение списка постов: 	[GET](https://jsonplaceholder.typicode.com/posts?_embed=comments)

Получение поста по ID: 	[GET](https://jsonplaceholder.typicode.com/posts/1)

Получение комментариев: 	[GET](https://jsonplaceholder.typicode.com/posts/1/comments)

Обновление полей поста: 	[PATCH](https://jsonplaceholder.typicode.com/posts/1)

[Поиск](https://github.com/typicode/json-server#full-text-search)

[Пагинация](https://github.com/typicode/json-server#paginate)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
