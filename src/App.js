import React from 'react';
import Timer from "./Timer/Timer.js";

class App extends React.Component {
    render() {
        return (
            <div>
                <Timer count={20000} step={1000}/>
                <Timer count={20000} step={1000} autostart
                    timerStart={() => console.log("Timer started")}
                    timerStop={() => console.log("Timer stopped")}
                    timerReset={() => console.log("Timer restarted")}
                    timerOut={() => console.log("Timer out")}
                />
            </div>
        )
    }
}

export default App;
