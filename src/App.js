import './App.css';
import axios from "axios";
import {useState} from "react"

function App() {
  const [myOldUrl, setMyOldUrl] = useState("");
  const [myNewUrl, setMyNewUrl] = useState("");
  const [showUrl, setShowUrl] = useState(false)


  const  handleButtonClick = async () =>{
    console.log(`Old url: ${myOldUrl} \nNew url: ${myNewUrl}`)
    setShowUrl(true)
    try {
      const response = await axios.post("http://localhost:3000/api", {
        oldUrl: myOldUrl,
        newUrl: myNewUrl
        // Replace 'data' with the key you want for your server to recognize
      });
      setMyNewUrl(response.data.newUrl) // Log the response if needed


    } catch (error) {
      console.error("Error sending request:", error);
    }
  };
  
    
  
  return (
    <>  
      <h1>URL Shortener</h1>
      <div className="container">
        <div className="inputBox">
          <label htmlFor="inputUrl">Enter the URL you want to shorten!</label>
          <input className="inputUrl" id="inputUrl" value={myOldUrl} onChange={(e)=>{
            setMyOldUrl(e.target.value)
            setShowUrl(false)
          }}></input>

       <label htmlFor="inputUrl">Enter the subdomain, i.e. localhost:3001/(url)</label>
          <input className="inputUrl" id="inputUrl" value={myNewUrl} onChange={(e)=>{
            setMyNewUrl(e.target.value)
           
          }}></input>
          <button onClick={handleButtonClick}>Submit!</button>
          {showUrl &&
            <div>You can now access your website at: localhost:3000/{myNewUrl}</div>
          }
        </div>

      </div>
    </>
  );
        }


export default App;
