import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const blockedPaths = ['/playground', '/levelup', '/rectofinal']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const bypass = request.cookies.get('bypass-construccion')

  if (blockedPaths.some(path => pathname.startsWith(path)) && !bypass) {
    // Redirige a /en-construccion si entra a esas páginas
    return NextResponse.redirect(new URL('/en-construccion', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 