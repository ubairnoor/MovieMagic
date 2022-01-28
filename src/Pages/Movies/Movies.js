import {Box, Container, Grid, Typography} from '@material-ui/core';
import axios from "axios";
import {useEffect, useState} from 'react';
import CustomPagination from '../../component/Pagination/CustomPagination';
import SingleContent from '../../component/SingleContent';
import Genres from '../../component/Genres';
import useGenre from "../../hooks/useGenres";

const Movies = () => {
    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);
    const [numOfPages, setNumOfPages] = useState();
    const [selectedGeners, setSelectedGeners] = useState([]);
    const [genres, setGenres] = useState([]);
    const genreforURL = useGenre(selectedGeners);
    const fetchMovies = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.React_app_api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
        )
        setContent(data.results)
        setNumOfPages(data.total_pages)
    }
    useEffect(() => {
        fetchMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, genreforURL]);
    return (
        <Box alignItems="center" mb={8}>
        <Container maxWidth="lg" >

        <Grid container>
                 <Box mt>
                     <Grid item>
                         <Typography
                             gutterTop
                             variant="h5"
                             component="h5">
                             Movie
                         </Typography>
                         <Genres type="movie" selectedGeners={selectedGeners}
                                 setSelectedGeners={setSelectedGeners}
                                 genres={genres}
                                 setGenres={setGenres}
                                 setPage={setPage}
                         />
                     </Grid>
                 </Box>
             </Grid> 
             <Grid container spacing={4}>
             {content && content.map((content) => 
             <SingleContent key={content.id}
                            id={content.id}
                            media="movie"
                            title = {content.title || content.name}
                            path={content.poster_path}
                            vote={content.vote_average}
                            date={content.first_air_date || content.release_date}
                            poster={content.backdrop_path}
             />)}
                 <SingleContent/>

             </Grid>

        </Container>
            {numOfPages > 1 && (
                <CustomPagination setPage={setPage} numOfPages={numOfPages}/>
            )}


        </Box>
    )
}
export default Movies