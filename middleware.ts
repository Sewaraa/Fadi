import { NextRequest, NextResponse } from 'next/server'

const locales = ['en', 'ar', 'fr']
const defaultLocale = 'en'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Ignore static files
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('.') ||
    pathname.startsWith('/api')
  ) {
    return
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}`)
  )

  // Get locale from cookie
  const cookieLocale = request.cookies.get('locale')?.value

  // If URL has locale → save it to cookie
  if (pathnameHasLocale) {
    const locale = pathname.split('/')[1]
    const response = NextResponse.next()
    response.cookies.set('locale', locale)
    return response
  }

  // If no locale in URL → redirect using cookie
  const locale = cookieLocale || defaultLocale
  return NextResponse.redirect(
    new URL(`/${locale}${pathname}`, request.url)
  )
}