import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Toprated Movie',
  description: 'Movie Search App is a web application that allows users to search for movies and view their details. It provides a user-friendly interface to explore a vast collection of movies, including popular and top-rated titles. Users can enter search queries to find specific movies, and the app retrieves relevant results from a comprehensive movie database. With features like pagination and movie details, users can easily navigate through search results and access comprehensive information about each movie, including posters, release dates, overviews, genres, runtime, and average ratings. The Movie Search App offers an immersive movie browsing experience, empowering users to discover and explore their favorite films.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
