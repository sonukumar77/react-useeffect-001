import { useEffect, useState } from 'react';
import { baseURL, APP_ID, APP_KEY } from "./utils";
import Search from './components/Search';
import SingleCard from './components/SingleCard';

function App() {

  const [keyword, setKeyword] = useState();
  const [apiData, setApiData] = useState({});
  //  console.log(apiData)
  //  console.log(keyword)
  useEffect(() => {

    (async () => {
      const res = await fetch(`${baseURL}?q=${keyword}&app_id=${APP_ID}&app_key=${APP_KEY}&type=public`);
      const data = await res.json();
      setApiData(data);
      //  console.log(data);
    })();


  }, [keyword])

  return (
    <div className="mainContainer">
      <Search setKeyword={setKeyword} />
      <div className="cardContainer">
        {apiData.hits?.map((single_elem, index) => {
          return <SingleCard data={single_elem} key={index} />
        })}

      </div>

    </div>
  );
}

export default App;
