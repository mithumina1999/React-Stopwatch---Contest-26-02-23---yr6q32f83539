import { useEffect } from "react";
import "./App.css";
function App() {
    const[time, setTime] = useEffect(0);



useEffect(() => {
    setInterval(() => {
        setTime(time + 1);
        console.log(time);
            }, 1000); 
} ,[]);
   
    return (
        <div className="App">
            <h1>{time}</h1>
            <button>Start</button>
            <button>Pause</button>
            <button>Stop</button>
        </div>
    );
}
export default App;