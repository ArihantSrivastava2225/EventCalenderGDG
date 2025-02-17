import React from 'react'
import Event from '../Event'

const Jan = () => {
    const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec']

    const dates = [`1/1/2025`,`2/1/2025`,`3/1/2025`,`4/1/2025`,`5/1/2025`,`6/1/2025`,`7/1/2025`,`8/1/2025`,`9/1/2025`,`10/1/2025`,`11/1/2025`,`12/1/2025`,`13/1/2025`,`14/1/2025`,`15/1/2025`,`16/1/2025`,`17/1/2025`,`18/1/2025`,`19/1/2025`,`20/1/2025`,`21/1/2025`,`22/1/2025`,`23/1/2025`,`24/1/2025`,`25/1/2025`,`26/1/2025`,`27/1/2025`,`28/1/2025`,`29/1/2025`,`30/1/2025`,`31/1/2025`]

    const eventDays = ['14/1/2025'];

  return (
    <>
    <div className="gdg h-[10vh] flex items-center justify-center mt-10">
      {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfm1x4quRzmfr-z6WsZr9UWjMRR-sAht0D1Q&s" alt="" className='w-full h-60 object-contain smooth-image max-w-full max-h-full'/> */}
      <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-indigo-400 to-violet-400 font-bold text-5xl h-40'>Google Devel</span>
      <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 font-bold text-5xl h-40'>opers Group - DTU</span>
    </div>
    {/* <div className="banner flex justify-center">
      <img src="https://img.freepik.com/premium-vector/hand-drawn-january-month-lettering-typography-cover-poster-banner-flyer-social-media-templa_116089-331.jpg" className='w-[80vw] h-60 mt-0' alt="" />
    </div> */}
    <p className='text-center text-4xl text-white font-bold'>JANUARY</p>
    <div className='grid grid-cols-[repeat(5,_260px)] grid-rows-8 gap-0 m-7'>
      {dates.map(date=>{
        if(date==`1/1/2025`){  //like this we can specially render for event dates
            return(
                <div key={date} className='transition-transform duration-500 ease-in-out hover:scale-105 bg-gradient-to-r from-indigo-500 to-violet-400 text-white flex flex-col justify-center items-center p-4 w-70 relative border-2'>
                  <p className='absolute right-0 bottom-0 font-bold text-xl'>{date}</p>
                    <p className='text-xl font-bold'>GDG Hackathon Start!</p>
                    <p className='font-bold'>Day-0</p>
                    <div className="eventImage">
                        <img src="https://res.cloudinary.com/devex/image/fetch/c_scale,f_auto,q_auto,w_720/https://lh4.googleusercontent.com/VQyrPPyh-FGdV2BJtlcwDphesnxERD6SLWvGtARygLDVNSsXhFF0kzG_yXvLyiARZbKIG3VYF_CIbF4_B-Wy3Eu7kKhHKKR3pq_2ob2pdZgxt_Wz_uqXjRMrhIBKREQnJo--Ui9b" alt="" />
                    </div>
                    <div className="summary">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolore dolorum, eos veritatis error molestias, cumque voluptas inventore odit iste laborum necessitatibus consequuntur eligendi eaque non animi, aliquid consectetur. Ut, officia.
                    </div>
                </div>
            )
        }
        if(date=='2/1/2025'){
          return (
            <div className='flex flex-col justify-center items-center text-white relative border-2'>
            <p className='absolute right-0 bottom-0 text-xl font-bold'>{date}</p>
            <p>Start Thinking Your Idea!</p>
            <p className='absolute top-4'>Day-1</p>
            </div>
          )
        }
        if(date=='3/1/2025'){
          return(
            <div className='flex flex-col justify-center items-center text-white relative border-2'>
            <p className='absolute right-0 bottom-0 font-bold text-xl'>{date}</p>
            <p>Keep Thinking Folks!</p>
            <p className='absolute top-4'>Day-2</p>
            </div>
          )
        }
        if(date=='4/1/2025'){
          return(
            <div className='flex flex-col justify-center items-center text-white relative border-2'>
            <p className='absolute right-0 bottom-0 text-xl font-bold'>{date}</p>
            <p>Submit your ideas here!</p>
            <p className='absolute top-4'>Day-3</p>
            </div>
          )
        }
        if(date=='5/1/2025'){
          return(
            <div className='flex flex-col justify-center items-center text-white relative border-2 p-2'>
            <p className='absolute right-0 bottom-0 text-xl font-bold'>{date}</p>
            <p>Result is Live!</p>
            <p>Shortlisted teams will work on creating the prototype</p>
            <p>Final Presentation on 12th Jan with display of prototype</p>
            <p className='absolute top-4'>Day-3</p>
            </div>
          )
        }
        return(
            <div className={`date ${eventDays.includes(date) ? "bg-yellow-600 col-span-2 p-7 relative" : "flex justify-center items-center text-white relative border-2 w-70"}`}>
                <div className="date absolute right-0 bottom-0 font-bold text-xl">
                    {date}
                </div>
            </div>
        )
      })}
    </div>
    </>
  )
}

export default Jan
