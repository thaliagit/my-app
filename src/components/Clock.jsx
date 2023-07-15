// import React, { useContext, useEffect, useState } from 'react'
// import { LanguageContext } from './LanguageContext'
// const translation = {
//     gr: {
//         "CURRENT_TIME": 'Η ώρα είναι:'
//     },
//     en:{
//         "CURRENT_TIME": 'Current time is: '
//     }
// }
// function Clock() {
//     const [data, setDate] = useState(new Date())
//     const language = useContext(LanguageContext)

//     useEffect(()=> {
//       const _interval =  setInterval(()=>{
//             setDate(new Date())
//         }, 1000)
//         return ()=> {
//             clearInterval(_interval)
//         }
//     }, [])
//   return (
//     <div>
//         <p>
//         {translation[language]["CURRENT_TIME"]}{date.toLocaleString()}
//         </p>
//     </div>
//   )
// }

// export default Clock