import * as React from 'react'
import './styles.css'

interface Task {
    isComplete: boolean
    description: string
}

export const ToDo = () => {
    const [tasks, setTask] = React.useState<Task[]>([])

    return (
        <>
            <div id='task-list'>
                <button>Add</button>
            </div>
        </>
    )
}