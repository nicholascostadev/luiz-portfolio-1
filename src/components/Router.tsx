import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Adiciona mais quantos vc quiser */}
    </Routes>
  )
}
