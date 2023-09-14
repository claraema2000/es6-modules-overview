import { useEffect, useState } from 'react'
import './App.css'
import Watch from './Components/Watch/Watch'

function App() {

  //3rd System(json from chat gpt & make a new file in public folder then use it)

  // const [watches, setWatches] = useState([]);
  // useEffect(() => {
  //   fetch('Watches.json')
  //   .then(res => res.json())
  //   .then(data => setWatches(data))
  // }, [])

  //4th System (json from github)

  const [watches, setWatches] = useState([]);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/claraema2000/watches-data/main/watches.json')
    .then(res => res.json())
    .then(data => setWatches(data))
  }, [])

  //1st System

  // const watches = [
  //   {id: 1, name: 'Apple Watch', price: 5000},
  //   {id: 2, name: 'Samsung Watch', price: 4500},
  //   {id: 3, name: 'Mi Watch', price: 2000},
  //   {id: 4, name: 'Realme Watch', price: 3000},
  //   {id: 5, name: 'One Plus Watch', price: 2900},
  // ]

  // 2nd System

  // const watches = [
  //   {
  //     id: 1,
  //     name: "Apple Watch Series 6",
  //     price: 399.99,
  //     manufacturer: "Apple",
  //     keyFeatures: [
  //       "Blood oxygen monitoring",
  //       "ECG",
  //       "Fitness tracking",
  //       "GPS",
  //       "Retina display",
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: "Samsung Galaxy Watch 3",
  //     price: 329.99,
  //     manufacturer: "Samsung",
  //     keyFeatures: [
  //       "Heart rate monitoring",
  //       "GPS",
  //       "Sleep tracking",
  //       "Rotating bezel navigation",
  //       "Tizen OS",
  //     ],
  //   },
  //   {
  //     id: 3,
  //     name: "Garmin Forerunner 945",
  //     price: 549.99,
  //     manufacturer: "Garmin",
  //     keyFeatures: [
  //       "Advanced running metrics",
  //       "GPS",
  //       "Music storage",
  //       "VO2 max estimation",
  //       "Multisport tracking",
  //     ],
  //   },
  //   {
  //     id: 4,
  //     name: "Fitbit Sense",
  //     price: 299.99,
  //     manufacturer: "Fitbit",
  //     keyFeatures: [
  //       "Stress tracking",
  //       "EDA sensor",
  //       "Heart rate monitoring",
  //       "Sleep tracking",
  //       "Built-in GPS",
  //     ],
  //   },
  //   {
  //     id: 5,
  //     name: "Fossil Gen 5 Carlyle",
  //     price: 249.99,
  //     manufacturer: "Fossil",
  //     keyFeatures: [
  //       "Wear OS",
  //       "Snapdragon 3100 processor",
  //       "Heart rate monitoring",
  //       "Customizable watch faces",
  //     ],
  //   },
  //   {
  //     id: 6,
  //     name: "Huawei Watch GT 2 Pro",
  //     price: 299.99,
  //     manufacturer: "Huawei",
  //     keyFeatures: [
  //       "AMOLED display",
  //       "GPS",
  //       "14-day battery life",
  //       "Heart rate monitoring",
  //       "Sleep tracking",
  //     ],
  //   },
  //   {
  //     id: 7,
  //     name: "Amazfit Bip U Pro",
  //     price: 69.99,
  //     manufacturer: "Amazfit",
  //     keyFeatures: [
  //       "SpO2 measurement",
  //       "Heart rate monitoring",
  //       "Built-in GPS",
  //       "9-day battery life",
  //       "PAI (Personal Activity Intelligence)",
  //     ],
  //   },
  // ]
  
  return (
    <>
      <h1>Vite + React</h1>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
