# Задание

Необходимо реализовать упрощенную версию микроблога, с возможностью вывода существующих записей. <br>
При выполнении задания можно использовать документацию React, JS, Bootstrap. 


## Требуется реализовать:
1. Получить список записей, отсортировать его по дате добавления (свежие записи располагаются в начале списка). 
2. Отобразить список на странице (схематично сверстать простой список, содержащий заголовок, сам пост и дату (привести ее в читаемый вид)). Допускается использование Bootstrap

### URL запроса на получение записей:
url: https://run.mocky.io/v3/9369dc98-cd81-45e8-906c-9959ff17e3e0, <br/>
method: GET, </br>
#### Формат данных ответа:
```ts
[ 
{
"comment": string,
"date": string,
"id": number,
"title": string,
},
…
 ]
```

## Запуск

Для запуска фронта необходимы:

1.  [nodejs](https://nodejs.org/en/download/)
2.  [npm]

После установки, в директории **test-example**:

1.  Скачать зависимости: `npm install`
2.  Запустить приложение: `npm start`

