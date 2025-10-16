import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import { getClientConfig } from '../config/sanity.config'

// Sanity client with standardized config
const client = createClient(getClientConfig('frontend'))

// Image URL builder
const builder = imageUrlBuilder(client)
function urlFor(source) {
  return builder.image(source)
}

// GROQ queries - Optimized with combined query for better performance
const WEDDINGS_WITH_COUNT = `
  {
    "items": *[_type == "wedding" && (
      $query == "" || 
      coupleNames match "*" + $query + "*" ||
      title match "*" + $query + "*"
    ) && (
      $season == "" || season == $season
    ) && (
      $tag == "" || $tag in tags[]
    )] | order(weddingDate desc) [$start...$end] {
      title,
      slug,
      coupleNames,
      weddingDate,
      coverImage,
      season,
      tags,
      excerpt
    },
    "total": count(*[_type == "wedding" && (
      $query == "" || 
      coupleNames match "*" + $query + "*" ||
      title match "*" + $query + "*"
    ) && (
      $season == "" || season == $season
    ) && (
      $tag == "" || $tag in tags[]
    )])
  }
`

// Optimized to fetch only first 100 documents for unique values (most will be duplicates)
const SEASONS_AND_TAGS = `
  {
    "seasons": array::unique(*[_type == "wedding" && defined(season)][0...100].season),
    "tags": array::unique(*[_type == "wedding"][0...100].tags[])
  }
`

const RESULTS_PER_PAGE = 12

