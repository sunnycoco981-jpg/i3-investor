import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import Dashboard from './components/Dashboard'
import PolicyPage from './components/PolicyPage'
import Footer from './components/Footer'

type Page = 'home' | 'dashboard' | 'portfolio' | 'policy'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {currentPage === 'home' && (
        <>
          <Hero setCurrentPage={setCurrentPage} />
          <Portfolio />
        </>
      )}
      
      {currentPage === 'dashboard' && <Dashboard />}
      
      {currentPage === 'policy' && <PolicyPage />}
      
      <Footer />
    </div>
  )
}

export default App
