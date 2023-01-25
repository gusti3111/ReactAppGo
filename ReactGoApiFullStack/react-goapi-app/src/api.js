import axios from "axios"



export const getMoviesList = async() => {
  const movie = await axios.get("http://localhost:9000/product/1")
  // ${baseUrl}/movie/popular?api_key=${apiKey} popular

  return movie.data
}