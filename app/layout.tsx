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
      <body className='flex min-h-screen flex-col bg-background-1'>
        <Navbar />
        <div className='flex-grow mt-5 bg-background-1'>
        {children}
        </div>
        <Footer />
        </body>
    </html>
  )
}
