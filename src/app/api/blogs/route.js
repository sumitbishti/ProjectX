import { NextResponse } from 'next/server'
import { Blog } from '@/models/blog';
import connectDB from '@/lib/db';

export async function GET(req, res) {
    try {
        await connectDB();
        const blogs = await Blog.find();
        return NextResponse.json({ blogs })
    } catch (error) {
        return NextResponse.json({ message: 'Failed to fetch blogs!' })
    }
}