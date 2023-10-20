import { Montserrat } from 'next/font/google'
import '@styles/globals.css'
import AuthProvider from '@components/signin/AuthProvider'

const montserrat = Montserrat({ weight: ['400', '700'], subsets: ['cyrillic'] })

export const metadata = {
  title: 'OpenInApp Assignment',
  description: 'Assignment given by OpenInApp',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
