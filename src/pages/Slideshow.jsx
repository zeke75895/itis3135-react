import { useEffect, useState, useRef } from 'react'

const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=10'
const API_KEY = 'live_VW7hqyc34JmxbUVr1RQtJVOcSTwotWiJjZsSBDQWX9suLoZtraJJH2XmpBojQRh2'
const INTERVAL_MS = 5000

export default function Slideshow() {
  const [images, setImages] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const timerRef = useRef(null)

  useEffect(() => {
    async function fetchImages() {
      setLoading(true)
      setError('')
      try {
        const response = await fetch(API_URL, {
          headers: {
            'x-api-key': API_KEY,
          },
        })

        if (!response.ok) {
          throw new Error(`API request failed: ${response.status}`)
        }

        const data = await response.json()
        setImages(data.map((item) => item.url))
        setCurrentIndex(0)
      } catch (fetchError) {
        setError('Unable to load slideshow images. Please try again later.')
        console.error(fetchError)
      } finally {
        setLoading(false)
      }
    }

    fetchImages()
  }, [])

  useEffect(() => {
    if (!isPlaying || images.length === 0) {
      return
    }

    if (currentIndex >= images.length - 1) {
      setIsPlaying(false)
      return
    }

    timerRef.current = window.setInterval(() => {
      setCurrentIndex((index) => {
        if (index >= images.length - 1) {
          setIsPlaying(false)
          return index
        }
        return index + 1
      })
    }, INTERVAL_MS)

    return () => {
      window.clearInterval(timerRef.current)
    }
  }, [isPlaying, images.length, currentIndex])

  const handleFirst = () => {
    setCurrentIndex(0)
    setIsPlaying(false)
  }

  const handlePrevious = () => {
    setCurrentIndex((index) => Math.max(index - 1, 0))
    setIsPlaying(false)
  }

  const handleNext = () => {
    setCurrentIndex((index) => Math.min(index + 1, images.length - 1))
    setIsPlaying(false)
  }

  const handleLast = () => {
    setCurrentIndex(images.length - 1)
    setIsPlaying(false)
  }

  const handlePlay = () => {
    if (images.length === 0) {
      return
    }
    setIsPlaying(true)
  }

  const handleStop = () => {
    setIsPlaying(false)
    window.clearInterval(timerRef.current)
  }

  const hasImages = images.length > 0
  const atStart = currentIndex === 0
  const atEnd = currentIndex === images.length - 1

  return (
    <section className="page slideshow-page">
      <h2>Cat Slideshow</h2>
      <p>
        This slideshow fetches 10 images from The Cat API and lets you
        navigate with manual controls or an automatic play timer.
      </p>

      {loading ? (
        <p>Loading images...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : !hasImages ? (
        <p>No images were returned from the API.</p>
      ) : (
        <>
          <div className="slideshow-card">
            <img
              src={images[currentIndex]}
              alt={`Cat ${currentIndex + 1}`}
              className="slideshow-image"
            />
            <div className="slideshow-meta">
              <span>
                Image {currentIndex + 1} of {images.length}
              </span>
              <span>{isPlaying ? 'Playing...' : 'Paused'}</span>
            </div>
          </div>

          <div className="slideshow-controls">
            <button onClick={handleFirst} disabled={atStart}>
              First
            </button>
            <button onClick={handlePrevious} disabled={atStart}>
              Previous
            </button>
            <button onClick={handlePlay} disabled={isPlaying || atEnd}>
              Play
            </button>
            <button onClick={handleStop} disabled={!isPlaying}>
              Stop
            </button>
            <button onClick={handleNext} disabled={atEnd}>
              Next
            </button>
            <button onClick={handleLast} disabled={atEnd}>
              Last
            </button>
          </div>
        </>
      )}
    </section>
  )
}
