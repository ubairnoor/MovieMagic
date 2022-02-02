const useGenres = (selectedGenres) => {
    /* if the selected genre is 0 then return nothing*/
    if (selectedGenres.length < 1) return "";
    /* with the map function we get all ids in selected genres*/
    const GenreIds = selectedGenres.map ( ( g ) => g.id );
    /* after getting ids we will use reduce it. ist value is accumulator and
    second  is current value.
    so in return we will  accumulator + comma + current value.
    if we have  1,2,3,4 after return it will look like this [1,2,3,4]
    */
    return GenreIds.reduce ( ( acc , curr ) => acc + ',' + curr );
}
export default useGenres;