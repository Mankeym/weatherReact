import './Card.css';

export function Card(props){
    let a = props.props.datetimeStr.split('T');
    console.log()
    return (
        <div className="card__item">
            <h3>{a[0].split('-').reverse().join('.')}</h3>
            <p>{props.props.conditions}</p>
            <p>{props.props.weathertype}</p>
        </div>
    )
}
