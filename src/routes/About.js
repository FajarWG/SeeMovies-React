import React from 'react'

const About = () => {
  return (
    <div>
        <div className='text-center fw-bold my-2'>
            <h2>About</h2>
            <button className="btn btn-danger btn-sm" onClick={() => {
                     localStorage.removeItem('Total Click');
                     window.location.reload();
            }}>Delete</button>
        </div>
    </div>
  )
}

export default About