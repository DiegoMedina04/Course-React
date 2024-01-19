export function Greeting({title, name}) {
  return (
    <div>
      <h1>Componente {title} {name}</h1>
    </div>
  );
}

export function UserCard(props) {
 console.log('hola')
 props.greet();
  return (
    <div>
    <h1>{props.name}</h1>
    <p>$ {props.amount}</p>
    <p> {props.married? 'casado': 'no casado'}</p>

    <ul> 
        <li>{props.address.city}</li>
        <li>{props.address.street}</li>
    </ul>
  </div>
  );
}
