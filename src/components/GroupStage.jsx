import React from 'react'
import ComposGroupList from '@/components/GroupList'

function ComposGroupStage({ numOfGroups, numOfTeams }) {
  return (
    <div id="groupings" className="row">
      <ComposGroupList {...{ id: 'A' }} />
    </div>
  )
}

export default ComposGroupStage
