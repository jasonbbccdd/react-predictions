const API_URL = 'http://localhost:3000'

export const API = {
  getMyProfile: () => `${API_URL}/api/my/profile`,
  signup: () => `${API_URL}/api/auth/signup`,
  login: () => `${API_URL}/api/auth/login`,
  logout: () => `${API_URL}/api/auth/logout`,
  getTournaments: () => `${API_URL}/api/tournaments`,
  getTournamentEditions: (params) => `${API_URL}/api/tournaments/editions/${params.code}`,
  getTournament: (params) => `${API_URL}/api/tournaments/${params.id}`
}

export const IMGUR_URL = 'https://i.imgur.com'

export const imgur = {
  worldCup1996: (params) => `${IMGUR_URL}/${params.logo}`
}
