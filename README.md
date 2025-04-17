#### Задача

Создать небольшое SPA-приложение на Vue, которое:

- Используя <https://jsonplaceholder.typicode.com/> может подтянуть посты
- Выводит на страницу по 10 постов, и имеет паггинацию
- Имеет страницу отдельного поста и переход на нее

Основной стек:

- Vue/Ts
- Vite

#### Требования к функциональности

- Строгая типизация, без `any`
- Чистый код
- Реализовать поиск по постам
- Следовать принципам FSD

---

#### Реализация

1. Архитектура проекта Composition API с применением принципов FSD
2. pinia для хранения состояния проекта
3. axios для асинхронных запросов
4. Naive UI и TailwindCss для стилизации

#### Структура проекта

```
.
├── index.html
├── public               // публичные файлы (favicon)
├── src
│   ├── api              // api для получения данных
│   ├── app              // App.vue "главный" файл
│   ├── assets           // иконки
│   ├── entities         // карточка поста с комментариями
│   ├── features         // используемые фичи
│   ├── pages            // страницы (Main и Post)
│   ├── router           // роутинг
│   ├── shared
│   │   ├── components   // переиспользуемые компоненты
│   │   └── config       // конфиги стора и пагинации
│   │   └── layouts      // обертки для хеадера, футера и страниц
│   ├── store            // подключение и логика pinia
│   ├── styles           // глобальные стили
│   ├── types            // типизация
│   └── main.ts          // инициализация приложения
```

---

#### Запуск проект

```
// клонирование репозитория
git clone git@github.com:MiggRabbid/test-task-CyberFormSystems

// установка зависимостей
make i

// режим разработчика
make d

// сборка проекта
make b

// структура проекта
make rt
```

---

#### Стэк проекта

<a title="TypeScript" href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" height="40" alt="TypeScript"/></a> <a title="VUE3" href="https://ru.vuejs.org/" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg" height="40" alt="VUE3"/></a> <a title="Pinia" href="https://pinia.vuejs.org/" target="_blank" rel="noreferrer"><img src="https://pinia.vuejs.org/logo.svg" height="40" alt="Pinia"/></a> <a title="Naive Ui" href="https://www.naiveui.com/" target="_blank" rel="noreferrer"><img src="https://www.naiveui.com/assets/naivelogo-BdDVTUmz.svg" height="40" alt="Naive Ui"/></a> <a title="TailwindCss" href="https://tailwindcss.com/" target="_blank" rel="noreferrer"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" height="40" alt="TailwindCss"/></a>
