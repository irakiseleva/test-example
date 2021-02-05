import React from "react";
import './Blog.scss';

export class Blog extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="wrapper">
                <div className="formBlog">
                    <h2>Форма добавления записи</h2>
                    <div>Заголовок записи</div>
                    <div>Текст заметки</div>
                    <div>Кнопка "Добавить запись"</div>
                </div>
                <ul className="list-group listBlog">
                    <h2>Список записей</h2>
                    <li className="list-group-item">Запись 1</li>
                    <li className="list-group-item">Запись 2</li>
                    <li className="list-group-item">Запись 3</li>
                    <li className="list-group-item">Запись 4</li>
                    <li className="list-group-item">Запись 5</li>
                    <li className="list-group-item">...</li>
                </ul>
            </div>
        );
    }
}