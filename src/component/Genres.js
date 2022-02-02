import axios from 'axios'
import { useEffect } from 'react'
import Chip from '@mui/material/Chip';

const Genres = ( { selectedGeners , setSelectedGeners , genres , setGenres , type , setPage } ) => {
    const fetchGenres = async () => {
        const { data } = await axios.get ( `https://api.themoviedb.org/3/genre/${ type }/list?api_key=${ process.env.React_app_api_key }&language=en-US` )
        setGenres ( data.genres )
    }
    console.log ( genres )

    useEffect ( () => {
        fetchGenres ();
//when ever we want chang e the page we want genres  unmouted means it should cancel the api key call
        return () => {
            setGenres ( {} );
        }

    } , [] )
    return <div style={ { padding : "6px" } }>
        { genres && genres.map ( ( genre ) => (
            <Chip label={ genre.name } clickable key={ genre.id } size='small' color='primary'/>
        ) ) }
    </div>
}
export default Genres;