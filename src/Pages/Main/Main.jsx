import React from "react";
import Converter from "./Converter/Converter";

import s from "./Main.css"


const Main = () => {
    let valuebtc=React.createRef();
    let valueeth=React.createRef();
    let valueusd=React.createRef();
    
    let kurs=()=>{
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then((response) => response.json())
        .then((json) => {
          
        let btcJ=json[0].current_price
        let ethJ=json[1].current_price
        let usdJ=json[9].current_price
     valuebtc.current.value=btcJ;
     valueeth.current.value=ethJ
     valueusd.current.value=usdJ

    })

    }   
    kurs();
    
    return (
        <div>
            <div className="filter-box" >

                <div className="presentation">
                    <h1 className="heading"> Конвертер...</h1>
                    <p>Добро пожаловать! Составьте свой порфтель из представленного ниже списка,прибавляя и уменьшая значения каждой валюты,а ниже вы сможете обменять вашу криптовалюту.</p>

                    <div class='kurs'>
                        <h4>Курс на сегодня в USD</h4>
                        <p>КУРС BTC</p>
                        <button class='knopkakurs' type='submit'>BTC</button>
                        <input class='btccr' ref={valuebtc} type="text" ></input>
                        <p>КУРС ETH</p>
                        <button class='knopkakurs' type='submit'>ETH</button>
                        <input class='ethcr'ref={valueeth} type="text" ></input>
                        <p>КУРС USD</p>
                        <button class='knopkakurs' type='submit'>USD</button>
                        <input class='usdcr'ref={valueusd} type="text" ></input>
                    </div>
                  <Converter/>
                    


                </div>

            </div>







        </div>

    )
}
export default Main