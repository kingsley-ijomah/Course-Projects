import React, { useState, useEffect } from 'react';

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState('');

  const API_KEY = 'hqUBoMXxqxYNZtuCzjE6qRDfD5dD2O3F'; // Replace with your actual API key

  const fetchCurrencies = async () => {
    const requestOptions = {
      method: 'GET',
      headers: new Headers({
        apikey: API_KEY,
      }),
    };

    try {
      const res = await fetch('https://api.apilayer.com/exchangerates_data/list', requestOptions);
      const data = await res.json();
      const currencyList = Object.keys(data.currencies);
      setCurrencies(currencyList);
      setFromCurrency(currencyList[0]);
      setToCurrency(currencyList[1]);
    } catch (err) {
      console.error(err);
    }
  };

  const convertCurrency = async () => {
    if (fromCurrency === toCurrency) {
      setResult(amount);
      return;
    }

    const requestOptions = {
      method: 'GET',
      headers: new Headers({
        apikey: API_KEY,
      }),
    };

    try {
      const res = await fetch(
        `https://api.apilayer.com/exchangerates_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`,
        requestOptions
      );
      const data = await res.json();
      setResult(data.result);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCurrencies();
  }, []);

  return (
    <div>
      <h2>Currency Converter</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      <span> to </span>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        {currencies.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
      <button onClick={convertCurrency}>Convert</button>
      <h3>Result: {result}</h3>
    </div>
  );
};

export default CurrencyConverter;
