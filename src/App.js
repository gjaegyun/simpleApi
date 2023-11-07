import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const URL = "https://api.agify.io";

  const [age, setAge] = useState(null);
  const [name, setName] = useState("michael");
  const [country, setCountry] = useState("US");


  useEffect(() => {
    Api();
  }, [name, country]);

  const Api = async () => {
    try {
      const { data:{age} } = await axios.get(URL + `?name=${name}&country_id=${country}`); //구조분해 할당을 두번 하기!!
      setAge(age);
    } catch (error) {
      console.error("오류 발생: ", error);
    }
  };

  const handleCountryChange = (newCountry) => {
    setCountry(newCountry);
  };

  return (
    <>
      <div>
        이름:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <button onClick={() => handleCountryChange("US")}>미국</button>
        <button onClick={() => handleCountryChange("UK")}>영국</button>
        <button onClick={() => handleCountryChange("KR")}>한국</button>
        <button onClick={() => handleCountryChange("JP")}>일본</button>
        <button onClick={() => handleCountryChange("CN")}>중국</button>
      </div>

      <div>예상 나이 = {age}</div>
    </>
  );
}

export default App;