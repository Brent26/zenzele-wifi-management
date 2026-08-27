import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Sidebar.css'

export default function Sidebar() {
  const [openVouchers, setOpenVouchers] = useState(true)
  const { pathname } = useLocation()

  const isActive = (path: string) => pathname === path
  const vouchersActive = pathname.startsWith('/vouchers')

  return (
    <aside className="sidebar">
      <p className="sidebar-title">MAIN NAVIGATION</p>

      <nav aria-label="Main navigation">
        <NavItem to="/" label="Dashboard" active={isActive('/')} />

        <button
          className={`nav-item nav-button ${openVouchers || vouchersActive ? 'open active' : ''}`}
          onClick={() => setOpenVouchers((value) => !value)}
          type="button"
        >
          <span>Vouchers</span>
          <span>{openVouchers ? '▾' : '▸'}</span>
        </button>

        {openVouchers && (
          <div className="submenu">
            <NavItem to="/vouchers/create" label="Create voucher" active={isActive('/vouchers/create')} small />
            <NavItem to="/vouchers/history" label="Voucher history" active={isActive('/vouchers/history')} small />
          </div>
        )}

        <NavItem to="/sessions" label="Sessions" active={isActive('/sessions')} />
        <NavItem to="/settings" label="Settings" active={isActive('/settings')} />
      </nav>
    </aside>
  )
}

type NavItemProps = {
  to: string
  label: string
  active: boolean
  small?: boolean
}

function NavItem({ to, label, active, small = false }: NavItemProps) {
  return (
    <Link className={`nav-item ${active ? 'active' : ''} ${small ? 'small' : ''}`} to={to}>
      {label}
    </Link>
  )
}
