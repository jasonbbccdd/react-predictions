import React from 'react'
import { Routes, BrowserRouter, Route, Navigate } from 'react-router-dom'

import { AuthProvider } from '@/contexts/Auth'
import { TournamentsProvider } from '@/contexts/Tournaments'

import App from '@/layouts/App'

import PagesNotFound from '@/pages/NotFound'
import PagesTournamentsIndex from '@/pages/tournaments/Index'
import PagesTournamentsShow from '@/pages/tournaments/Show'

function Routing() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <TournamentsProvider>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Navigate to="/tournaments" replace />} />

              <Route path="/tournaments" element={<PagesTournamentsIndex />} />
              <Route path="/tournaments/:id" element={<PagesTournamentsShow />} />

              <Route path="*" element={<PagesNotFound />} />
            </Route>
          </Routes>
        </TournamentsProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default Routing
