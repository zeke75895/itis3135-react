import { NavLink } from 'react-router-dom'

const navLinkStyle = ({ isActive }) => ({
  color: isActive ? '#fff' : '#c0581a',
  background: isActive ? '#c0581a' : 'rgba(192,88,26,0.06)',
  padding: '8px 12px',
  borderRadius: '6px',
  textDecoration: 'none',
})

export default function Header() {
  return (
    <header>
      <h1>Observant Kangaroo's Outback Emporium</h1>
      <nav aria-label="Primary Navigation">
        <NavLink end to="/" style={navLinkStyle}>Home</NavLink>
        <NavLink to="/intro_form" style={navLinkStyle}>Introduction Form</NavLink>
        <NavLink to="/contract" style={navLinkStyle}>Contract</NavLink>
        <NavLink to="/survey" style={navLinkStyle}>Survey</NavLink>
        <NavLink to="/cards" style={navLinkStyle}>Cards</NavLink>
        <NavLink to="/inventory" style={navLinkStyle}>Inventory</NavLink>
        <NavLink to="/documentation" style={navLinkStyle}>Documentation</NavLink>
        <NavLink to="/product" style={navLinkStyle}>Product</NavLink>
        <NavLink to="/slideshow" style={navLinkStyle}>Slideshow</NavLink>
      </nav>
      <nav aria-label="Secondary Navigation">
        <NavLink to="/website_evaluations" style={navLinkStyle}>Site Evaluations</NavLink>
        <NavLink to="/hobby" style={navLinkStyle}>Hobby</NavLink>
      </nav>
    </header>
  )
}
