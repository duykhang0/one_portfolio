import React from 'react'

const Experience = () => {
    const techs = [
        {
            id: 1,
            src: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: 2,
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs-53NX0aNzFeyVw81k3PwNHdjhtdFxHhC1z-_0AsSBw&s",
            title: "CSS",
            style: "shadow-orange-500"
        },
        {
            id: 3,
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
            title: "React JS",
            style: "shadow-orange-500"
        },
        {
            id: 4,
            src: "https://v4.mui.com/static/logo.png",
            title: "Material UI",
            style: "shadow-orange-500"
        }
    ]
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        
        <div className='max-w-screen-lg mx-auto px-4 flex flex-col justify-center w-full h-full text-white '>

            <div>
                <p className='text-4xl font-bold border-b-4 inline p-2 border-gray-500'>Experience</p>
                <p className='py-6'>These are the technologies i've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    techs.map((tech) => (
                        <div key={tech.id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${tech.style}`}>
                            <img src={tech.src} alt="" className='w-20 mx-auto' />
                            <p className='mt-4'>{tech.title}</p>
                        </div>
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default Experience