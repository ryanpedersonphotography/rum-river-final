import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  getWeddingBlogs, 
  createWeddingBlog, 
  updateWeddingBlog, 
  deleteWeddingBlog,
  testConnection,
  uploadImage,
  updateWeddingImages
} from '../lib/contentful-management.js'
import './AdminPanel.css'

export default function AdminWeddings() {
  const navigate = useNavigate()
  const [authenticated, setAuthenticated] = useState(false)
  const [selectedWedding, setSelectedWedding] = useState(null)
  const [editingWedding, setEditingWedding] = useState(null)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState(null)
  const [weddings, setWeddings] = useState([])
  const [loading, setLoading] = useState(true)
  const [uploadingImages, setUploadingImages] = useState(false)
  const [uploadProgress, setUploadProgress] = useState('')
  const [imageUploads, setImageUploads] = useState({
    heroImage: null,
    coverImage: null,
    featuredImage: null,
    galleryPhotos: []
  })
  const fileInputRefs = useRef({})
  
  const refetch = async () => {
    setLoading(true)
    try {
      const weddingData = await getWeddingBlogs()
      setWeddings(weddingData)
    } catch (error) {
      console.error('Failed to fetch weddings:', error)
      setMessage({ type: 'error', text: 'Failed to load weddings' })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // Check authentication
    const auth = localStorage.getItem('adminAuth')
    if (auth !== 'true') {
      navigate('/admin')
      return
    }
    setAuthenticated(true)
    checkConnection()
  }, [navigate])

  const checkConnection = async () => {
    try {
      const connected = await testConnection()
      if (!connected) {
        setMessage({ type: 'error', text: 'Failed to connect to Contentful' })
      } else {
        // Load weddings after successful connection
        await refetch()
      }
    } catch (error) {
      console.error('Connection check failed:', error)
      setMessage({ type: 'error', text: `Failed to connect to Contentful: ${error.message}` })
      setLoading(false)
    }
  }

  const handleNewWedding = () => {
    const newWedding = {
      isNew: true,
      title: '',
      slug: '',
      coupleName: '',
      weddingDate: new Date().toISOString().split('T')[0],
      publishedDate: new Date().toISOString().split('T')[0],
      location: 'Rum River Barn • Hillman, Minnesota',
      season: 'Summer 2025',
      introText: '',
      featured: false,
      photoCredits: '',
      guestCount: 150,
      testimonial: '',
      vendors: {},
      tags: ['barn', 'rustic', 'minnesota']
    }
    setEditingWedding(newWedding)
    setSelectedWedding(null)
  }

  const handleEditWedding = (wedding) => {
    setEditingWedding({
      ...wedding,
      weddingDate: wedding.weddingDate || new Date().toISOString().split('T')[0],
      publishedDate: wedding.publishedDate || new Date().toISOString().split('T')[0],
      vendors: wedding.vendors || {},
      tags: wedding.tags || []
    })
    setSelectedWedding(null)
    // Reset image uploads when editing a different wedding
    setImageUploads({
      heroImage: null,
      coverImage: null,
      featuredImage: null,
      galleryPhotos: []
    })
  }

  const handleImageSelect = (type, files) => {
    if (type === 'gallery') {
      // For gallery, handle multiple files (up to 35)
      const fileArray = Array.from(files).slice(0, 35)
      setImageUploads(prev => ({
        ...prev,
        galleryPhotos: fileArray
      }))
      // Alert if more than 35 files were selected
      if (files.length > 35) {
        alert(`Only the first 35 photos were selected (${files.length} files provided)`)
      }
    } else {
      // For single images (hero, cover, featured)
      const file = files[0]
      if (file) {
        setImageUploads(prev => ({
          ...prev,
          [type]: file
        }))
      }
    }
  }

  const handleUploadImages = async () => {
    if (!editingWedding) return
    
    try {
      setUploadingImages(true)
      const imageAssetIds = {}
      let totalImages = 0
      let uploadedImages = 0
      
      // Count total images to upload
      if (imageUploads.heroImage) totalImages++
      if (imageUploads.coverImage) totalImages++
      if (imageUploads.featuredImage) totalImages++
      totalImages += imageUploads.galleryPhotos.length
      
      if (totalImages === 0) {
        alert('No images selected to upload')
        setUploadingImages(false)
        return
      }
      
      // Upload hero image
      if (imageUploads.heroImage) {
        setUploadProgress(`Uploading hero image (${uploadedImages + 1}/${totalImages})...`)
        const asset = await uploadImage(imageUploads.heroImage, `${editingWedding.coupleName} - Hero Image`)
        imageAssetIds.heroImage = asset.id
        uploadedImages++
      }
      
      // Upload cover image
      if (imageUploads.coverImage) {
        setUploadProgress(`Uploading cover image (${uploadedImages + 1}/${totalImages})...`)
        const asset = await uploadImage(imageUploads.coverImage, `${editingWedding.coupleName} - Cover Image`)
        imageAssetIds.coverImage = asset.id
        uploadedImages++
      }
      
      // Upload featured image
      if (imageUploads.featuredImage) {
        setUploadProgress(`Uploading featured image (${uploadedImages + 1}/${totalImages})...`)
        const asset = await uploadImage(imageUploads.featuredImage, `${editingWedding.coupleName} - Featured Image`)
        imageAssetIds.featuredImage = asset.id
        uploadedImages++
      }
      
      // Upload gallery photos
      if (imageUploads.galleryPhotos.length > 0) {
        imageAssetIds.photos = []
        for (let i = 0; i < imageUploads.galleryPhotos.length; i++) {
          setUploadProgress(`Uploading gallery photo ${i + 1} of ${imageUploads.galleryPhotos.length} (${uploadedImages + 1}/${totalImages})...`)
          const asset = await uploadImage(
            imageUploads.galleryPhotos[i], 
            `${editingWedding.coupleName} - Photo ${i + 1}`
          )
          imageAssetIds.photos.push(asset.id)
          uploadedImages++
        }
      }
      
      // Update wedding with image references
      if (Object.keys(imageAssetIds).length > 0) {
        setUploadProgress('Linking images to wedding...')
        
        // Find the wedding to get its Contentful ID and version
        const managementWeddings = await getWeddingBlogs()
        const existingWedding = managementWeddings.find(w => w.slug === editingWedding.slug)
        
        if (existingWedding) {
          await updateWeddingImages(existingWedding.id, existingWedding.version, imageAssetIds)
          
          // Update local version number to prevent version conflicts
          setEditingWedding(prev => ({ ...prev, version: existingWedding.version + 1 }))
          
          // Clear uploads
          setImageUploads({
            heroImage: null,
            coverImage: null,
            featuredImage: null,
            galleryPhotos: []
          })
          
          // Clear file inputs
          Object.values(fileInputRefs.current).forEach(input => {
            if (input) input.value = ''
          })
          
          // Refresh wedding data
          await refetch()
          
          setMessage({ type: 'success', text: 'Images uploaded and linked successfully!' })
        } else {
          throw new Error('Wedding not found. Please save the wedding first.')
        }
      }
      
    } catch (error) {
      console.error('Upload error:', error)
      setMessage({ type: 'error', text: `Failed to upload images: ${error.message}` })
    } finally {
      setUploadingImages(false)
      setUploadProgress('')
    }
  }

  const handleDeleteWedding = async (wedding) => {
    if (!confirm(`Are you sure you want to delete "${wedding.coupleName}'s Wedding"?`)) {
      return
    }

    try {
      setSaving(true)
      setMessage({ type: 'info', text: 'Deleting wedding...' })
      
      // Find the wedding with its Contentful ID
      const managementWeddings = await getWeddingBlogs()
      const weddingToDelete = managementWeddings.find(w => w.slug === wedding.slug)
      
      if (weddingToDelete) {
        await deleteWeddingBlog(weddingToDelete.id)
        setMessage({ type: 'success', text: 'Wedding deleted successfully!' })
        refetch()
      } else {
        setMessage({ type: 'error', text: 'Wedding not found' })
      }
    } catch (error) {
      console.error('Delete error:', error)
      setMessage({ type: 'error', text: 'Failed to delete wedding' })
    } finally {
      setSaving(false)
    }
  }

  const handleSaveWedding = async () => {
    try {
      setSaving(true)
      setMessage({ type: 'info', text: 'Saving wedding...' })
      
      const entryData = {
        title: editingWedding.title || `${editingWedding.coupleName}'s Wedding`,
        slug: editingWedding.slug,
        coupleName: editingWedding.coupleName,
        weddingDate: editingWedding.weddingDate,
        publishedDate: editingWedding.publishedDate,
        location: editingWedding.location,
        season: editingWedding.season,
        introText: editingWedding.introText,
        featured: editingWedding.featured || false
      }
      
      // Add optional fields
      if (editingWedding.photoCredits) {
        entryData.photoCredits = editingWedding.photoCredits
      }
      if (editingWedding.testimonial) {
        entryData.testimonial = editingWedding.testimonial
      }
      if (editingWedding.guestCount) {
        entryData.guestCount = parseInt(editingWedding.guestCount)
      }
      if (editingWedding.tags && editingWedding.tags.length > 0) {
        entryData.tags = editingWedding.tags
      }
      if (editingWedding.vendors && Object.keys(editingWedding.vendors).length > 0) {
        entryData.vendors = editingWedding.vendors
      }
      
      // Generate SEO fields
      const season = editingWedding.season.replace(/[0-9]/g, '').trim()
      entryData.seoTitle = `${editingWedding.coupleName}'s ${editingWedding.season} Wedding at Rum River Barn`
      entryData.seoDescription = `Beautiful ${season.toLowerCase()} wedding photos from ${editingWedding.coupleName} at Rum River Barn.`.substring(0, 160)
      
      if (editingWedding.isNew) {
        // Create new entry
        await createWeddingBlog(entryData)
      } else {
        // Update existing entry - find it first to get the version
        const managementWeddings = await getWeddingBlogs()
        const existingWedding = managementWeddings.find(w => w.slug === editingWedding.slug)
        
        if (existingWedding) {
          await updateWeddingBlog(existingWedding.id, existingWedding.version, entryData)
        } else {
          throw new Error('Wedding not found')
        }
      }
      
      setMessage({ type: 'success', text: 'Wedding saved successfully!' })
      setEditingWedding(null)
      refetch()
      
    } catch (error) {
      console.error('Save error:', error)
      setMessage({ type: 'error', text: 'Failed to save wedding' })
    } finally {
      setSaving(false)
    }
  }

  const updateEditingField = (field, value) => {
    setEditingWedding(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const addVendor = () => {
    const vendorType = prompt('Enter vendor type (e.g., photography, florals, catering):')
    if (vendorType) {
      const vendorName = prompt('Enter vendor name:')
      const vendorUrl = prompt('Enter vendor website URL (optional):')
      
      setEditingWedding(prev => ({
        ...prev,
        vendors: {
          ...prev.vendors,
          [vendorType]: {
            name: vendorName,
            url: vendorUrl || ''
          }
        }
      }))
    }
  }

  const removeVendor = (vendorType) => {
    setEditingWedding(prev => {
      const vendors = { ...prev.vendors }
      delete vendors[vendorType]
      return { ...prev, vendors }
    })
  }

  if (!authenticated) {
    return null
  }

  if (loading) {
    return (
      <div className="admin-panel">
        <div className="loading">Loading weddings...</div>
      </div>
    )
  }

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h1>Wedding Blogs Management</h1>
        <div className="admin-actions">
          <button onClick={() => navigate('/admin')}>
            ← Back to Admin
          </button>
          <button onClick={handleNewWedding} className="save-btn">
            + New Wedding
          </button>
        </div>
      </div>

      {message && (
        <div className={`message ${message.type}`}>
          {message.text}
        </div>
      )}

      <div className="admin-content">
        {editingWedding ? (
          <div className="wedding-editor">
            <h2>{editingWedding.isNew ? 'New Wedding' : `Edit: ${editingWedding.coupleName}`}</h2>
            
            <div className="form-group">
              <label>Couple Name*</label>
              <input
                type="text"
                value={editingWedding.coupleName}
                onChange={(e) => updateEditingField('coupleName', e.target.value)}
                placeholder="e.g., Sarah & Michael"
              />
            </div>

            <div className="form-group">
              <label>URL Slug*</label>
              <input
                type="text"
                value={editingWedding.slug}
                onChange={(e) => updateEditingField('slug', e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-'))}
                placeholder="e.g., sarah-michael-summer-2025"
              />
              <small>URL: /real-weddings/{editingWedding.slug || 'slug-here'}</small>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Wedding Date*</label>
                <input
                  type="date"
                  value={editingWedding.weddingDate}
                  onChange={(e) => updateEditingField('weddingDate', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Season*</label>
                <input
                  type="text"
                  value={editingWedding.season}
                  onChange={(e) => updateEditingField('season', e.target.value)}
                  placeholder="e.g., Summer 2025"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Location*</label>
              <input
                type="text"
                value={editingWedding.location}
                onChange={(e) => updateEditingField('location', e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Introduction Text*</label>
              <textarea
                value={editingWedding.introText}
                onChange={(e) => updateEditingField('introText', e.target.value)}
                rows="3"
                placeholder="Brief description of the wedding..."
              />
            </div>

            <div className="form-group">
              <label>Testimonial</label>
              <textarea
                value={editingWedding.testimonial}
                onChange={(e) => updateEditingField('testimonial', e.target.value)}
                rows="3"
                placeholder="Quote from the couple..."
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Guest Count</label>
                <input
                  type="number"
                  value={editingWedding.guestCount}
                  onChange={(e) => updateEditingField('guestCount', e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Photography Credits</label>
                <input
                  type="text"
                  value={editingWedding.photoCredits}
                  onChange={(e) => updateEditingField('photoCredits', e.target.value)}
                  placeholder="e.g., Sarah Johnson Photography"
                />
              </div>
            </div>

            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  checked={editingWedding.featured}
                  onChange={(e) => updateEditingField('featured', e.target.checked)}
                />
                Featured on Homepage
              </label>
            </div>

            <div className="form-group">
              <label>Vendors</label>
              <div className="vendors-list">
                {Object.entries(editingWedding.vendors || {}).map(([type, vendor]) => (
                  <div key={type} className="vendor-item">
                    <strong>{type}:</strong> {vendor.name}
                    {vendor.url && <> (<a href={vendor.url} target="_blank" rel="noopener noreferrer">website</a>)</>}
                    <button onClick={() => removeVendor(type)} className="remove-btn">×</button>
                  </div>
                ))}
                <button onClick={addVendor} className="add-vendor-btn">+ Add Vendor</button>
              </div>
            </div>

            <div className="form-group">
              <label>Tags</label>
              <input
                type="text"
                value={editingWedding.tags?.join(', ') || ''}
                onChange={(e) => updateEditingField('tags', e.target.value.split(',').map(t => t.trim()).filter(Boolean))}
                placeholder="e.g., summer, outdoor, rustic"
              />
            </div>

            {/* Image Upload Section */}
            <div className="form-group">
              <label>Wedding Photos</label>
              <div className="wedding-images-upload">
                <div className="upload-grid">
                  {/* Hero Image Upload */}
                  <div className="upload-item">
                    <label>Hero Image (Detail Page Banner)</label>
                    <div className="upload-box">
                      {imageUploads.heroImage ? (
                        <div className="upload-preview">
                          <img src={URL.createObjectURL(imageUploads.heroImage)} alt="Hero preview" />
                          <button 
                            type="button"
                            className="remove-image-btn"
                            onClick={() => setImageUploads(prev => ({ ...prev, heroImage: null }))}
                          >
                            ×
                          </button>
                        </div>
                      ) : (
                        <div 
                          className="upload-placeholder"
                          onClick={() => fileInputRefs.current.heroImage?.click()}
                        >
                          <span>+ Upload Hero Image</span>
                        </div>
                      )}
                    </div>
                    <input
                      ref={el => fileInputRefs.current.heroImage = el}
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageSelect('heroImage', e.target.files)}
                      style={{ display: 'none' }}
                    />
                  </div>

                  {/* Cover Image Upload */}
                  <div className="upload-item">
                    <label>Cover Image (Grid Thumbnail)</label>
                    <div className="upload-box">
                      {imageUploads.coverImage ? (
                        <div className="upload-preview">
                          <img src={URL.createObjectURL(imageUploads.coverImage)} alt="Cover preview" />
                          <button 
                            type="button"
                            className="remove-image-btn"
                            onClick={() => setImageUploads(prev => ({ ...prev, coverImage: null }))}
                          >
                            ×
                          </button>
                        </div>
                      ) : (
                        <div 
                          className="upload-placeholder"
                          onClick={() => fileInputRefs.current.coverImage?.click()}
                        >
                          <span>+ Upload Cover Image</span>
                        </div>
                      )}
                    </div>
                    <input
                      ref={el => fileInputRefs.current.coverImage = el}
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageSelect('coverImage', e.target.files)}
                      style={{ display: 'none' }}
                    />
                  </div>

                  {/* Featured Image Upload */}
                  <div className="upload-item">
                    <label>Featured Image (Social Media)</label>
                    <div className="upload-box">
                      {imageUploads.featuredImage ? (
                        <div className="upload-preview">
                          <img src={URL.createObjectURL(imageUploads.featuredImage)} alt="Featured preview" />
                          <button 
                            type="button"
                            className="remove-image-btn"
                            onClick={() => setImageUploads(prev => ({ ...prev, featuredImage: null }))}
                          >
                            ×
                          </button>
                        </div>
                      ) : (
                        <div 
                          className="upload-placeholder"
                          onClick={() => fileInputRefs.current.featuredImage?.click()}
                        >
                          <span>+ Upload Featured Image</span>
                        </div>
                      )}
                    </div>
                    <input
                      ref={el => fileInputRefs.current.featuredImage = el}
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageSelect('featuredImage', e.target.files)}
                      style={{ display: 'none' }}
                    />
                  </div>
                </div>

                {/* Gallery Photos Upload */}
                <div className="gallery-upload-section">
                  <label>Photo Gallery (Max 35 photos)</label>
                  <div className="gallery-upload-box">
                    {imageUploads.galleryPhotos.length > 0 ? (
                      <div className="gallery-preview-grid">
                        {imageUploads.galleryPhotos.map((photo, index) => (
                          <div key={index} className="gallery-preview-item">
                            <img src={URL.createObjectURL(photo)} alt={`Gallery ${index + 1}`} />
                            <button
                              type="button"
                              className="remove-gallery-btn"
                              onClick={() => {
                                setImageUploads(prev => ({
                                  ...prev,
                                  galleryPhotos: prev.galleryPhotos.filter((_, i) => i !== index)
                                }))
                              }}
                            >
                              ×
                            </button>
                          </div>
                        ))}
                        {imageUploads.galleryPhotos.length < 35 && (
                          <div 
                            className="gallery-add-more"
                            onClick={() => fileInputRefs.current.galleryPhotos?.click()}
                          >
                            <span>+ Add More</span>
                            <small>{35 - imageUploads.galleryPhotos.length} remaining</small>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div 
                        className="gallery-upload-placeholder"
                        onClick={() => fileInputRefs.current.galleryPhotos?.click()}
                      >
                        <span>+ Upload Gallery Photos</span>
                        <small>Select up to 35 photos</small>
                      </div>
                    )}
                  </div>
                  <input
                    ref={el => fileInputRefs.current.galleryPhotos = el}
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) => handleImageSelect('gallery', e.target.files)}
                    style={{ display: 'none' }}
                  />
                </div>

                {/* Upload Button */}
                {(imageUploads.heroImage || imageUploads.coverImage || imageUploads.featuredImage || imageUploads.galleryPhotos.length > 0) && (
                  <div className="upload-actions">
                    <button
                      type="button"
                      onClick={handleUploadImages}
                      disabled={uploadingImages || editingWedding.isNew}
                      className="upload-all-btn"
                    >
                      {uploadingImages ? 'Uploading...' : 'Upload All Images to Contentful'}
                    </button>
                    {uploadProgress && (
                      <div className="upload-progress">{uploadProgress}</div>
                    )}
                    {editingWedding.isNew && (
                      <small className="upload-note">Please save the wedding first before uploading images</small>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="editor-actions">
              <button onClick={() => setEditingWedding(null)} className="cancel-btn">
                Cancel
              </button>
              <button onClick={handleSaveWedding} disabled={saving} className="save-btn">
                {saving ? 'Saving...' : 'Save Wedding'}
              </button>
            </div>
          </div>
        ) : (
          <div className="weddings-list">
            <h2>Existing Weddings ({weddings.length})</h2>
            <div className="wedding-grid">
              {weddings.map((wedding) => {
                // Map of known cover images from local data
                const localCoverImages = {
                  'anthony-and-linnea': '/wedding-photos/anthony-and-linnea/015.jpg',
                  'loria-and-jason-rolstad-agape': '/wedding-photos/2014-2/bride-and-groom-1089071.jpg',
                  'mattea-courtney': '/wedding-photos/mattea-courtney/JPEG/MPC-20130831-0012.jpg',
                  'kyle-carrie': '/wedding-photos/kyle-carrie/img076.jpg',
                  'emily-and-barron-nixon': '/wedding-photos/emily-and-barron-nixon/emilybaron-0102.jpg',
                  'joshua-and-teri': '/wedding-photos/joshua-and-teri/joshteri-115.jpg',
                  'reins': '/wedding-photos/reins-wedding/reins115.jpg',
                  'kerry-dominic': '/wedding-photos/kerry-dominic/dominickerry-002.jpg',
                  'rachel-and-vince': '/wedding-photos/rachel-and-vince/04.jpg',
                  'erin-kate': '/wedding-photos/erin-kate/JPEG/ALP_3883.jpg',
                  'kage': '/wedding-photos/kage-wedding/JPEG/ALP_3928.jpg',
                  'dave-kayla': '/wedding-photos/dave-kayla/IMG_0085.jpg',
                  'jenna-and-steven-tschirgi': '/wedding-photos/jenna-and-steven-tschirgi/DSC00176.jpg',
                  'nick-and-kayla': '/wedding-photos/nick-and-kayla/5D_01619.jpg',
                  'allison-and-will': '/wedding-photos/allison-and-will/15.jpg',
                  'james-and-denise-allen': '/wedding-photos/james-and-denise-allen/31.jpg',
                  'casey-garret': '/wedding-photos/casey-garret/12.jpg',
                  'kristine-leuze': '/wedding-photos/kristine-leuze/IMG_8877.jpg'
                }
                
                // Try to use local image if no Contentful image
                const coverImage = wedding.coverImage?.fields?.file?.url || 
                                 localCoverImages[wedding.slug] ||
                                 `/wedding-photos/${wedding.slug}/001.jpg` // Default to first image
                
                return (
                  <div key={wedding.slug} className="wedding-card">
                    {/* Add image preview */}
                    <div className="wedding-card-image">
                      <img 
                        src={coverImage.startsWith('//') ? `https:${coverImage}` : coverImage} 
                        alt={`${wedding.coupleName} Wedding`}
                        onError={(e) => {
                          // Fallback to a default image if local image doesn't exist
                          e.target.src = '/images/2014/04/Loria-Jason-wedding-2-0026.jpg'
                        }}
                      />
                      {wedding.published === false && (
                        <span className="draft-badge">DRAFT</span>
                      )}
                    </div>
                    <div className="wedding-card-content">
                      <div className="wedding-card-header">
                        <h3>{wedding.coupleName}</h3>
                        {wedding.featured && <span className="featured-badge">Featured</span>}
                      </div>
                      <p className="wedding-meta">
                        {wedding.season} • {wedding.guestCount || 'N/A'} guests
                      </p>
                      <p className="wedding-intro">{wedding.introText?.substring(0, 100)}...</p>
                      <div className="wedding-actions">
                        <button onClick={() => handleEditWedding(wedding)}>
                          Edit
                        </button>
                        <button 
                          onClick={() => window.open(`/real-weddings/${wedding.slug}`, '_blank')}
                          className="view-btn"
                        >
                          View
                        </button>
                        <button 
                          onClick={() => handleDeleteWedding(wedding)}
                          className="delete-btn"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}