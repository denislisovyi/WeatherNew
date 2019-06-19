import React from "react";

class Titles extends React.Component {

    render() {

        return (

            <div>
                <img id ="icons" src="https://img.icons8.com/bubbles/150/000000/sun.png" alt ="b"/>
                <h1 className="title-container__title">Погода </h1>
                <p className="title-container__subtitle"> Допомагає знайти погодні умови в містах ...</p>
            </div>
        )
    }
}

export default Titles;