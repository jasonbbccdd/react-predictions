import React from 'react'
import ComposRoundedLogo from '@/components/RoundedLogo'

function ComposGroupList({ id: groupID }) {
  return (
    <div id={`"group-${groupID}"`} className="group col-xl-3 col-lg-4 col-md-6 col-sm-6 col-xs-12 mb-3" data-group-id={groupID}>
      <div className="card bg-transparent border-white">
        <div className="card-body position-relative">
          <h5 className="card-title text-center mb-3">Group {groupID}</h5>
          <button type="button" className="reset-btn btn btn-danger position-absolute end-0 top-0 mt-2 me-3">Reset</button>

          <ul className="list-group border-top-0 mb-3">
            <button
              type="button"
              className="group-standing list-group-item list-group-item-action bg-transparent text-white border-white d-flex flex-row align-items-center"
              data-group-standing-id="0"
            >
              <span className="me-2">1</span>
            </button>

            <button
              type="button"
              className="group-standing list-group-item list-group-item-action bg-transparent text-white border-white d-flex flex-row align-items-center"
              data-group-standing-id="1"
            >
              <span className="me-2">2</span>
            </button>

            <button
              type="button"
              className="group-standing list-group-item list-group-item-action bg-transparent text-white border-white d-flex flex-row align-items-center"
              data-group-standing-id="2"
            >
              <span className="me-2">3</span>
            </button>

            <button
              type="button"
              className="group-standing list-group-item list-group-item-action bg-transparent text-white border-white d-flex flex-row align-items-center"
              data-group-standing-id="3"
            >
              <span className="me-2">4</span>
            </button>
          </ul>

          <div className="d-flex flex-row justify-content-between align-items-center">
            {/* ${generate32CardTeamsHTML(groupData)} */}
            <ComposRoundedLogo {...{ type: 'nation', code2: 'br', code3: 'BRA' }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComposGroupList
