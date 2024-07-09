import {useState} from 'react'
import {addTodo} from '../../api/todoApi'
import useTo from '../../page/useTo'

const AddTodo = () => {
    const [todo, setTodo] = useState({
        title: '',
        writer: '',
        dueDate: ''
    })
    const {toList} = useTo()

    const onChange = e => {
        todo[e.target.name] = e.target.value
        setTodo({...todo})
    }

    const onClickAdd = () => addTodo(todo).then(() => toList())

    return (
        <div className='border-2 border-sky-200 mt-10 m-2 p-4'>
            <div className='flex justify-center'>
                <div className='relative mb-4 flex w-full flex-wrap items-stretch'>
                    <div className='w-1/5 p-6 text-right font-bold'>제목</div>
                    <input type='text'
                        className='w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md'
                        name='title'
                        value={todo.title}
                        onChange={onChange}/>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='relative mb-4 flex w-full flex-wrap items-stretch'>
                    <div className='w-1/5 p-6 text-right font-bold'>작성자</div>
                    <input type='text'
                        className='w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md'
                        name='writer'
                        value={todo.writer}
                        onChange={onChange}/>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='relative mb-4 flex w-full flex-wrap items-stretch'>
                    <div className='w-1/5 p-6 text-right font-bold'>기한</div>
                    <input type='date'
                        className='w-4/5 p-6 rounded-r border border-solid border-neutral-500 shadow-md'
                        name='dueDate'
                        value={todo.dueDate}
                        onChange={onChange}/>
                </div>
            </div>
            <div className='flex justify-end'>
                <div className='relative mb-4 p-4 flex flex-wrap items-stretch'>
                    <button type='button'
                        className='rounded p-4 w-36 bg-blue-500 text-xl text-white'
                        onClick={onClickAdd}>추가</button>
                </div>
            </div>
        </div>
    )
}

export default AddTodo