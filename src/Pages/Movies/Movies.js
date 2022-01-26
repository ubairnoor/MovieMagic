import {useState,useEffect} from 'react'
import axios from "axios";
import { Box, Container, Grid, Typography } from '@material-ui/core';
import SingleContent from  '../../component/SingleContent'
import CustomPagination from '../../component/Pagination/CustomPagination'
const Movies = ()=>{
const [page,setPage] = useState(1)
const [content, setContent] = useState([])
const[numOfPages,setNumOfPages] = useState([])
    const fetchMovies = async() =>{
        const {data}= await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.React_app_api_key}&page=${page}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`     
        )

        setContent(data.results)
        console.log(data.results)
        setNumOfPages(data.total_pages)
        console.log(data.total_pages)
        console.log(numOfPages)
    }
    useEffect(() => {
     fetchMovies()
    }, [page])


    return (
        <Box alignItems="center" mb={8}>
        <Container maxWidth="lg" >
        <Grid container>
                 <Box mt>
                     <Grid item>
                         <Typography
                             gutterTop
                             variant="h5"
                             component="h5"
                         >
                             Movie
                         </Typography>
                     </Grid>
                 </Box>
             </Grid> 
             <Grid container spacing={4}>
             {content && content.map((content) => 
             <SingleContent key={content.id}
             id={content.id}
              media="movie"
              title = {content.title || content.name}
              path = {content.poster_path}
              vote= {content.vote_average}
              date= {content.first_air_date || content.release_date}
              poster={content.backdrop_path}
             />)}
             <SingleContent/>
             
             </Grid>
             
    </Container>
    {numOfPages > 1 &&(
 <CustomPagination setPage={setPage} numOfPages={numOfPages}/>
    
    )}
   
 </Box>
    )
}
export default Movies