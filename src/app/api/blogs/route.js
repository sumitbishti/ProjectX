import { NextResponse } from 'next/server'
import { Blog } from '@/models/blog';
import connectDB from '@/lib/db';
import { redirect } from 'next/navigation';

export async function GET(req, res) {
    const isAuth = false

    if (!isAuth) {
        redirect('/')
    }

    try {
        await connectDB();
        const blogs = await Blog.find();
        return NextResponse.json({ blogs })
    } catch (error) {
        return NextResponse.json({ message: 'Failed to fetch blogs!' })
    }
}