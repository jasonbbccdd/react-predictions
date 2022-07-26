import React from 'react'
import ReactRoundedImage from 'react-rounded-image'

function ComposRoundedLogo({ type, code2, code3 }) {
  const NATIONAL_FLAG_URL = 'https://cf.eip.telegraph.co.uk/flags/'
  const CLUB_LOGO_URL = 'https://ftsdlskits.com/'
  const size1x1 = '1x1/'
  // const size4x3 = '4x3/'
  const imageBaseURL = type === 'nation' ? NATIONAL_FLAG_URL : CLUB_LOGO_URL

  return (
    <div className="w-25">
      <ReactRoundedImage
        image={`${imageBaseURL}${size1x1}${code2}.svg`}
        roundedColor="#ffffff"
        imageWidth="150"
        imageHeight="150"
        roundedSize="20"
        borderRadius="100"
        hoverColor="#ff0000"
      />
      <h2 className="text-center">{code3}</h2>
    </div>
  )
}
export default ComposRoundedLogo
