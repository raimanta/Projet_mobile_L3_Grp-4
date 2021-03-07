export default function () {
    return {
        todos: [
            {
                id: 1,
                name : 'Courses',
                completed : false,
                modify: ""
            },
            {
                id: 2,
                name : 'CV',
                completed: true,
                modify: ""
            },
            {
                id: 3,
                name : 'Lettre de motivation',
                completed: true,
                modify: ""
            },
            {
                id: 4,
                name : 'Reussir sa vie',
                completed: true,
                modify: ""
            }
        ],
        newTodo: '',
        filter: 'all',
        boolean: true,
        id: 5,
    }
}