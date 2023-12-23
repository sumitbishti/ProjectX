import connectDB from "@/lib/db"
import { Blog } from "@/models/blog"

const blogs = async (req, res) => {
    try {
        await connectDB()
        const blogs = await Blog.find()
        res.json(blogs)
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch blogs!' })
    }
}

export default blogs