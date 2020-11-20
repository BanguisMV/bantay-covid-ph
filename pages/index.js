
import Charts from '../components/Charts';
import Summary from '../components/Summary';

const Home = ({data, timeline}) => {
  return (
    <>
      <Summary data={data}  />
      <Charts data={timeline} />
    </>
  )
}

export default Home
export async function getServerSideProps(context) {

  const [data, timeline] = await Promise.all([
    fetch(`https://disease.sh/v3/covid-19/countries/philippines`).then(r => r.json()),
    fetch(`https://disease.sh/v3/covid-19/historical/philippines`).then(r => r.json()),
  ]);
  return { props: { data, timeline } }
}
