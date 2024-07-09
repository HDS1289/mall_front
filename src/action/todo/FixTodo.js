import {useEffect, useState} from 'react'
import {getTodo, fixTodo} from '../../api/todoApi'
import useTo from '../../page/useTo'

const FixTodo = ({todoNo}) => {
    const [todo, setTodo] = useState({
        todoNo: 0,
        title: '',
        writer: '',
        dueDate: '',
        done: false
    })
    const {toGet} = useTo()

    useEffect(() => {
        getTodo(todoNo).then(todo => setTodo(todo))
    }, [todoNo])

    const onChange = e => {
        todo[e.target.name] = e.target.value
        setTodo({...todo})
    }

    const onChangeDone = e => {
        const value = e.target.value
        todo.done = value === 'Y'
        setTodo({...todo})
    }

    const onClickSave = () => {
        fixTodo(todo)
        toGet(todoNo)
    }

    return (
        <div className='border-2 border-sky-200 mt-10 m-2 p-4'>
            <div className='border-2 border-sky-200 mt-10 m-2 p-4'>
                <div className='flex justify-center mt-10'>
                    <div className='relative mb-4 w-full flex flex-wrap item-stretch'>
                        <div className='w-1/5 p-6 text-right font-bold'>번호</div>
                        <div className='w-4/5 p-6 rounded-r border border-solid
                            shadow-md bg-gray-100'>{todo.todoNo}</div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='relative mb-4 w-full flex flex-wrap item-stretch'>
                        <div className='w-1/5 p-6 text-right font-bold'>작성자</div>
                        <div className='w-4/5 p-6 rounded-r border border-solid
                            shadow-md bg-gray-100'>{todo.writer}</div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='relative mb-4 w-full flex flex-wrap item-stretch'>
                        <div className='w-1/5 p-6 text-right font-bold'>제목</div>
                        <input type='text'
                            className='w-4/5 p-6 rounded-r border border-solid 
                                border-neutral-300 shadow-md'
                                name='title'
                                value={todo.title}
                                onChange={onChange}/>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='relative mb-4 w-full flex flex-wrap item-stretch'>
                        <div className='w-1/5 p-6 text-right font-bold'>기한</div>
                        <input type='date'
                            className='w-4/5 p-6 rounded-r border border-solid 
                                border-neutral-300 shadow-md'
                                name='dueDate'
                                value={todo.dueDate}
                                onChange={onChange}/>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className='relative mb-4 w-full flex flex-wrap item-stretch'>
                        <div className='w-1/5 p-6 text-right font-bold'>완료</div>
                        <select name='done'
                            className='border-solid border-2 rounded m-1 p-2'
                            onChange={onChangeDone}
                            value={todo.done ? 'Y' : 'N'}>
                            <option value='Y'>Y</option>
                            <option value='N'>N</option>
                        </select>
                    </div>
                </div>
                <div className='flex justify-end p-4'>
                    <button type='button'
                        className='rounded p-4 m-2 text-xl w-32 text-white bg-red-500'
                        onClick={() => toGet(todoNo)}>CANCEL</button>
                    <button type='button'
                        className='rounded p-4 m-2 text-xl w-32 text-white bg-blue-500'
                        onClick={onClickSave}>SAVE</button>
                </div>
            </div>
        </div>
    )
}

export default FixTodo