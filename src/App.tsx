import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import GitHubProfile from './pages/GitHubProfile'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main profile route with tab parameter */}
        <Route path="/" element={<Navigate to="/shreeramk" replace />} />
        <Route path="/:username" element={<GitHubProfile />} />
        <Route path="/:username/:tab" element={<GitHubProfile />} />
        <Route path="*" element={<Navigate to="/shreeramk" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
