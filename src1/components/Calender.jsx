import React from 'react'
import Event from './Event'

const Calender = () => {
    const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec']

    const currentDate = new Date();
    const month = currentDate.getMonth()+1;

    const dates = [`1/${month}/2025`,`2/${month}/2025`,`3/${month}/2025`,`4/${month}/2025`,`5/${month}/2025`,`6/${month}/2025`,`7/${month}/2025`,`8/${month}/2025`,`9/${month}/2025`,`10/${month}/2025`,`11/${month}/2025`,`12/${month}/2025`,`13/${month}/2025`,`14/${month}/2025`,`15/${month}/2025`,`16/${month}/2025`,`17/${month}/2025`,`18/${month}/2025`,`19/${month}/2025`,`20/${month}/2025`,`21/${month}/2025`,`22/${month}/2025`,`23/${month}/2025`,`24/${month}/2025`,`25/${month}/2025`,`26/${month}/2025`,`27/${month}/2025`,`28/${month}/2025`,`29/${month}/2025`,`30/${month}/2025`,`31/${month}/2025`]

  return (
    <div className='grid grid-cols-4 grid-rows-8 gap-4'>
      {dates.map(date=>{
        return <Event date={date} month={month}/>
      })}
    </div>
  )
}

export default Calender
