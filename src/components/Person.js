import React, { useState, useEffect} from "react";

export default function Person(props) {
    const [isToggled, setIsToggled] = useState(false)

    useEffect(() => {
        console.log(isToggled)
    }, [isToggled])

    return (
        <li className="char-info" key={props.id}>
          <img src={props.data.picture} alt={props.data.name} />
          <h3>{props.data.name}</h3>
          {isToggled && <p>{props.data.email}</p>}
          <button onClick={() => setIsToggled(!isToggled)}>Show More</button>
        </li>
      );

}