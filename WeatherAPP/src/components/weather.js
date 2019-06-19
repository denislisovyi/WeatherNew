import React from "react";

class Weather extends React.Component{

    render(){

        return(

            <div className="weather-info">
                {
                    this.props.country && this.props.city && <p className="weather__key"><img src="https://img.icons8.com/dusk/64/000000/building.png" alt="c" />Місто: 
                        <span className="weather__value">  {this.props.city}, {this.props.country}</span>                    
                    </p> 
                }
                
                {
                    this.props.temperature && <p className="weather__key"><img src="https://img.icons8.com/plasticine/64/000000/temperature.png" alt="d" />Температура: 
                        <span className="weather__value">  {this.props.temperature}</span>
                    </p>
                }

                {
                    this.props.humidity && <p className="weather__key"><img src="https://img.icons8.com/dusk/64/000000/humidity.png" alt="e"  />Вологість: 
                        <span className="weather__value">  {this.props.humidity}</span>
                    </p>
                }

                {
                    this.props.description && <p className="weather__key"><img src="https://img.icons8.com/color/64/000000/chance-of-storm.png"  alt="f" />Умови:  
                        <span className="weather__value">  {this.props.description}</span>
                    </p>
                }

                {
                    this.props.error && <p className="weather__error">{this.props.error}</p>
                    
                }
        
            </div>
        )
    }
}

export default Weather;