import React from "react"
import { Route, Routes } from "react-router-dom"

// Pages
import { Home } from "./pages/home/Home"
import { SignInPage } from "./pages/auth/SignInPage"
import { SignUpPage } from "./pages/auth/SignUpPage"
import { TermsPage } from "./pages/legal/TermsPage"
import { PrivacyPage } from "./pages/legal/PrivacyPage"
import { ContactPage } from "./pages/home/ContactPage"

// Layout
import DashboardLayout from "./layouts/DashboardLayout"

// Navigation
import { adminNavigation, clientNavigation } from "./components/dashboard/navigation"

// Admin Dashboard Pages
import AdminDashboardPage from "./pages/dashboard/admin/DashboardPage"
import AdminUsersPage from "./pages/dashboard/admin/UsersPage"
import AdminReportsPage from "./pages/dashboard/admin/ReportsPage"
import AdminSettingsPage from "./pages/dashboard/admin/SettingsPage"

// Client Dashboard Pages
import ClientDashboardPage from "./pages/dashboard/client/DashboardPage"
import ClientReportsPage from "./pages/dashboard/client/ReportsPage"
import ClientSettingsPage from "./pages/dashboard/client/SettingsPage"

// Navigation

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/contact" element={<ContactPage />} />

      {/* Admin Dashboard Routes */}
      <Route
        path="/dashboard/admin"
        element={<DashboardLayout role="Administrador" navigation={adminNavigation} />}
      >
        <Route index element={<AdminDashboardPage />} />
        <Route path="users" element={<AdminUsersPage />} />
        <Route path="reports" element={<AdminReportsPage />} />
        <Route path="settings" element={<AdminSettingsPage />} />
      </Route>

      {/* Client Dashboard Routes */}
      <Route
        path="/dashboard/client"
        element={<DashboardLayout role="Cliente" navigation={clientNavigation} />}
      >
        <Route index element={<ClientDashboardPage />} />
        <Route path="reports" element={<ClientReportsPage />} />
        <Route path="settings" element={<ClientSettingsPage />} />
      </Route>
    </Routes>
  )
}

export default App