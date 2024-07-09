import {Link} from 'react-router-dom'
import Layout from './Layout'

const Main = () => {
    return (
        <Layout>
            <div className='flex'>
                <Link to={('about')}>About</Link>
            </div>
            <div className='text-3xl'><div>MAIN</div></div>
        </Layout>
    )
}

export default Main