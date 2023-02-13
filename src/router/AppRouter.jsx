import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import AuthRoutes from '../auth/routes/AuthRoutes'
import JournalRoutes from '../journal/routes/JournalRoutes'
import CheckingAuth from '../ui/components/CheckingAuth'

const AppRouter = () => {
  const { status } = useSelector(state => state.auth)
  if (status === 'checking') {
    return <CheckingAuth />
  }
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  )
}

export default AppRouter
