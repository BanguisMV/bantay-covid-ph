import React, { Fragment, useState } from 'react'
import CountUp from 'react-countup';
import { Philippines, CardTitle, Card, Spinner } from './styled/root';

const formatNumber = num => num && num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

const Summary = ({data}) => {
    const [ end, setEnd ] = useState(false)
    return (
    <Fragment>

        <Philippines>
                    <h1>Philippines</h1>     
                    <h2>latest update as of {data && new Date(data.updated).toDateString()}</h2> 
        </Philippines>  

        <section className="row summary">
            <div className="col-xs-12 col-sm-6 col-md-4">
                    <Card cases loaded={end} >
                                <CardTitle cases>Cases</CardTitle> 
                                <h3>
                                    {end ? formatNumber(data && data.cases)  : 
                                    <CountUp 
                                    duration={2}
                                    start={data ? (data.cases / 4 ) : 0}
                                    end={data ? data.cases : 0} 
                                    onEnd={() => setEnd(true)}
                                    />
                                    }
                                </h3> 

                                <h4>
                                +&nbsp;
                                    {end ? formatNumber(data && data.todayCases) + ' TODAY'  : 
                                    <CountUp 
                                    duration={2}
                                    start={data ? 0 : 0}
                                    end={data ? data.todayCases : 0} 
                                    onEnd={() => setEnd(true)}
                                    />
                                    }
                                </h4>
                                
                                <p> 
                                {end ? formatNumber(data && data.active) + ' active'  : 
                                    <CountUp 
                                    duration={2}
                                    start={data ? 0 : 0}
                                    end={data ? data.active : 0} 
                                    onEnd={() => setEnd(true)}
                                    />
                                    }
                                </p>

                            </Card>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4">
                            <Card death loaded={end}>
                                <CardTitle death>Deaths</CardTitle> 
                                <h3>
                                { end ? formatNumber(data && data.deaths)  : 
                                    <CountUp 
                                    duration={2}
                                    start={data ? (data.deaths - 50) : 0}
                                    end={data ? data.deaths : 0} 
                                    onEnd={() => setEnd(true)}
                                    />
                                    }
                                </h3>
                                <h4>
                                +&nbsp;
                                    {end ? formatNumber(data && data.todayDeaths) + ' TODAY'  : 
                                    <CountUp 
                                    duration={2}
                                    start={data ? 0 : 0}
                                    end={data ? data.todayDeaths : 0} 
                                    onEnd={() => setEnd(true)}
                                    />
                                    }
                                </h4>
                                <p> {data && ((data.deaths / data.cases) * 100).toFixed(2)}% death rate </p>

                            </Card>
                        </div>
            <div className="col-xs-12 col-sm-12 col-md-4">
                            <Card recover loaded={end}>
                                <CardTitle recover>Recovered</CardTitle> 
                                <h3>
                                {end ? formatNumber(data && data.recovered)  : 
                                    <CountUp 
                                    duration={2}
                                    start={data ? (data.recovered / 4) : 0}
                                    end={data ? data.recovered : 0} 
                                    onEnd={() => setEnd(true)}
                                    />
                                    }
                                </h3>
                                <h4>
                                +&nbsp;
                                    {end ? formatNumber(data && data.todayRecovered) + ' TODAY'  : 
                                    <CountUp 
                                    duration={2}
                                    start={data ? 0 : 0}
                                    end={data ? data.todayRecovered : 0} 
                                    onEnd={() => setEnd(true)}
                                    />
                                    }
                                </h4>
                                <p>{ data && ((data.recovered / data.cases) * 100).toFixed(2)}% Recovery rate </p>

                            </Card>
                        </div>
        </section>
  </Fragment>
    )
}

export default Summary