export default function RealWeddingsIndex() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [weddings, setWeddings] = useState([])
  const [totalCount, setTotalCount] = useState(0)
  const [seasons, setSeasons] = useState([])
  const [tags, setTags] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)

  // Get current filters from URL
  const query = searchParams.get('q') || ''
  const season = searchParams.get('season') || ''
  const tag = searchParams.get('tag') || ''
  const page = parseInt(searchParams.get('page') || '1')

  // Calculate pagination
  const start = (page - 1) * RESULTS_PER_PAGE
  const end = start + RESULTS_PER_PAGE
  const hasMore = totalCount > end

  // Update URL params
  const updateFilters = (newFilters) => {
    const params = new URLSearchParams(searchParams)
    
    Object.entries(newFilters).forEach(([key, value]) => {
      if (value) {
        params.set(key, value)
      } else {
        params.delete(key)
      }
    })
    
    // Reset to page 1 when changing filters
    if (newFilters.q !== undefined || newFilters.season !== undefined || newFilters.tag !== undefined) {
      params.delete('page')
    }
    
    setSearchParams(params)
  }

  // Load weddings
  useEffect(() => {
    async function fetchWeddings() {
      try {
        setLoading(true)
        
        const [weddingsResult, filtersData] = await Promise.all([
          client.fetch(WEDDINGS_WITH_COUNT, { query, season, tag, start, end }),
          client.fetch(SEASONS_AND_TAGS)
        ])
        
        // For pagination, append results; for new searches, replace
        if (page === 1) {
          setWeddings(weddingsResult.items)
        } else {
          setWeddings(prev => [...prev, ...weddingsResult.items])
        }
        
        setTotalCount(weddingsResult.total)
        setSeasons(filtersData.seasons || [])
        setTags(filtersData.tags || [])
        
      } catch (error) {
        console.error('Error fetching weddings:', error)
      } finally {
        setLoading(false)
        setLoadingMore(false)
      }
    }

    fetchWeddings()
  }, [query, season, tag, page])

  // Load more results
  const loadMore = () => {
    if (!hasMore || loadingMore) return
    setLoadingMore(true)
    updateFilters({ page: page + 1 })
  }

  // Clear all filters
  const clearFilters = () => {
    setSearchParams({})
  }

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <>
      <SEO 
        title="Real Weddings - Rum River Barn"
        description="Browse beautiful real weddings at Rum River Barn. See how couples have celebrated their love in our historic Minnesota venue."
      />

      {/* Hero Section */}
      <section className="page-hero" style={{
        background: 'linear-gradient(135deg, rgba(107, 78, 61, 0.9) 0%, rgba(58, 74, 60, 0.8) 100%), url("/images/2014/04/Loria-Jason-wedding-2-0026.jpg") center/cover',
        color: 'white',
        textAlign: 'center',
        padding: '8rem 2rem 6rem'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="script-accent" style={{ 
            marginBottom: '1rem',
            color: 'rgba(255,255,255,0.9)'
          }}>
            Love Stories
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 400,
            marginBottom: '1.5rem',
            lineHeight: 1.2
          }}>
            Real Weddings
          </h1>
          <p className="lead" style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
            lineHeight: 1.6,
            maxWidth: '600px',
            margin: '0 auto',
            color: 'rgba(255,255,255,0.95)'
          }}>
            Every celebration tells a unique story of love, laughter, and happily ever after at Rum River Barn
          </p>
        </div>
      </section>

      {/* Filters */}
      <section style={{
        padding: '3rem 2rem 2rem',
        background: 'var(--cream-pearl)',
        borderBottom: '1px solid rgba(0,0,0,0.05)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Search Bar */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            alignItems: 'center',
            marginBottom: '2rem'
          }}>
            <input
              type="text"
              placeholder="Search couples or wedding details..."
              value={query}
              onChange={(e) => updateFilters({ q: e.target.value })}
              style={{
                flex: '1',
                minWidth: '250px',
                padding: '0.75rem 1rem',
                border: '1px solid rgba(0,0,0,0.1)',
                borderRadius: '4px',
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem'
              }}
            />
            
            {/* Season Filter */}
            <select
              value={season}
              onChange={(e) => updateFilters({ season: e.target.value })}
              style={{
                padding: '0.75rem 1rem',
                border: '1px solid rgba(0,0,0,0.1)',
                borderRadius: '4px',
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                backgroundColor: 'white'
              }}
            >
              <option value="">All Seasons</option>
              {seasons.map(seasonOption => (
                <option key={seasonOption} value={seasonOption}>
                  {seasonOption.charAt(0).toUpperCase() + seasonOption.slice(1)}
                </option>
              ))}
            </select>

            {/* Tag Filter */}
            <select
              value={tag}
              onChange={(e) => updateFilters({ tag: e.target.value })}
              style={{
                padding: '0.75rem 1rem',
                border: '1px solid rgba(0,0,0,0.1)',
                borderRadius: '4px',
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                backgroundColor: 'white'
              }}
            >
              <option value="">All Styles</option>
              {tags.map(tagOption => (
                <option key={tagOption} value={tagOption}>
                  {tagOption}
                </option>
              ))}
            </select>

            {/* Clear Filters */}
            {(query || season || tag) && (
              <button
                onClick={clearFilters}
                style={{
                  padding: '0.75rem 1rem',
                  background: 'var(--sage-green)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  transition: 'opacity 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                onMouseLeave={(e) => e.target.style.opacity = '1'}
              >
                Clear All
              </button>
            )}
          </div>

          {/* Results Count */}
          <div style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.875rem',
            color: 'var(--sage-green)',
            textAlign: 'center'
          }}>
            {loading ? 'Loading...' : `${totalCount} wedding${totalCount !== 1 ? 's' : ''} found`}
          </div>
        </div>
      </section>

      {/* Wedding Grid */}
      <section className="wedding-gallery" style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          {loading && page === 1 ? (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '300px',
              fontFamily: 'var(--font-body)',
              color: 'var(--sage-green)'
            }}>
              Loading weddings...
            </div>
          ) : weddings.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              fontFamily: 'var(--font-body)',
              color: 'var(--sage-green)'
            }}>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                marginBottom: '1rem',
                color: 'var(--warm-walnut)'
              }}>
                No weddings found
              </h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <>
              {/* Wedding Cards Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '2rem',
                marginBottom: '3rem'
              }}>
                {weddings.map((wedding) => (
                  <Link
                    key={wedding.slug.current}
                    to={`/real-weddings/${wedding.slug.current}`}
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)'
                      e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.15)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)'
                    }}
                  >
                    <div style={{
                      borderRadius: '8px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                      background: 'white'
                    }}>
                      {/* Wedding Image */}
                      {wedding.coverImage && (
                        <div style={{
                          position: 'relative',
                          height: '300px',
                          overflow: 'hidden'
                        }}>
                          <img
                            src={urlFor(wedding.coverImage).width(800).height(800).fit('crop').auto('format').url()}
                            alt={`${wedding.coupleNames} wedding`}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              transition: 'transform 0.3s ease'
                            }}
                          />
                          
                          {/* Overlay */}
                          <div className="overlay" style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(transparent 40%, rgba(0,0,0,0.7))',
                            display: 'flex',
                            alignItems: 'flex-end',
                            padding: '1.5rem'
                          }}>
                            <div style={{ color: 'white' }}>
                              <h3 style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: '1.5rem',
                                fontWeight: 400,
                                marginBottom: '0.25rem'
                              }}>
                                {wedding.coupleNames}
                              </h3>
                              <div style={{
                                fontFamily: 'var(--font-body)',
                                fontSize: '0.875rem',
                                opacity: 0.9,
                                letterSpacing: '1px'
                              }}>
                                {wedding.weddingDate && formatDate(wedding.weddingDate)}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Wedding Details */}
                      <div style={{ padding: '1.5rem' }}>
                        <h3 style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.25rem',
                          color: 'var(--warm-walnut)',
                          marginBottom: '0.75rem'
                        }}>
                          {wedding.coupleNames}
                        </h3>
                        
                        {wedding.excerpt && (
                          <p style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.95rem',
                            lineHeight: 1.6,
                            color: 'var(--sage-green)',
                            marginBottom: '1rem'
                          }}>
                            {wedding.excerpt.length > 120 
                              ? wedding.excerpt.substring(0, 120) + '...'
                              : wedding.excerpt
                            }
                          </p>
                        )}

                        {/* Tags */}
                        {wedding.tags && wedding.tags.length > 0 && (
                          <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '0.5rem'
                          }}>
                            {wedding.tags.slice(0, 3).map(tagItem => (
                              <span
                                key={tagItem}
                                style={{
                                  background: 'var(--cream-pearl)',
                                  color: 'var(--sage-green)',
                                  padding: '0.25rem 0.75rem',
                                  borderRadius: '12px',
                                  fontSize: '0.75rem',
                                  fontFamily: 'var(--font-body)',
                                  letterSpacing: '0.5px'
                                }}
                              >
                                {tagItem}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Load More Button */}
              {hasMore && (
                <div style={{ textAlign: 'center' }}>
                  <button
                    onClick={loadMore}
                    disabled={loadingMore}
                    className="romantic-button"
                    style={{
                      opacity: loadingMore ? 0.6 : 1,
                      cursor: loadingMore ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {loadingMore ? 'Loading...' : 'Load More Weddings'}
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '4rem 2rem',
        background: 'var(--cream-pearl)',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div className="script-accent" style={{ marginBottom: '1rem' }}>
            Ready to Create Your Story?
          </div>
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
            Let Your Love Story Unfold Here
          </h2>
          <p className="lead" style={{ marginBottom: '2rem' }}>
            Schedule a tour to see how we can help bring your wedding vision to life
          </p>
          <Link to="/contact" className="romantic-button">
            Schedule Your Tour
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}