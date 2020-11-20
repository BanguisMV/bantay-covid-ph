import { Fragment } from 'react'
import Charts from '../components/Charts';
import Summary from '../components/Summary';

const Home = ({data, timeline, world,top}) => {
  return (
    <Fragment>
      <Summary data={data}  />
      <Charts timeline={timeline} philippines={data} world={world} top={top.data}/>
    </Fragment>
  )
}

export default Home
export async function getStaticProps(context) {

  const [data, timeline, world,top ] = await Promise.all([
    fetch(`https://disease.sh/v3/covid-19/countries/philippines`).then(r => r.json()),
    fetch(`https://disease.sh/v3/covid-19/historical/philippines`).then(r => r.json()),
    fetch(`https://disease.sh/v3/covid-19/all`).then(r => r.json()),
    fetch(`https://covid19-api-philippines.herokuapp.com/api/top-regions`).then(r => r.json()),
  ]);
  return { props: { data, timeline, world,top },revalidate: 1 }
}
