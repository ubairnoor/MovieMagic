import axios from 'axios'
import { useEffect } from 'react'
import Chip from '@mui/material/Chip';

const Genres = ( { selectedGeners , setSelectedGeners , genres , setGenres , type , setPage } ) => {
    //When ever we go select particular genre we make a another array.we will display itself
    // we will add handle add and handle remove
    // add selected genre ist (...selectedGeners ) and  then we add that has been sent to us (genre)
    const handleAdd = ( genre ) => {
        console.log ( "selected genre:" , genre )
        setSelectedGeners ( [...selectedGeners , genre] );

        setGenres ( genres.filter ( ( g ) => g.id !== genre.id ) );
        setPage ( 1 )
    }
    const handleRemove = ( genre ) => {
        console.log ( "Genre id is " , genre.id )
        console.log ( "Genre is " , genre.name )
        setSelectedGeners (
            selectedGeners.filter ( ( selected ) => selected.id !== genre.id )
        );
        setGenres ( [...genres , genre] );
        setPage ( 1 );

    }
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
        {/* we will display selected genres here */ }
        { selectedGeners && selectedGeners.map ( ( genre ) => (
            <Chip label={ genre.name } clickable key={ genre.id } size='small' color='secondary'
                  onDelete={ () => handleRemove ( genre ) }/>
        ) ) }

        { genres && genres.map ( ( genre ) => (
            <Chip label={ genre.name } clickable key={ genre.id } size='small' color='primary' onClick={
                () => handleAdd ( genre )
            }/>
        ) ) }
    </div>
}
export default Genres;