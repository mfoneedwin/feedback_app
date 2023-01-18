import React from 'react'


const Header = ({text, bagColor, textColor}) => {
  const headerStyle = {
     backgroundColor: bagColor,
     color: textColor,
  }

  return (
     <header style={headerStyle} >
    <div className='container'>
      <h2>{text}</h2>
    </div>
    </header>
  )
}

  // default header props
Header.defaultProps = {
     text: 'Feedback UI',
     bagColor: 'rgba(0,0,0,0.4',
     textColor: '#ff6a95',
}


export default Header