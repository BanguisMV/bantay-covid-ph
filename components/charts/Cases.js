import { Line } from 'react-chartjs-2'

const Cases = ({data,options}) => {

  const { cases,recovered } = data.timeline
  const casesDays = Object.keys(cases)
  const casesRate = Object.values(cases)
  const recoveredRate = Object.values(recovered)

  const datas = {
    labels: casesDays,
    animation:true,
    datasets: [
      {
        data:casesRate,
        label: 'Cases',
        backgroundColor: '#0038a880',
        borderWidth: 3,
      },
      {
        label: 'Recovered',
        data:recoveredRate,
        backgroundColor: '#16fc48af',
        borderWidth: 3
      },
    ]
   }


    return <Line data={datas} options={{...options, title: {
      ...options.title,
      text:'Cases & Recovery'
     }}} className="chart"/> 
    
}

export default Cases


