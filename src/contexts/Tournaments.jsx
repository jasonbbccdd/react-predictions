import React, { useState, createContext, useContext } from 'react'
import axios from 'axios'
import produce from 'immer'
import { API } from '@/services/variables'

const TournamentsContext = createContext()

const initialIndex = { data: [], error: null, loading: true }
const initialEditions = { data: [], error: null, loading: true }
const initialShow = { data: [], error: null, loading: true }

export function TournamentsProvider({ children }) {
  const [indexState, setIndexState] = useState(initialIndex)
  const [editionsState, setEditionsState] = useState(initialEditions)
  const [showState, setShowState] = useState(initialShow)

  const getTournaments = async () => {
    setIndexState(initialIndex)
    setIndexState(await produce(initialIndex, async (draft) => {
      try {
        const resp = await axios({
          method: 'GET',
          url: API.getTournaments()
        })
        draft.data = resp.data.tournaments
      } catch (err) {
        draft.error = err.response.data
      } finally {
        draft.loading = false
      }
    }))
  }

  const getTournamentEditions = async (code) => {
    setEditionsState(initialEditions)
    setEditionsState(await produce(initialEditions, async (draft) => {
      try {
        const resp = await axios({
          method: 'GET',
          url: API.getTournamentEditions({ code })
        })
        draft.data = resp.data.tournaments
      } catch (err) {
        draft.error = err.response.data
      } finally {
        draft.loading = false
      }
    }))
  }

  const getTournament = async (id) => {
    setShowState(initialShow)
    setShowState(await produce(initialShow, async (draft) => {
      try {
        const resp = await axios({
          method: 'GET',
          url: API.getTournament({ id })
        })
        draft.data = resp.data.tournament
      } catch (err) {
        draft.err = err.response.data
      } finally {
        draft.loading = false
      }
    }))
  }

  const contextData = {
    index: indexState,
    getTournaments,
    editions: editionsState,
    getTournamentEditions,
    show: showState,
    getTournament
  }

  return <TournamentsContext.Provider value={contextData}>{children}</TournamentsContext.Provider>
}

export function useTournaments() {
  return useContext(TournamentsContext)
}
