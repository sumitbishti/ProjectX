// import clientPromise from "@/db";

// const movies = async (req, res) => {
//     try {
//         const client = await clientPromise;
//         const db = client.db("sample_mflix");

//         const movies = await db
//             .collection("movies")
//             .find({})
//             .limit(10)
//             .toArray();

//         res.json(movies);
//     } catch (e) {
//         console.error(e);
//     }
// };

// export default movies