import React from 'react'

function SkillCard({img_URL, label}) {
  return (
    <div className='flex flex-col text-center gap-2'>
        <img src={img_URL} width={100} height={100} alt="" />
        <h6 className='text-gray-500'>{label}</h6>
    </div>
  )
}

export default SkillCard