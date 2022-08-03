import React from 'react'
import { Carousel, Stack } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { IMGUR_URL } from '@/services/variables'

function ComposEditionsCarousel(props) {
  const { editions } = props
  const navigate = useNavigate()
  return (
    <div id="tournaments-editions-carousel-container" className="bg-dark bg-opacity-25 container-fluid">
      <Carousel style={{ height: 500 }}>
        <h1 className="text-white">Carousel</h1>
        {
            editions.map((edition) => (
              <div key={edition.id}>
                <Carousel.Item style={{ height: 500 }}>
                  <Stack
                    direction="horizontal"
                    className="h-100 justify-content-center align-items-center"
                    gap={3}
                  >
                    <div id="tournaments-editions-carousel-item" className="border border-dark rounded-circle bg-light" style={{ margin: 30, borderRadius: 50, overflow: 'hidden', objectFit: 'cover' }}>
                      <img
                        role="button"
                        src={
                        `${IMGUR_URL}/${edition.logo}` || `https://loremflickr.com/640/480/soccer?${edition.id}`
                        }
                        style={{ width: '100%' }}
                        onClick={() => navigate(`/tournaments/${edition.id}`)}
                      />
                    </div>
                  </Stack>
                </Carousel.Item>
              </div>
            ))
        }
      </Carousel>
    </div>
  )
}

export default ComposEditionsCarousel

/*
         {
            editions.map((edition) => (
              <div key={edition.id}>
                <div id="carousel-item" className="border border-dark rounded-circle bg-light" style={{ margin: 30, borderRadius: 50, overflow: 'hidden', objectFit: 'cover' }}>
                  <img
                    role="button"
                    src={
                    `${IMGUR_URL}/${edition.logo}` || `https://loremflickr.com/640/480/soccer?${edition.id}`
                    }
                    style={{ width: '100%' }}
                    onClick={() => navigate(`/show/${edition.id}`)}
                  />
                </div>
              </div>
            ))
          }
*/
