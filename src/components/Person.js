import React, { useState, useEffect} from "react";
import ShowMore from "./ShowMore";

export default function Person(props) {
    const [isToggled, setIsToggled] = useState(false)

    useEffect(() => {
        console.log(isToggled)
    }, [isToggled])

    return (
        <li className="char-info" >
          <img src={props.data.picture.large} alt={props.data.name} />
          <h3>{props.data.name.first}</h3>
          {isToggled && (
            <ShowMore city={props.data.location.city} state={props.data.location.state} email={props.data.email} age={props.data.dob.age} phone={props.data.cell} />
          )}
          <button onClick={() => setIsToggled(!isToggled)}>Show More</button>
        </li>
      );

}