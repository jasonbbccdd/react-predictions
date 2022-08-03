import React from 'react'
import ComposGroupStage from './GroupStage'

function ComposTournament({ name, year, numOfGroups, numOfTeams }) {
  const tournamentName = `${name}`
  const tournamentNameAndYear = `${name} ${year}`
  const tournamentNameTag = tournamentName.toLowerCase().replace(/\s/g, '-')
  const tournamentNameAndYearTag = tournamentNameAndYear.toLowerCase().replace(/\s/g, '-')
  return (
    <div id={tournamentNameAndYearTag} className={tournamentNameTag}>
      <ComposGroupStage {...{ numOfGroups, numOfTeams }} />
    </div>
  )
}

export default ComposTournament
