export default function ShowMore(props) {
    return (
      <div>
        <p>{props.city}{props.state}</p>
        <p>{props.email}</p>
        <p>{props.age}</p>
        <p>{props.phone}</p>
      </div>
    );
  }