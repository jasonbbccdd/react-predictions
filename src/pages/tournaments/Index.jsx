import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useNavigate } from 'react-router-dom'

import { useTournaments } from '@/contexts/Tournaments'
import ComposTournamentsCarousel from '@/components/TournamentsCarousel'
// import ComposEditionsCarousel from '@/components/EditionsCarousel'

import { IMGUR_URL } from '@/services/variables'

function PagesTournamentsIndex() {
  const navigate = useNavigate()
  const {
    index: { data: tournaments, loading: indexLoading }, getTournaments,
    editions: { data: editions, loading: editionLoading }, getTournamentEditions
  } = useTournaments()
  const [selectedTournament, setSelectedTournament] = useState(null)

  useEffect(() => {
    getTournaments()
  }, [])

  useEffect(() => {
    if (selectedTournament) getTournamentEditions(selectedTournament.code)
  }, [selectedTournament])

  const renderTournamentsCarousel = () => {
    if (!selectedTournament) return null
    if (editionLoading) return 'Loading...'
    // eslint-disable-next-line no-console
    console.log(editions)
    // eslint-disable-next-line no-console
    console.log(tournaments)
    return (
      <div className="border border-5 border-white border-bg-dark" style={{ maxWidth: 1800, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
        <ComposTournamentsCarousel
          show={editions.length === 3 ? 2 : 4}
          infiniteLoop
        >
          {
            editions.map((edition) => (
              <div key={edition.id}>
                <div id="carousel-item" className="border border-dark rounded-circle bg-light" style={{ margin: 8, borderRadius: 50, overflow: 'hidden', objectFit: 'cover' }}>
                  <img
                    role="button"
                    src={
                    `${IMGUR_URL}/${edition.logo}` || `https://loremflickr.com/640/480/soccer?${edition.id}`
                    }
                    style={{ width: '100%' }}
                    onClick={() => navigate(`/tournaments/${edition.id}`)}
                  />
                </div>
              </div>
            ))
          }
        </ComposTournamentsCarousel>
        {/* <ComposEditionsCarousel editions={editions} /> */}
      </div>
    )
  }

  return (
    <div id="pages-tournaments-index" className="container-fluid">
      <h1 className="text-center">Tournaments: </h1>
      <div className="table-responsive">
        <table className="table table-hover align-middle">
          <thead>
            <tr>
              <th scope="col" className="text-white">Please click to select: </th>
            </tr>
          </thead>
          <tbody>
            {
              indexLoading ? (
                Array(10).fill(null).map((temp, i) => (
                  <tr key={i}>
                    <td><Skeleton /></td>
                  </tr>
                ))
              ) : (
                tournaments.map((tournament) => (
                  <tr
                    key={tournament.code}
                    onClick={() => {
                      setSelectedTournament(tournament)
                    }}
                  >
                    <td role="button" className="text-white">{tournament.name}</td>
                  </tr>
                ))
              )
            }
          </tbody>
        </table>
      </div>
      { renderTournamentsCarousel() }
    </div>
  )
}

export default PagesTournamentsIndex
