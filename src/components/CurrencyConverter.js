import { useState } from 'react'
import axios from 'axios'

const CurrencyConverter = () => {
    const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA' ]
    const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC')
    const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC')
    const [amount, setAmount] = useState(1)
    const [exchangedData, setExchangedData] = useState({
        primaryCurrency: 'BTC',
        secondaryCurrency: 'BTC',
        exchangeRate: 0
    })
    const [result, setResult] = useState(0)

    console.log(exchangedData)
const convert = () => {
    
    const options = {
      method: 'GET',
      url: 'https://alpha-vantage.p.rapidapi.com/query',
      params: {from_currency: chosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosenSecondaryCurrency},
      headers: {
        'X-RapidAPI-Key': 'c0912a15d9msh22cda8aac17bffap17ca2fjsnf71c9aa96887',
        'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']);
    setExchangedData(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
setResult(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']*amount)    
}
    ).catch(function (error) {
        console.error(error);
    });

}


       

        

    return (
        <div className="currency-converter">
            <h2>Currency Converter</h2>

            <div className="input-box">

                <table>
                    <tbody>
                    <tr>
                        <td>Primary Crypto:</td>
                        <td>
                            <input
                                type="number"
                                name="currency-amount-1"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </td>
                        <td>
                            <select
                                value={chosenPrimaryCurrency}
                                name="currency-option-1"
                                className="currency-options"
                                onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                            >
                                {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Secondary Crypto:</td>
                        <td>
                            <input
                                name="currency-amount-2"
                                value={result}
                                disabled={true}
                            />
                        </td>
                        <td>
                            <select
                                value={chosenSecondaryCurrency}
                                name="currency-option-2"
                                className="currency-options"
                                onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                            >
                                {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                            </select>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <button id="convert-button" onClick={convert}>Convert</button>


            </div>


           
        </div>
    )
}

export default CurrencyConverter