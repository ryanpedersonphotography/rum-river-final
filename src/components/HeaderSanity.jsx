import { useEffect, useState } from 'react'
import { createClient } from '@sanity/client'
import { getClientConfig } from '../config/sanity.config'

// Sanity client
const client = createClient(getClientConfig('frontend'))

export default function HeaderSanity() {
  const [navigation, setNavigation] = useState(null)
  const [loading, setLoading] = useState(true)

  // Fetch navigation from Sanity
  useEffect(() => {
    const fetchNavigation = async () => {
      try {
        const data = await client.fetch(`
          *[_id == "mainNavigation"][0]{
            logo,
            menuItems[] {
              _key,
              label,
              link,
              isDropdown,
              dropdownItems[] {
                _key,
                label,
                link
              }
            }
          }
        `)
        console.log('Navigation data fetched:', data)
        setNavigation(data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching navigation:', error)
        setLoading(false)
      }
    }
    
    fetchNavigation()
  }, [])

  // Scroll handler for header styling
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header')
      if (header) {
        if (window.scrollY > 100) {
          header.classList.add('scrolled')
        } else {
          header.classList.remove('scrolled')
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fallback to hardcoded navigation if loading fails
  if (loading) {
    // Don't show loading state - just use hardcoded nav immediately
  }
  
  // If no navigation data, use fallback
  if (!navigation) {
    navigation = {
      logo: { line1: 'Rum River', line2: 'Wedding Barn', link: '/' },
      menuItems: [
        { _key: 'home', label: 'Home', link: '/', isDropdown: false },
        { _key: 'events', label: 'Events', link: '/events', isDropdown: false },
        { _key: 'vendor-list', label: 'Vendor List', link: '/vendor-list', isDropdown: false },
        { 
          _key: 'property', 
          label: 'The Property', 
          link: '/property', 
          isDropdown: true,
          dropdownItems: [
            { _key: 'location', label: 'Location', link: '/location' },
            { _key: 'history', label: 'History', link: '/history' }
          ]
        },
        { _key: 'gallery', label: 'Gallery', link: '/gallery', isDropdown: false },
        {
          _key: 'testimonials',
          label: 'Testimonials & Features',
          link: '/testimonials',
          isDropdown: true,
          dropdownItems: [
            { _key: 'testimonials-page', label: 'Testimonials', link: '/testimonials' },
            { _key: 'real-weddings', label: 'Real Weddings Blog', link: '/real-weddings' }
          ]
        },
        { _key: 'contact', label: 'Contact', link: '/contact', isDropdown: false }
      ]
    }
  }

  return (
    <header id="header" className="header-enhanced">
      <div className="content-wrapper">
        <div className="header-content">
          {/* Logo */}
          <a href={navigation.logo?.link || '/'} className="logo-wrapper">
            <div className="logo-text">
              <div className="logo-line-1">{navigation.logo?.line1 || 'Rum River'}</div>
              <div className="logo-line-2">{navigation.logo?.line2 || 'Wedding Barn'}</div>
            </div>
          </a>
          
          {/* Navigation Menu */}
          <nav>
            <ul className="nav-menu">
              {navigation.menuItems?.map((item) => (
                <li key={item._key} className={item.isDropdown ? 'dropdown' : ''}>
                  <a href={item.link}>
                    {item.label}
                    {item.isDropdown && ' ▾'}
                  </a>
                  
                  {/* Dropdown menu if exists */}
                  {item.isDropdown && item.dropdownItems && (
                    <ul className="dropdown-menu">
                      {item.dropdownItems.map((dropdownItem) => (
                        <li key={dropdownItem._key}>
                          <a href={dropdownItem.link}>{dropdownItem.label}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}