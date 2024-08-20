import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { TokenContext, useToken } from './context/TokenProvider';
import { useContext, useEffect } from 'react';


export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname

    const isPublicPath = path === '/login' || path === '/signup' || path === '/home'

    const token = request.cookies.get('token')?.value || ''

    if (path === '/') {
        return NextResponse.redirect(new URL('/home', request.nextUrl))
    }

    if (isPublicPath && token) {
        return NextResponse.redirect(new URL('/home', request.nextUrl))
    }

    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/',
        '/profile',
        '/login',
        '/signup',
        '/verifyemail'
    ]
}