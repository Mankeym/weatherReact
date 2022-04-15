import './Main.css'
import {useContext} from "react";
import {CardsContext} from "../../contexts/CardsContexts";
import {Card} from "../Card/Card";
import {SearchForm} from "../searcForm/searchForm";

export function Main(props){

    const data = useContext(CardsContext);
    console.log(data)

    return(
        <>
        <main className="main">
            <SearchForm onSearch={props.onSearch} />
            <div className="main__container">
                {
                    data.map((card) =>(
                        <Card props={card} />
                    ))
                }
            </div>
        </main>
        </>
    )
}
