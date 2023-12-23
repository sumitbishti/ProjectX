import clientPromise from "@/db"

// In dev mode, the getStaticProps() method is called every single time(just like the getServerSideProps() method).But if we switch from development mode to production mode, this page will be pre-rendered and will load almost immediately. This page will now be served statically.
export const getStaticProps = async () => {
    try {
        const client = await clientPromise
        const db = client.db('sample_mflix')
        const collection = db.collection('movies')
        const movies = await collection.find().toArray()
        console.log(movies)

        return { props: { movies: JSON.parse(JSON.stringify(movies)) } }
    } catch (error) {
        console.log(error)
        return { props: { movies: [] } }
    }
}

const getStaticPropsExample = ({ movies }) => {
    return (
        <div>
            <h1>Top 1000 Movies of All Time</h1>
            <ul>
                {movies.map((movie, idx) => (
                    <li key={idx}>
                        <h2>{movie.title}</h2>
                        <h3>{movie.metacritic}</h3>
                        <p>{movie.plot}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default getStaticPropsExample