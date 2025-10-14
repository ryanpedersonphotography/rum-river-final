import { useState, useEffect, useRef } from 'react'
import { getHomePageContent } from '../lib/contentful'
import contentfulManagement from 'contentful-management'
import './AdminPanel.css'

export default function AdminPanel() {
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState(null)
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [imageUploads, setImageUploads] = useState({})
  const [expandedSections, setExpandedSections] = useState({
    hero: true,
    featureBlocks: false,
    experience: false,
    testimonials: false,
    uiTexts: false,
    venueDiscovery: false
  })
  const fileInputRefs = useRef({})

  // Simple authentication
  const ADMIN_PASSWORD = '1234' // Change this!

  useEffect(() => {
    // Check if already authenticated
    const auth = localStorage.getItem('adminAuth')
    if (auth === 'true') {
      setAuthenticated(true)
      loadContent()
    } else {
      setLoading(false)
    }
  }, [])

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem('adminAuth', 'true')
      setAuthenticated(true)
      loadContent()
    } else {
      setMessage({ type: 'error', text: 'Invalid password' })
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminAuth')
    setAuthenticated(false)
    setPassword('')
  }

  const loadContent = async () => {
    try {
      setLoading(true)
      const data = await getHomePageContent()
      setContent(data)
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to load content' })
    } finally {
      setLoading(false)
    }
  }

  const handleImageSelect = (key, file) => {
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setImageUploads(prev => ({
          ...prev,
          [key]: {
            file: file,
            preview: e.target.result
          }
        }))
      }
      reader.readAsDataURL(file)
    }
  }

  const uploadImage = async (client, space, environment, file, title) => {
    try {
      // Create upload
      const upload = await environment.createUpload({
        file: file
      })
      
      // Create or update asset
      const asset = await environment.createAsset({
        fields: {
          title: { 'en-US': title },
          file: {
            'en-US': {
              contentType: file.type,
              fileName: file.name,
              uploadFrom: {
                sys: {
                  type: 'Link',
                  linkType: 'Upload',
                  id: upload.sys.id
                }
              }
            }
          }
        }
      })
      
      // Process and publish
      const processedAsset = await asset.processForAllLocales()
      const publishedAsset = await processedAsset.publish()
      
      return publishedAsset
    } catch (error) {
      console.error('Failed to upload image:', error)
      throw error
    }
  }

  const saveToContentful = async () => {
    try {
      setSaving(true)
      setMessage({ type: 'info', text: 'Saving...' })
      
      // For security, we should use an environment variable or API endpoint
      // For now, we'll use a hardcoded token (in production, this should come from a secure backend)
      const MANAGEMENT_TOKEN = import.meta.env.VITE_CONTENTFUL_MANAGEMENT_TOKEN
      
      const client = contentfulManagement.createClient({
        accessToken: MANAGEMENT_TOKEN
      })
      
      const space = await client.getSpace(import.meta.env.VITE_CONTENTFUL_SPACE_ID)
      const environment = await space.getEnvironment('master')
      
      // Upload any new images first
      const uploadedAssets = {}
      for (const [key, upload] of Object.entries(imageUploads)) {
        if (upload.file) {
          setMessage({ type: 'info', text: `Uploading ${upload.file.name}...` })
          const asset = await uploadImage(client, space, environment, upload.file, key)
          uploadedAssets[key] = asset.sys.id
        }
      }
      
      // Get HomePage entry
      const entries = await environment.getEntries({
        content_type: 'homePage',
        limit: 1
      })
      
      if (entries.items.length === 0) {
        throw new Error('HomePage entry not found')
      }
      
      const homePage = entries.items[0]
      
      // Update fields
      homePage.fields.heroScriptAccent = { 'en-US': content.hero.scriptAccent }
      homePage.fields.heroTitleLine1 = { 'en-US': content.hero.titleLine1 }
      homePage.fields.heroTitleLine2 = { 'en-US': content.hero.titleLine2 }
      homePage.fields.heroDescription = { 'en-US': content.hero.description }
      homePage.fields.heroCtaText = { 'en-US': content.hero.ctaText }
      homePage.fields.heroCtaLink = { 'en-US': content.hero.ctaLink }
      
      homePage.fields.featureScriptAccent = { 'en-US': content.featureBlocks.scriptAccent }
      homePage.fields.featureTitle = { 'en-US': content.featureBlocks.title }
      homePage.fields.featureLead = { 'en-US': content.featureBlocks.lead }
      
      homePage.fields.experienceScriptAccent = { 'en-US': content.experience.scriptAccent }
      homePage.fields.experienceTitle = { 'en-US': content.experience.title }
      homePage.fields.experienceDescription = { 'en-US': content.experience.description }
      
      homePage.fields.loveStoriesScriptAccent = { 'en-US': content.loveStories.scriptAccent }
      homePage.fields.loveStoriesTitle = { 'en-US': content.loveStories.title }
      homePage.fields.loveStoriesLead = { 'en-US': content.loveStories.lead }
      
      homePage.fields.testimonialsScriptAccent = { 'en-US': content.testimonials.scriptAccent }
      homePage.fields.testimonialsTitle = { 'en-US': content.testimonials.title }
      
      // Add UI text fields if they exist
      if (content.uiTexts) {
        homePage.fields.heroScrollText = { 'en-US': content.uiTexts.heroScrollText || 'Discover Your Perfect Day' }
        homePage.fields.floatingCtaText = { 'en-US': content.uiTexts.floatingCtaText || 'Schedule Your Tour' }
        homePage.fields.floatingCtaIcon = { 'en-US': content.uiTexts.floatingCtaIcon || 'calendar' }
        homePage.fields.galleryCtaText = { 'en-US': content.uiTexts.galleryCtaText || 'View All Real Weddings' }
        homePage.fields.galleryCtaLink = { 'en-US': content.uiTexts.galleryCtaLink || '/real-weddings' }
        homePage.fields.starRatingEnabled = { 'en-US': content.uiTexts.starRatingEnabled !== undefined ? content.uiTexts.starRatingEnabled : true }
        homePage.fields.starCount = { 'en-US': content.uiTexts.starCount || 5 }
        homePage.fields.loadingText = { 'en-US': content.uiTexts.loadingText || 'Loading page content...' }
        homePage.fields.errorTitle = { 'en-US': content.uiTexts.errorTitle || 'Unable to load page content' }
        homePage.fields.errorDescription = { 'en-US': content.uiTexts.errorDescription || 'Please try refreshing the page' }
      }
      
      // Link uploaded images to feature blocks if any
      if (uploadedAssets['featureBlock0']) {
        const blocks = await environment.getEntries({
          content_type: 'featureBlock',
          'fields.number[in]': '01'
        })
        if (blocks.items.length > 0) {
          const block = blocks.items[0]
          block.fields.image = {
            'en-US': {
              sys: { type: 'Link', linkType: 'Asset', id: uploadedAssets['featureBlock0'] }
            }
          }
          await block.update()
          await block.publish()
        }
      }
      
      if (uploadedAssets['featureBlock1']) {
        const blocks = await environment.getEntries({
          content_type: 'featureBlock',
          'fields.number[in]': '02'
        })
        if (blocks.items.length > 0) {
          const block = blocks.items[0]
          block.fields.image = {
            'en-US': {
              sys: { type: 'Link', linkType: 'Asset', id: uploadedAssets['featureBlock1'] }
            }
          }
          await block.update()
          await block.publish()
        }
      }
      
      if (uploadedAssets['experienceImage']) {
        homePage.fields.experienceImage = {
          'en-US': {
            sys: { type: 'Link', linkType: 'Asset', id: uploadedAssets['experienceImage'] }
          }
        }
      }
      
      if (uploadedAssets['heroImage']) {
        homePage.fields.heroBackgroundImage = {
          'en-US': {
            sys: { type: 'Link', linkType: 'Asset', id: uploadedAssets['heroImage'] }
          }
        }
      }
      
      await homePage.update()
      await homePage.publish()
      
      setMessage({ type: 'success', text: 'Content saved successfully!' })
      
    } catch (error) {
      console.error('Save error:', error)
      setMessage({ type: 'error', text: 'Failed to save content' })
    } finally {
      setSaving(false)
    }
  }

  const updateField = (section, field, value) => {
    setContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }))
  }

  const updateFeatureBlock = (index, field, value) => {
    setContent(prev => ({
      ...prev,
      featureBlocks: {
        ...prev.featureBlocks,
        blocks: prev.featureBlocks.blocks.map((block, i) => 
          i === index ? { ...block, [field]: value } : block
        )
      }
    }))
  }

  const updateTestimonial = (index, field, value) => {
    setContent(prev => ({
      ...prev,
      testimonials: {
        ...prev.testimonials,
        items: prev.testimonials.items.map((item, i) => 
          i === index ? { ...item, [field]: value } : item
        )
      }
    }))
  }

  const toggleSection = (sectionName) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionName]: !prev[sectionName]
    }))
  }

  if (!authenticated) {
    return (
      <div className="admin-login">
        <div className="login-container">
          <h1>Admin Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
            />
            <button type="submit">Login</button>
          </form>
          {message && (
            <div className={`message ${message.type}`}>
              {message.text}
            </div>
          )}
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="admin-panel">
        <div className="loading">Loading content...</div>
      </div>
    )
  }

  if (!content) {
    return (
      <div className="admin-panel">
        <div className="error">Failed to load content</div>
      </div>
    )
  }

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h1>Rum River Admin</h1>
        <div className="admin-actions">
          <button onClick={() => window.location.href = '/admin/weddings'} className="nav-btn">
            📸 Manage Weddings
          </button>
          <button onClick={() => window.location.href = '/admin/venues'} className="nav-btn">
            🏛️ Manage Venues
          </button>
          <button onClick={loadContent} disabled={saving}>
            ↻ Reload
          </button>
          <button onClick={saveToContentful} disabled={saving} className="save-btn">
            {saving ? 'Saving...' : '💾 Save to Contentful'}
          </button>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </div>

      {message && (
        <div className={`message ${message.type}`}>
          {message.text}
        </div>
      )}

      <div className="admin-content">
        {/* Hero Section */}
        <section className="admin-section">
          <div className="section-header" onClick={() => toggleSection('hero')}>
            <h2>Hero Section</h2>
            <button type="button" className="accordion-toggle">
              {expandedSections.hero ? '−' : '+'}
            </button>
          </div>
          {expandedSections.hero && (<div className="section-content">
          <div className="form-group">
            <label>Script Accent</label>
            <input
              type="text"
              value={content.hero.scriptAccent}
              onChange={(e) => updateField('hero', 'scriptAccent', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Title Line 1</label>
            <input
              type="text"
              value={content.hero.titleLine1}
              onChange={(e) => updateField('hero', 'titleLine1', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Title Line 2</label>
            <input
              type="text"
              value={content.hero.titleLine2}
              onChange={(e) => updateField('hero', 'titleLine2', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              value={content.hero.description}
              onChange={(e) => updateField('hero', 'description', e.target.value)}
              rows="3"
            />
          </div>
          <div className="form-group">
            <label>CTA Button Text</label>
            <input
              type="text"
              value={content.hero.ctaText}
              onChange={(e) => updateField('hero', 'ctaText', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>CTA Button Link</label>
            <input
              type="text"
              value={content.hero.ctaLink}
              onChange={(e) => updateField('hero', 'ctaLink', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Hero Background Image</label>
            <div className="image-upload-container">
              {(imageUploads['heroImage']?.preview || content.hero.backgroundImage) ? (
                <div className="image-preview">
                  <img 
                    src={imageUploads['heroImage']?.preview || (content.hero.backgroundImage ? `https:${content.hero.backgroundImage}` : '')} 
                    alt="Hero background"
                  />
                </div>
              ) : (
                <div className="image-placeholder">
                  <span>No image uploaded</span>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                ref={el => fileInputRefs.current['heroImage'] = el}
                onChange={(e) => handleImageSelect('heroImage', e.target.files[0])}
                style={{ display: 'none' }}
              />
              <button 
                type="button"
                className="upload-btn"
                onClick={() => fileInputRefs.current['heroImage']?.click()}
              >
                {(imageUploads['heroImage'] || content.hero.backgroundImage) ? 'Change Image' : 'Upload Image'}
              </button>
              {imageUploads['heroImage'] && (
                <button 
                  type="button"
                  className="remove-btn"
                  onClick={() => {
                    setImageUploads(prev => {
                      const next = { ...prev }
                      delete next['heroImage']
                      return next
                    })
                  }}
                >
                  Remove
                </button>
              )}
            </div>
          </div>
          </div>
          )}
        </section>

        {/* Feature Blocks */}
        <section className="admin-section">
          <div className="section-header" onClick={() => toggleSection('featureBlocks')}>
            <h2>Feature Blocks</h2>
            <button type="button" className="accordion-toggle">
              {expandedSections.featureBlocks ? '−' : '+'}
            </button>
          </div>
          {expandedSections.featureBlocks && (<div className="section-content">
          <p className="section-description">
            These are the main content blocks that appear on your homepage, highlighting what makes your venue special.
          </p>
          <div className="form-group">
            <label>Section Accent</label>
            <input
              type="text"
              value={content.featureBlocks.scriptAccent}
              onChange={(e) => updateField('featureBlocks', 'scriptAccent', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Section Title</label>
            <input
              type="text"
              value={content.featureBlocks.title}
              onChange={(e) => updateField('featureBlocks', 'title', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Section Lead</label>
            <textarea
              value={content.featureBlocks.lead}
              onChange={(e) => updateField('featureBlocks', 'lead', e.target.value)}
              rows="2"
            />
          </div>
          
          {content.featureBlocks.blocks.map((block, index) => {
            // Create better names for each block
            const blockNames = {
              '01': 'Special Event Location',
              '02': 'Rum River Barn & Vineyard'
            }
            const blockName = blockNames[block.number] || `Block ${block.number}`
            
            return (
              <div key={index} className="sub-section">
                <h3>{blockName}</h3>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  value={block.title}
                  onChange={(e) => updateFeatureBlock(index, 'title', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Lead Text</label>
                <input
                  type="text"
                  value={block.lead}
                  onChange={(e) => updateFeatureBlock(index, 'lead', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Content</label>
                <textarea
                  value={block.content}
                  onChange={(e) => updateFeatureBlock(index, 'content', e.target.value)}
                  rows="4"
                />
              </div>
              <div className="form-group">
                <label>Image</label>
                <div className="image-upload-container">
                  {(imageUploads[`featureBlock${index}`]?.preview || block.image) ? (
                    <div className="image-preview">
                      <img 
                        src={imageUploads[`featureBlock${index}`]?.preview || (block.image ? `https:${block.image}` : '')} 
                        alt={block.imageAlt || 'Feature block image'}
                      />
                    </div>
                  ) : (
                    <div className="image-placeholder">
                      <span>No image uploaded</span>
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    ref={el => fileInputRefs.current[`featureBlock${index}`] = el}
                    onChange={(e) => handleImageSelect(`featureBlock${index}`, e.target.files[0])}
                    style={{ display: 'none' }}
                  />
                  <button 
                    type="button"
                    className="upload-btn"
                    onClick={() => fileInputRefs.current[`featureBlock${index}`]?.click()}
                  >
                    {(imageUploads[`featureBlock${index}`] || block.image) ? 'Change Image' : 'Upload Image'}
                  </button>
                  {imageUploads[`featureBlock${index}`] && (
                    <button 
                      type="button"
                      className="remove-btn"
                      onClick={() => {
                        setImageUploads(prev => {
                          const next = { ...prev }
                          delete next[`featureBlock${index}`]
                          return next
                        })
                      }}
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
              </div>
            )
          })}
          </div>
          )}
        </section>

        {/* Experience Section */}
        <section className="admin-section">
          <div className="section-header" onClick={() => toggleSection('experience')}>
            <h2>Experience Section</h2>
            <button type="button" className="accordion-toggle">
              {expandedSections.experience ? '−' : '+'}
            </button>
          </div>
          {expandedSections.experience && (<div className="section-content">
          <p className="section-description">
            This section describes the overall experience couples will have at your venue.
          </p>
          <div className="form-group">
            <label>Script Accent</label>
            <input
              type="text"
              value={content.experience.scriptAccent}
              onChange={(e) => updateField('experience', 'scriptAccent', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              value={content.experience.title}
              onChange={(e) => updateField('experience', 'title', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              value={content.experience.description}
              onChange={(e) => updateField('experience', 'description', e.target.value)}
              rows="3"
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <div className="image-upload-container">
              {(imageUploads['experienceImage']?.preview || content.experience.image) ? (
                <div className="image-preview">
                  <img 
                    src={imageUploads['experienceImage']?.preview || (content.experience.image ? `https:${content.experience.image}` : '')} 
                    alt="Experience section"
                  />
                </div>
              ) : (
                <div className="image-placeholder">
                  <span>No image uploaded</span>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                ref={el => fileInputRefs.current['experienceImage'] = el}
                onChange={(e) => handleImageSelect('experienceImage', e.target.files[0])}
                style={{ display: 'none' }}
              />
              <button 
                type="button"
                className="upload-btn"
                onClick={() => fileInputRefs.current['experienceImage']?.click()}
              >
                {(imageUploads['experienceImage'] || content.experience.image) ? 'Change Image' : 'Upload Image'}
              </button>
              {imageUploads['experienceImage'] && (
                <button 
                  type="button"
                  className="remove-btn"
                  onClick={() => {
                    setImageUploads(prev => {
                      const next = { ...prev }
                      delete next['experienceImage']
                      return next
                    })
                  }}
                >
                  Remove
                </button>
              )}
            </div>
          </div>
          </div>
          )}
        </section>

        {/* Testimonials */}
        <section className="admin-section">
          <div className="section-header" onClick={() => toggleSection('testimonials')}>
            <h2>Testimonials</h2>
            <button type="button" className="accordion-toggle">
              {expandedSections.testimonials ? '−' : '+'}
            </button>
          </div>
          {expandedSections.testimonials && (<div className="section-content">
          <p className="section-description">
            Customer reviews and testimonials from couples who have celebrated at your venue.
          </p>
          <div className="form-group">
            <label>Script Accent</label>
            <input
              type="text"
              value={content.testimonials.scriptAccent}
              onChange={(e) => updateField('testimonials', 'scriptAccent', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              value={content.testimonials.title}
              onChange={(e) => updateField('testimonials', 'title', e.target.value)}
            />
          </div>
          
          {content.testimonials.items.map((item, index) => {
            // Create better names for testimonials using author names
            const testimonialName = item.authorName ? 
              `${item.authorName.split('&')[0].trim()}'s Review` : 
              `Testimonial ${index + 1}`
            
            return (
              <div key={index} className="sub-section">
                <h3>{testimonialName}</h3>
              <div className="form-group">
                <label>Quote</label>
                <textarea
                  value={item.quote}
                  onChange={(e) => updateTestimonial(index, 'quote', e.target.value)}
                  rows="3"
                />
              </div>
              <div className="form-group">
                <label>Author Name</label>
                <input
                  type="text"
                  value={item.authorName}
                  onChange={(e) => updateTestimonial(index, 'authorName', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Author Detail</label>
                <input
                  type="text"
                  value={item.authorDetail}
                  onChange={(e) => updateTestimonial(index, 'authorDetail', e.target.value)}
                />
              </div>
              </div>
            );
          })}
          </div>
          )}
        </section>

        {/* UI Texts Section */}
        <section className="admin-section">
          <div className="section-header" onClick={() => toggleSection('uiTexts')}>
            <h2>UI Texts & Settings</h2>
            <button type="button" className="accordion-toggle">
              {expandedSections.uiTexts ? '−' : '+'}
            </button>
          </div>
          {expandedSections.uiTexts && (<div className="section-content">
          <p className="section-description">
            Manage various UI text elements and settings that appear throughout the homepage.
          </p>
          
          <h3>Hero Section</h3>
          <div className="form-group">
            <label>Scroll Indicator Text</label>
            <input
              type="text"
              value={content.uiTexts?.heroScrollText || ''}
              onChange={(e) => updateField('uiTexts', 'heroScrollText', e.target.value)}
              placeholder="Discover Your Perfect Day"
            />
          </div>

          <h3>Floating CTA Button</h3>
          <div className="form-group">
            <label>Button Text</label>
            <input
              type="text"
              value={content.uiTexts?.floatingCtaText || ''}
              onChange={(e) => updateField('uiTexts', 'floatingCtaText', e.target.value)}
              placeholder="Schedule Your Tour"
            />
          </div>
          <div className="form-group">
            <label>Button Icon</label>
            <select
              value={content.uiTexts?.floatingCtaIcon || 'calendar'}
              onChange={(e) => updateField('uiTexts', 'floatingCtaIcon', e.target.value)}
            >
              <option value="calendar">Calendar</option>
              <option value="phone">Phone</option>
              <option value="email">Email</option>
              <option value="location">Location</option>
              <option value="heart">Heart</option>
            </select>
          </div>

          <h3>Gallery Section</h3>
          <div className="form-group">
            <label>Gallery CTA Button Text</label>
            <input
              type="text"
              value={content.uiTexts?.galleryCtaText || ''}
              onChange={(e) => updateField('uiTexts', 'galleryCtaText', e.target.value)}
              placeholder="View All Real Weddings"
            />
          </div>
          <div className="form-group">
            <label>Gallery CTA Link</label>
            <input
              type="text"
              value={content.uiTexts?.galleryCtaLink || ''}
              onChange={(e) => updateField('uiTexts', 'galleryCtaLink', e.target.value)}
              placeholder="/real-weddings"
            />
          </div>

          <h3>Star Ratings</h3>
          <div className="form-group">
            <label>
              <input
                type="checkbox"
                checked={content.uiTexts?.starRatingEnabled !== false}
                onChange={(e) => updateField('uiTexts', 'starRatingEnabled', e.target.checked)}
              />
              Show Star Ratings on Testimonials
            </label>
          </div>
          <div className="form-group">
            <label>Number of Stars</label>
            <input
              type="number"
              min="1"
              max="5"
              value={content.uiTexts?.starCount || 5}
              onChange={(e) => updateField('uiTexts', 'starCount', parseInt(e.target.value))}
            />
          </div>

          <h3>Loading & Error States</h3>
          <div className="form-group">
            <label>Loading Message</label>
            <input
              type="text"
              value={content.uiTexts?.loadingText || ''}
              onChange={(e) => updateField('uiTexts', 'loadingText', e.target.value)}
              placeholder="Loading page content..."
            />
          </div>
          <div className="form-group">
            <label>Error Title</label>
            <input
              type="text"
              value={content.uiTexts?.errorTitle || ''}
              onChange={(e) => updateField('uiTexts', 'errorTitle', e.target.value)}
              placeholder="Unable to load page content"
            />
          </div>
          <div className="form-group">
            <label>Error Description</label>
            <input
              type="text"
              value={content.uiTexts?.errorDescription || ''}
              onChange={(e) => updateField('uiTexts', 'errorDescription', e.target.value)}
              placeholder="Please try refreshing the page"
            />
          </div>
          </div>
          )}
        </section>

        {/* Venue Discovery Section */}
        <section className="admin-section">
          <div className="section-header" onClick={() => toggleSection('venueDiscovery')}>
            <h2>Venue Discovery - Your Dream Venue Awaits</h2>
            <button type="button" className="accordion-toggle">
              {expandedSections.venueDiscovery ? '−' : '+'}
            </button>
          </div>
          {expandedSections.venueDiscovery && (<div className="section-content">
          <p className="section-description">
            Manage the venue discovery section text. Note: Individual venue details are managed in Contentful.
          </p>
          
          <div className="form-group">
            <label>Script Accent</label>
            <input
              type="text"
              value={content.venueDiscovery?.scriptAccent || ''}
              onChange={(e) => updateField('venueDiscovery', 'scriptAccent', e.target.value)}
              placeholder="Discover Our Spaces"
            />
          </div>
          
          <div className="form-group">
            <label>Section Title</label>
            <input
              type="text"
              value={content.venueDiscovery?.title || ''}
              onChange={(e) => updateField('venueDiscovery', 'title', e.target.value)}
              placeholder="Your Dream Venue Awaits"
            />
          </div>
          
          <div className="form-group">
            <label>Section Description</label>
            <textarea
              value={content.venueDiscovery?.lead || ''}
              onChange={(e) => updateField('venueDiscovery', 'lead', e.target.value)}
              rows="3"
              placeholder="Explore our stunning spaces through interactive 360° virtual tours..."
            />
          </div>
          
          <div className="venue-management-section">
            <h4>Manage Individual Venues</h4>
            <p>Edit venue details, upload images, and manage features for each space.</p>
            <button 
              type="button"
              className="btn-primary"
              onClick={() => window.location.href = '/admin/venues'}
              style={{ marginTop: '1rem' }}
            >
              Manage All Venues →
            </button>
            
            <div className="venue-quick-info" style={{ marginTop: '2rem' }}>
              <p><strong>Available Venues:</strong></p>
              <ul style={{ marginLeft: '20px', listStyle: 'disc' }}>
                <li>The Historic Barn</li>
                <li>Reception Area</li>
                <li>Bridal Suite</li>
                <li>Groom's Quarters</li>
                <li>Vineyard</li>
              </ul>
            </div>
          </div>
          </div>
          )}
        </section>
      </div>

      {/* Floating save button */}
      <button 
        className="floating-save"
        onClick={saveToContentful}
        disabled={saving}
      >
        {saving ? '...' : '💾'}
      </button>
    </div>
  )
}