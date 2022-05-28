import React from "react";

const Converter = () => {

    


    let btcC = 25;
    let ethC = 5;
    let usdC = 1;
    let proizvedenie = 1;
    let delenie = 1;
    //перменные селектов ( ПОЛУЧАЕМ ССЫЛКУ)
    let selectOne = React.createRef();
    let selectTwo = React.createRef();
    let numberCon = React.createRef();
    let itogo = React.createRef();
    //перменные селектов ( ПОЛУЧАЕМ ЧИСЛО)





    let monitor = () => {fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then((response) => response.json())
    .then((json) => {
        let btcCJ=json[0].current_price
        let ethCJ=json[1].current_price
        let usdCJ=json[9].current_price
   
        let selectOneNumber = selectOne.current.value;
        if (selectOneNumber === "BTC") {
            proizvedenie = btcCJ
        }
        if (selectOneNumber === "ETH") {
            proizvedenie = ethCJ
        }
        if (selectOneNumber === "USD") {
            proizvedenie = usdCJ
        } })
    }
    let monitorTo = () => {fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then((response) => response.json())
    .then((json) => {
        let btcCJ=json[0].current_price
        let ethCJ=json[1].current_price
        let usdCJ=json[9].current_price

        let selectTwoNumber = selectTwo.current.value;
        if (selectTwoNumber === "BTC") {
            delenie = btcCJ
        }
        if (selectTwoNumber === "ETH") {
            delenie = ethCJ
        }
        if (selectTwoNumber === "USD") {
            delenie = usdCJ
        }
    })
    }
    let count = () => {
         let numberConNumber = numberCon.current.value;
       
        itogo.current.value=proizvedenie*numberConNumber/delenie;
        
    }
 

    return (
        <div>
            <div>
                <div className="cryptovaluta">
                    <button className='second' type='submit'>2</button>
                    <h4>Выберите валюту,что на что меняем!</h4>
                    <select class='crypt' onChange={monitor} ref={selectOne}>
                        <option value='non' selected>Валюта 1</option>
                        <option value='BTC'>BTC</option>
                        <option value='ETH'>ETH</option>
                        <option value='USD'>USD</option>
                    </select>

                    <select className='cryptto' onChange={monitorTo} ref={selectTwo}>
                        <option value='non' selected >Валюта 2</option>
                        <option value='BTC'  >BTC</option>
                        <option value='ETH'>ETH</option>
                        <option value='USD'>USD</option>
                    </select>
                </div>
            </div>
            <div>
                <div class='osnova'>
                    <button className='third' type='submit'>3</button>
                    <h5>Введите кол-во валюты на обмен</h5>
                    <input className='inputt' type='text' ref={numberCon} id='sum' placeholder='Сколько меняем?'></input>


                    <p>Итого:</p>
                    <button className='convertation' onClick={count} type='submit'>Конвертация</button>
                    <input className='inputt' ref={itogo} type='text' id='itog' placeholder="Получаем"></input>
                    <button className='delete' type='submit'>Очистить</button>
                </div>
            </div>
        </div>
    )
}
export default Converter;
