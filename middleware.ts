import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const blockedPaths = ['/playground', '/levelup', '/rectofinal']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const bypass = request.cookies.get('bypass-construccion')

  // Log para debugging
  console.log('Middleware ejecutándose para:', pathname)
  console.log('Bypass cookie:', bypass)

  if (blockedPaths.some(path => pathname.startsWith(path))) {
    console.log('Ruta bloqueada detectada:', pathname)
    
    if (!bypass) {
      console.log('Redirigiendo a /en-construccion')
      return NextResponse.redirect(new URL('/en-construccion', request.url))
    } else {
      console.log('Bypass activado, permitiendo acceso')
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/playground',
    '/levelup', 
    '/rectofinal',
    '/en-construccion'
  ],
} 