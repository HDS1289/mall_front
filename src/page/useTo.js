import {createSearchParams, useSearchParams, useNavigate} from 'react-router-dom'
import {useState} from 'react'

const getNum  = (num, defaultNum) => {
    let result
    if(num) result = parseInt(num)
    else result = defaultNum
    return result
}

const useTo = () => {
    const [refresh, setRefresh] = useState(false)
    const navigate = useNavigate()
    const [query] = useSearchParams()
    const page = getNum(query.get('page'), 1)
    const size = getNum(query.get('size'), 5) 
    const queryDefault = createSearchParams({page, size}).toString()

    const toList = param => {
        let query = ''
        if(param) { // 객체의 페이지(size)의 필드값.
            const page = getNum(param.page, 1)
            const size = getNum(param.size, 5)
            query = createSearchParams({page, size}).toString()
        } else query = queryDefault
        setRefresh(!refresh)

        navigate({
            pathname: '../list',
            search: query
        })
    }

    const toGet = num => navigate({
        pathname: `../get/${num}`,
        search: queryDefault
    })

    const toFix = num => navigate({
        pathname: `../fix/${num}`,
        search: queryDefault
    })

    return {toList, toGet, toFix, page, size, refresh}    
}

export default useTo
