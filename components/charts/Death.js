import { Line } from 'react-chartjs-2'
import styled from 'styled-components'


const Death = ({data, options}) => {
    
  const { deaths } = data.timeline
  const deathDays = Object.keys(deaths)
  const deathRate = Object.values(deaths)

  const datas = {
    labels: deathDays,
    animation:true,
    datasets: [
      {
        data:deathRate,
        label: 'Deaths',
        backgroundColor: '#ce112780',
        borderWidth: 3,
      },
    ]
   }
    return <Line data={datas} options={options} className="chart"/> 

    
}

export default Death
