import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './AdminPanel.css'

export default function AdminPanel() {
  const navigate = useNavigate()
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)

  const ADMIN_PASSWORD = '1234' // Change this!

  useEffect(() => {
    const auth = localStorage.getItem('adminAuth')
    if (auth === 'true') {
      setAuthenticated(true)
    }
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem('adminAuth', 'true')
      setAuthenticated(true)
      // Redirect to admin/weddings
      navigate('/admin/weddings')
    } else {
      setMessage({ type: 'error', text: 'Invalid password' })
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminAuth')
    setAuthenticated(false)
    setPassword('')
  }

  if (authenticated) {
    return (
      <div className="admin-panel">
        <div className="admin-header">
          <h1>Admin Panel</h1>
          <button onClick={handleLogout} className="btn-secondary">Logout</button>
        </div>
        
        <div className="admin-dashboard">
          <h2>Welcome to the Admin Panel</h2>
          <p>Choose what you want to manage:</p>
          
          <div className="admin-cards">
            <button 
              className="admin-card"
              onClick={() => navigate('/admin/weddings')}
            >
              <h3>Wedding Blogs</h3>
              <p>Manage real wedding blog posts</p>
            </button>
            
            <button 
              className="admin-card"
              onClick={() => navigate('/admin/venues')}
            >
              <h3>Venues</h3>
              <p>Manage venue information</p>
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-panel">
      <div className="login-container">
        <h1>Admin Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter admin password"
            autoFocus
          />
          <button type="submit">Login</button>
        </form>
        {message && (
          <div className={`message message-${message.type}`}>
            {message.text}
          </div>
        )}
      </div>
    </div>
  )
}
