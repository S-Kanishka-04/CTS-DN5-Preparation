import {
    OddPlayers,
    EvenPlayers,
    IndianPlayers
} from "./Components/IndianPlayers";

import ListofIndianPlayers from "./Components/ListofIndianPlayers";
import ListofPlayers, { players } from "./Components/ListofPlayers";
import Scorebelow70 from "./Components/Scorebelow70";

function App() {

    const flag = true;

    const IndianTeam = [
        "Sachin",
        "Dhoni",
        "Virat",
        "Rohit",
        "Yuvraj",
        "Raina"
    ];

    if (flag === true) {

        return (

            <div>

                <h1>List of Players</h1>

                <ListofPlayers />

                <hr />

                <h1>List of Players having Scores Less than 70</h1>

                <Scorebelow70 players={players} />

            </div>

        );

    }

    else {

        return (

            <div>

                <h1>Indian Team</h1>

                <h2>Odd Players</h2>

                {OddPlayers(IndianTeam)}

                <hr />

                <h2>Even Players</h2>

                {EvenPlayers(IndianTeam)}

                <hr />

                <h2>List of Indian Players Merged</h2>

                <ListofIndianPlayers
                    IndianPlayers={IndianPlayers}
                />

            </div>

        );

    }

}

export default App;