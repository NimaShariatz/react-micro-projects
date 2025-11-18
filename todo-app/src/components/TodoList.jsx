import { TodoCard } from "./TodoCard";

export function TodoList(props) {
    const { todos, selectedTab } = props


    const filterTodosList = selectedTab === 'All' ?
        todos :
        selectedTab === 'Completed' ?
            todos.filter(val => val.complete) :
            todos.filter(val => !val.complete)

    return (
        <>
            {filterTodosList.map((todo, todoIndex) => {
                const tempTodoIndex = todos.findIndex(val => val.input == todo.input)
                console.log(tempTodoIndex)
                return (
                    <TodoCard key={todoIndex} todoIndex={tempTodoIndex} todo={todo} {...props} />// what {...props} does is say "whatever my parent is recieving, pass it on to the child"
                )
            })}

        </>
    )
}