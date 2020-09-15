import React from 'react';
import Timer from "./Timer/Timer.js";

class App extends React.Component {
    render() {
        return (
            <div>
                <Timer count={25000} step={1000} />
                <Timer count={50000} step={1000} autostart
                    timerStart={() => console.log("Timer started")}
                    timerStop={() => console.log("Timer stopped")}
                    timerReset={() => console.log("Timer restarted")}
                />
            </div>
        )
    }
}

export default App;
