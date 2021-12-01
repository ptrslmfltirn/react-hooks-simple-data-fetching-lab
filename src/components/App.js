import react, {useEffect, useState} from "react";


function App () {
    const [dogData, setDogData] = useState([])
    const [renderState, setRenderState] = useState(false)
    useEffect(() => {
        fetch(`https://dog.ceo/api/breeds/image/random`)
          .then((response) => response.json())
          .then((data) => {
            setDogData(data);
            setRenderState(true);
          });
      }, []);
    if (!renderState) return <h3>Loading...</h3>;
    return (
    <div>
        <img src={dogData.message} alt='A Random Dog'></img>
    </div>
    )}

export default App