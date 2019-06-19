import React from "react";

class Form extends React.Component{

    render(){

        return(
                <form onSubmit = {this.props.loadWeather}>
         
                    <img src="https://img.icons8.com/color/32/000000/search.png" alt="a" />
                    &#8195;
                    <input type="text" name="city" placeholder="Місто"/>
                    <input type="text" name="country" placeholder="Країна"/>
                    <button>Погода</button>
                </form>
           
        )
    }
}

export default Form;