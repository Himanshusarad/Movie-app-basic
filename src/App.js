import { useEffect } from 'react';
import './App.css'
import SearchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com/?apikey=1a749392'

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        console.log('data==>', data)
    }
    useEffect(() => {
        searchMovies('Superman')
    }, [])
    return (
        <div className='app'>
            <h1>MovieLand</h1>
            <div className='search'>
            <input
                placeholder="Search for Movies"
                />
            </div>
        </div>
    );
}

export default App;