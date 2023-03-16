import { useState } from 'react'
import Header from './Header'
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Resume from './Resume'
import Contact from './Contact'
import Footer from './Footer'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe')

  const renderPage = () => {
    if (currentPage === 'AboutMe') return <AboutMe />
    if (currentPage === 'Portfolio') return <Portfolio />
    if (currentPage === 'Contact') return <Contact />
    return <Resume />
  }

  const handlePageChange = (page) => setCurrentPage(page)

  return (
    <div>
      <Header
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {renderPage()}
      <Footer />
    </div>
  )
}
