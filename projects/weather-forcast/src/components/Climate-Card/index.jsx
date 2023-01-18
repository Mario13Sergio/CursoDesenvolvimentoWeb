import"./style.css"

export function ClimateCard( climate, condition) {
    return(
        <div className="weatherCondition">
            <p>{climate}</p>
            <h4>{condition}</h4>
        </div>
    )
}