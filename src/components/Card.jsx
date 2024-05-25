import React from "react"
import locationIcon from "../images/location-icon.png"

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-inner">
                <img className="card-img" src={props.imageUrl} alt={props.altText}/>
                <div className="cards-info">
                    <div className="cards-info-top">
                        <img className="location-icon" src={locationIcon} />
                        <p className="location">{props.location.toUpperCase()}</p>
                        <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
                    </div>
                    <h2>{props.title}</h2>
                    <h3>{props.startDate} - {props.endDate}</h3>
                    <p className="cards-description">{props.description}</p>
                </div>
            </div>
            <hr />
        </div>
    )
}