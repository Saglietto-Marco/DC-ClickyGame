import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Scoreboard from "./components/Scoreboard";
import Banner from "./components/Banner";
import CharacterCard from "./components/CharacterCard";
import { Container, Row } from "./components/Grid";

import Aquaman from "./images/Aquaman.jpg";
import Batman from "./images/Batman.jpg";
import Booster_Gold from "./images/Booster_Gold.jpg";
import Darkseid from "./images/Darkseid.jpg";
import Doomsday from "./images/Doomsday.jpg";
import Flash from "./images/Flash.jpg";
import Joker from "./images/Joker.jpg";
import LexLuthor from "./images/LexLuthor.png";
import Sinestro from "./images/Sinestro.png";
import WonderWoman from "./images/WonderWoman.jpg";
import Superman from "./images/Superman.jpg";
import Green_Lantern from "./images/Green_Lantern.png";

const images = [
    Aquaman,
    Batman,
    Booster_Gold,
    Darkseid,
    Doomsday,
    Flash,
    Green_Lantern,
    Joker,
    LexLuthor,
    Sinestro,
    WonderWoman,
    Superman
];


class App extends Component {

    // This is the Fisher-Yates (aka Knuth) Shuffle.
    shuffle = (array) => {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        array;
    }

    state = {
        score: 0,
        highScore: 0,
        clickStatus: "false"
    }

    handleIncorrect = () => {
        this.setState({ score: 0 });
    }

    handleHighscore = () => {
        if (this.highScore < this.score) {
            this.setState({ highscore: this.state.highscore + 1 });
        } else {
            this.setState({ highscore: this.state.highscore });
        }
    }

    changeClickStatus = () => {
        if (this.clickStatus === "false") {
            this.setState({ clickStatus: "true" })
        } else {
            this.handleIncorrect()
        };
    }

    handleIncrement = () => {
        this.setState({ score: this.state.score + 1 });
        this.changeClickStatus();
        this.shuffle(images);
        // this.handleHighscore();
    };


    render() {
        return (
            <div>
                <Navbar />
                <Container>
                    <Row>
                        <Banner />
                    </Row>
                    <Row>
                        <Scoreboard
                            score={this.state.score}
                            highScore={this.state.highScore}
                        />
                    </Row>
                    <Row>
                        {images.map(image => (
                            <CharacterCard
                                src={image}
                                handleIncrement={this.handleIncrement}
                                shuffle={this.shuffle}
                                clickStatus={this.state.clickStatus}
                            />
                        ))}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default App;