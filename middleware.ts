import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const response = NextResponse.next()

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder',
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set(name, value)
          })
          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value)
          })
        },
      },
    }
  )

  const { data: { user } } = await supabase.auth.getUser()

  const pathname = request.nextUrl.pathname

  const isAdminRoute = pathname.startsWith('/admin')
  const isClienteRoute = pathname.startsWith('/cliente')
  const isLoginPage = pathname === '/admin/login' || pathname === '/cliente/login'

  if (!user && isAdminRoute && !isLoginPage) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  if (!user && isClienteRoute && !isLoginPage) {
    return NextResponse.redirect(new URL('/cliente/login', request.url))
  }

  if (user && pathname === '/admin/login') {
    return NextResponse.redirect(new URL('/admin/dashboard', request.url))
  }

  if (user && pathname === '/cliente/login') {
    return NextResponse.redirect(new URL('/cliente/dashboard', request.url))
  }

  return response
}

export const config = {
  matcher: ['/admin/:path*', '/cliente/:path*'],
}