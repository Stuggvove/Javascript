(function() {
    let todoItems = [];

    // Функция для сохранения данных в localStorage
    function saveToLocalStorage(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    // Функция для загрузки данных из localStorage
    function loadFromLocalStorage(key) {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : [];
    }

    // Функция для создания заголовка приложения
    function createAppTitle(title) {
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title;
        return appTitle;
    }

    // Функция для создания формы добавления дела
    function createTodoItemForm() {
        let form = document.createElement('form');
        let input = document.createElement('input');
        input.setAttribute('id', 'todoInput');
        input.setAttribute('name', 'todoInput');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');

        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = 'Введите название нового дела';
        buttonWrapper.classList.add('input-group-addend');
        button.classList.add('btn', 'btn-primary');
        button.textContent = 'Добавить дело';

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        button.disabled = true;

        input.addEventListener('input', function(e) {
            e.preventDefault();
            if (input.value.length > 0) {
                button.disabled = false;
            } else if (input.value.length === 0) {
                button.disabled = true;
            }
        });

        return {
            form,
            input,
            button,
        };
    }

    // Функция для создания списка дел
    function createTodoList() {
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }

    // Функция для создания элемента дела
    function createTodoItem(id, name, done) {
        let item = document.createElement('li');

        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        item.textContent = name;

        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn', 'btn-success');
        doneButton.textContent = 'Готово';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Удалить';

        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        doneButton.addEventListener('click', function() {
            item.classList.toggle('list-group-item-success');
            updateTodoItemStatus(id, !done);
        });

        deleteButton.addEventListener('click', function() {
            if (confirm('Вы уверены?')) {
                item.remove();
                deleteTodoItem(id);
            }
        });

        return {
            item,
            doneButton,
            deleteButton,
        };
    }

    // Функция для обновления статуса дела
    function updateTodoItemStatus(id, done) {
        const todoItem = todoItems.find(item => item.id === id);
        if (todoItem) {
            todoItem.done = done;
            saveToLocalStorage('my', todoItems); // Сохранение в localStorage
        }
    }

    // Функция для удаления дела
    function deleteTodoItem(id) {
        const index = todoItems.findIndex(item => item.id === id);
        if (index !== -1) {
            todoItems.splice(index, 1);
            saveToLocalStorage('my', todoItems); // Сохранение в localStorage
        }
    }

    // Функция для создания приложения
    function createTodoApp(container, title = 'Список дел') {
        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createTodoItemForm();
        let todoList = createTodoList();

        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);

        // Загрузка существующих данных из localStorage
        todoItems = loadFromLocalStorage('my');

        // Отрисовка существующих дел из localStorage
        if (todoItems.length > 0) {
            todoItems.forEach(function (item) {
                let todoItem = createTodoItem(item.id, item.name, item.done);
                todoList.append(todoItem.item);
            });
        } else {
            // Отрисовка дефолтных дел, если localStorage пуст
            let todoItemsDefault = [
                { id: 1, name: 'Сходить в магазин', done: false },
                { id: 2, name: 'Купить хлеб', done: false },
            ];

            todoItemsDefault.forEach(function (item) {
                let todoItem = createTodoItem(item.id, item.name, item.done);
                todoList.append(todoItem.item);
                todoItems.push({ id: item.id, name: item.name, done: item.done });
            });

            // Сохранение дефолтных дел в localStorage
            saveToLocalStorage('my', todoItems);
        }

        todoItemForm.form.addEventListener('submit', function(e) {
            e.preventDefault();

            if (!todoItemForm.input.value) {
                return;
            }

            const newId = todoItems.length + 1;
            let todoItem = createTodoItem(newId, todoItemForm.input.value, false);

            todoList.append(todoItem.item);
            todoItems.push({ id: newId, name: todoItemForm.input.value, done: false });

            // Сохранение в localStorage при добавлении нового дела
            saveToLocalStorage('my', todoItems);

            todoItemForm.input.value = '';
            todoItemForm.button.disabled = true;
        });
    }

    window.createTodoApp = createTodoApp;
})();