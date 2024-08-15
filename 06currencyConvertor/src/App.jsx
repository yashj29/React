import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { MdOutlineSwapCalls } from "react-icons/md";

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)
  
  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)
  
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])  
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://img.freepik.com/free-vector/global-business-background-with-stock-chart-blue-tone_53876-119546.jpg?w=1380&t=st=1723714536~exp=1723715136~hmac=10079e5e3cea42dc8150dddf005e5b63a078aa59a94d886e94093cb7b4930ee0')`,
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-3xl mx-auto h-fit border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 h-16 w-24"
                            onClick={swap}
                            
                        >
                            Swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                             label="To"
                             amount={convertedAmount}
                             currencyOptions={options}
                             onCurrencyChange={(currency) => setTo(currency)}
                             selectCurrency={to}
                             amountDisable
                            
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
