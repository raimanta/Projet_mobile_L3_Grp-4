export default function () {
    return {
        lists: [
            {
                id: 0,
                name : 'Liste 1',
                todos: [
                    {
                        id: 0,
                        name : 'CV',
                        completed: true,
                        modify: ""
                    },
                    {
                        id: 1,
                        name : 'Lettre de motivation',
                        completed: true,
                        modify: ""
                    },
                    {
                        id: 2,
                        name : 'Reussir sa vie',
                        completed: true,
                        modify: ""
                    }
                ]
            },
            {
                id: 1,
                name : 'Liste 2',
                todos: [
                    {
                        id: 0,
                        name : 'manger',
                        completed: false,
                        modify: ""
                    }
                ]
            }
        ],
        newTodo: '',
        newList: '',
        filter: 'all',
    }
}
