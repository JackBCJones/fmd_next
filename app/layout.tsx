import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex min-h-screen flex-col'>
        <Navbar />
        <div className='flex-grow'>
        {children}
        </div>
        <Footer />
        </body>
    </html>
  )
}
