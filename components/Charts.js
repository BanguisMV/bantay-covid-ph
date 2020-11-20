import React from 'react'
import dynamic from 'next/dynamic'
import useMedia from 'use-media';

import { Summary, Table } from './styled/root';

const formatNumber = num => num && num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

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



const Charts = ({timeline, philippines, world,top}) => {
  const isOpen = useMedia({minWidth: '425px'});

    return (
    <section>
      <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8">
              <Cases data={timeline} options={options}/>
              <Death data={timeline} options={options}/>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-4"> 
              <Summary>
            <h2>World</h2>
              <div>
            <span>Population</span> 
            <p>{formatNumber(world.population)}</p>
        </div>
              <div>
            <span>Total Infected</span> 
            <p>{formatNumber(world.cases)}</p>
        </div>
              <div>
            <span>Total Deaths</span> 
            <p>{formatNumber(world.deaths)}</p>
        </div>
              <div>
            <span>Total Recovered</span> 
            <p>{formatNumber(world.recovered)}</p>
        </div> 
              <div>
            <span>Affected Countries</span> 
            <p>{formatNumber(world.affectedCountries)}</p>
        </div> 
              <div>
            <span>Tested</span> 
            <p>{formatNumber(world.tests)}</p>
        </div>
              <div>
            <span>Active</span> 
            <p>{formatNumber(world.active)}</p>
        </div>
              <div>
            <span>Critical</span> 
            <p>{formatNumber(world.critical)}</p>
        </div>
          </Summary>
              <Summary>
            <h2>Philippines</h2>
            <div>
              <span>Population</span> 
              <p>{formatNumber(philippines.population)}</p>
          </div>
            <div>
              <span>Tested</span> 
              <p>{formatNumber(philippines.tests)}</p>
          </div>
            <div>
              <span>Active</span> 
              <p>{formatNumber(philippines.active)}</p>
          </div>
            <div>
              <span>Critical</span> 
              <p>{formatNumber(philippines.critical)}</p>
          </div>
            <div>
              <span>Total Infected</span> 
              <p>{formatNumber(philippines.cases)}</p>
          </div>
            <div>
              <span>Total Deaths</span> 
              <p>{formatNumber(philippines.deaths)}</p>
          </div>
            <div>
            <span>Total Recovered</span> 
            <p>{formatNumber(philippines.recovered)}</p>
        </div> 
          </Summary>
            </div>
      </div>
        
              <Summary>
                <h2>Top Regions</h2>
                { isOpen ? 
                  <Table>
              <thead>
                <tr>
                  <th>Region</th> 
                  <th>Cases</th>
                  <th>Deaths</th>
                  <th>Recovered</th>
                </tr>
              </thead>

              <tbody>
                  {top.map(region => (
                       <tr key={region.region}>
                        <td>{region.region.toUpperCase()}</td>
                        <td>{formatNumber(region.cases)}</td>
                        <td>{formatNumber(region.deaths)}</td>
                        <td>{formatNumber(region.recovered)}</td>
                      </tr>
                    ))} 
              </tbody>
              </Table> : top.map((region,index) => (
                  <div className="mobileOnly" key={index}> 
                    <span>{index+1}</span>
                    <div>
                      <p>{region.region.toUpperCase()}</p>
                      <p>Cases: {formatNumber(region.cases)}</p>
                      <p>Deaths: {formatNumber(region.deaths)}</p>
                      <p>Recovered: {formatNumber(region.recovered)}</p>
                    </div>
                  </div>
              ))}
                <a href="https://covid19-api-philippines.herokuapp.com/" target="_blank" className='Unstable'> Unstable Source </a>
            </Summary>
     </section>  
    )
}

export default Charts


