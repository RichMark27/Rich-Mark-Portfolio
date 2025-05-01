import React from 'react'

function ContactCard({img_URL, label}) {
  return (
    <div className='flex justify-center items-center gap-8'>
        <img src={img_URL} width={60} height={60} alt="contact icon" />
        <p className='text-lg'>{label}</p>
    </div>
  )
}

export default ContactCard