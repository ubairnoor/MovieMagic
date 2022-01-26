import { Box, Container, Grid, Typography } from '@material-ui/core';
import axios from "axios";
import { useEffect, useState } from 'react';
import SingleContent from  '../../component/SingleContent'
import CustomPagination from '../../component/Pagination/CustomPagination'
const Trending = ()=>{
    const [content , setContent] = useState([])
    const [page, setPage] = useState(1)
   const fetchTrending =  async()=>{
       const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.React_app_api_key}&page=${page}`
       )
    
      setContent(data.results)
    }
    useEffect(()=>{
fetchTrending();
    },[page])
    return (
  
            <Box alignItems="center" mb={7}>
           <Container maxWidth="lg" >
           <Grid container>
                    <Box mt>
                        <Grid item>
                            <Typography
                                gutterBottom
                                variant="h4"
                                component="h4"
                            >
                                Trending
                            </Typography>
                        </Grid>
                    </Box>
                </Grid> 
                <Grid container spacing={4}>
                {content && content.map((content) => 
                <SingleContent key={content.id}
                id={content.id}
                 media={content.media_type}
                 title = {content.title || content.name}
                 path = {content.poster_path}
                 vote= {content.vote_average}
                 date= {content.first_air_date || content.release_date}
                 poster={content.backdrop_path}
                />)}
                <SingleContent/>
                
                </Grid>
                
       </Container>
       <CustomPagination setPage={setPage}/>
       
    </Box>
     
      

    
    )
}
export default Trending