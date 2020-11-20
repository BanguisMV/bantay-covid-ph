import React from 'react'
import dynamic from 'next/dynamic'
const Cases = dynamic(() => import('./charts/Cases'))
const Death = dynamic(() => import('./charts/Death'))

const options = {
  legend: {
    display: true,
        labels: {
          fontColor: '#9ab3f5'
        }
     },
  tooltips: {
    mode: 'index',
    intersect: false
     },
  hover: {
    mode: 'index',
    intersect: false
     },
     showLine: true
}



const Charts = ({data}) => {

    return (
    <section className="row">
          <div className="col-sm-12 col-md-8">
            <Cases data={data} options={options}/>
            <Death data={data} options={options}/>
          </div>
          <div className="col-sm-12 col-md-4">
            <div className="top">
              hasdasd
            </div>
          </div>
     </section>  
    )
}

export default Charts


