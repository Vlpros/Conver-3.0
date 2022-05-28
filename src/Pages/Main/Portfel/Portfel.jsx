import React from "react";
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryLabel, VictoryPie, VictorySharedEvents } from 'victory';
import Diagram from "./Diagram/Diagram";
import s from "./Portfel.css"
import state from '../../../redux-store/redux-store';




const Portfel = (props) => {
    
    debugger
    // Курс самописный
    let btc = state.portfelPage.btc;
    let eth = state.portfelPage.eth;
    let usd = state.portfelPage.usd;


    //создание ссылок  
    let btcval = React.createRef();
    let ethval = React.createRef();
    let usdval = React.createRef();
    let sumval = React.createRef();


    let aaddPost = () => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then((response) => response.json())
        .then((json) => {
          
        let btcJ=json[0].current_price
        let ethJ=json[1].current_price
        let usdJ=json[9].current_price
    
    //приведение к числу
        let f1 = parseInt(btcval.current.value)
        let f2 = parseInt(ethval.current.value)
        let f3 = parseInt(usdval.current.value)
        let sum = f1 * btcJ + f2 * ethJ + f3 * ethJ;

        sumval.current.value = sum;
        let text = sumval.current.value
        let numberText = parseInt(text)

        props.addPost("BTC", f1);
        props.addPost("ETH", f2);
        props.addPost("USD", f3);
    })
       
    }

    let deletePost = () => {
        btcval.current.value = " ";
        ethval.current.value = " ";
        usdval.current.value = " ";
        sumval.current.value = " ";
        props.cleanPost();
    }




    return (

        <div className="box-portfel">
            <div className="portfel">
                <button className='first' type='submit'>1</button>
                <h3>Портфель</h3>
                <p>Сумма портфеля в USD</p>
                <input className='inputt' ref={sumval} type='text' id='port' placeholder="Общая сумма портфеля"></input>
                <button className='count' onClick={aaddPost} type='submit' >Расчет портфеля</button>
                <button className='deletecount' onClick={deletePost} type='submit'>Очистить</button>
                <p>BTC</p>
                <input className='inputt' min="0" ref={btcval} type='number' placeholder="Добавьте в портфель"></input>
                <p>ETH</p>
                <input className='inputt' ref={ethval} type='number' placeholder="Добавьте в портфель" ></input>
                <p>USD</p>
                <input className='inputt' ref={usdval} type='number' placeholder="Добавьте в портфель"></input>

            </div>
            <div className="diagram">
                <div>
                    <svg viewBox="0 0 450 350">
                        <VictorySharedEvents
                            events={[{
                                childName: ["pie", "bar"],
                                target: "data",
                                eventHandlers: {
                                    onMouseOver: () => {
                                        return [{
                                            childName: ["pie", "bar"],
                                            mutation: (props) => {
                                                return {
                                                    style: Object.assign({}, props.style, { fill: "tomato" })
                                                };
                                            }
                                        }];
                                    },
                                    onMouseOut: () => {
                                        return [{
                                            childName: ["pie", "bar"],
                                            mutation: () => {
                                                return null;
                                            }
                                        }];
                                    }
                                }
                            }]}
                        >
                            <g transform={"translate(150, 50)"}>

                                <VictoryPie name="pie"
                                    width={300}
                                    standalone={false}
                                    style={{ labels: { fontSize: 25, padding: 10 } }}

                                    data=
                                    {props.state.portfelPage.dataDiagram}

                                />
                            </g>
                        </VictorySharedEvents>
                    </svg>
                </div>
            </div>

        </div>

    )
}
export default Portfel;
