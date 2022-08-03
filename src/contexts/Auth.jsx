import React, { useState, createContext, useContext } from 'react'
import axios from 'axios'
import produce from 'immer'
import { useNavigate } from 'react-router-dom'
import { renderErrors } from '@/contexts/_ultils'

import { API } from '@/services/variables'

const AuthContext = createContext()

const initialShow = { data: null, error: null, loading: true, authenticating: false, unauthenticating: false }

export function AuthProvider({ children }) {
  const navigate = useNavigate()
  const [showState, setShowState] = useState(initialShow)

  const getMyProfile = async (updateInBackground) => {
    if (!updateInBackground) setShowState(initialShow)
    setShowState(await produce(updateInBackground ? showState : initialShow, async (draft) => {
      try {
        const resp = await axios({
          method: 'GET',
          url: API.getMyProfile()
        })
        draft.data = resp.data.user
      } catch (err) {
        draft.error = err.response.data
      } finally {
        draft.loading = false
      }
    }))
  }

  const signup = async (data) => {
    setShowState(produce(initialShow, (draft) => {
      draft.loading = false
      draft.authenticating = true
    }))
    setShowState(await produce(showState, async (draft) => {
      try {
        const resp = await axios({
          method: 'POST',
          url: API.signup(),
          data
        })
        draft.data = resp.data.user
      } catch (err) {
        renderErrors(err)
      }
    }))
  }

  const login = async (data) => {
    setShowState(produce(initialShow, (draft) => {
      draft.loading = false
      draft.authenticating = true
    }))
    setShowState(await produce(showState, async (draft) => {
      try {
        const resp = await axios({
          method: 'POST',
          url: API.login(),
          data
        })
        draft.data = resp.data.user
        navigate(-1)
      } catch (err) {
        renderErrors(err)
      }
    }))
  }

  const logout = async () => {
    setShowState(produce(initialShow, (draft) => {
      draft.loading = false
      draft.unauthenticating = true
    }))
    setShowState(await produce(showState, async (draft) => {
      try {
        await axios({
          method: 'DELETE',
          url: API.logout()
        })
        draft.data = null
      } catch (err) {
        renderErrors(err)
      }
    }))
  }
  const contextData = {
    show: showState,
    getMyProfile,
    signup,
    login,
    logout
  }

  return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}
