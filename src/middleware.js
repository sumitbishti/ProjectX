export function middleware(request) {
    if (request.nextUrl.pathname.startsWith('/profile')) {
        // Add /profile specific logics
    }
    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        // Add /dashboard specific logics
    }
}
export const config = {
    matcher: ['/profile/:path*', '/dashboard/:path*'],
}