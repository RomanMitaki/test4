<script lang="ts">
  import {onMount} from "svelte";

  const BASE_URL = 'https://open.er-api.com/v6/latest';
  let currencies = [];
  let from = 'RUB';
  let to = 'USD';
  let leftAmount = '1';
  let rightAmount = '0';
  let exchangeRates = {};
  let currentRate = 0;

  function handleChange(e) {
    if (e.target.name === "leftAmount") {
      leftAmount = e.target.value;
      rightAmount = (+leftAmount * currentRate).toFixed(4)
    } else {
      rightAmount = e.target.value;
      leftAmount = (+rightAmount / currentRate).toFixed(4)
    }
  }

  function handleFocus() {
    this.select();
  }

  function handleInput(e) {
    if (e.target.name === "fromCurrency") {
      from = e.target.value.toUpperCase();
    } else {
      to = e.target.value.toUpperCase();
    }
  }

  async function fetchRates(currency: string) {
    const res = await fetch(`${BASE_URL}/${currency}`);
    const data = await res.json();
    currencies = [...Object.keys(data.rates)].sort();
    exchangeRates = {...data.rates};
    currentRate = exchangeRates[to];
    rightAmount = (+leftAmount * currentRate).toFixed(4);
  }

  function handleCurrencyChangeTo(e) {
    currentRate = exchangeRates[to];
    rightAmount = (+leftAmount * currentRate).toFixed(4);
  }

  function handleCurrencyChangeFrom(e) {
    fetchRates(from);
  }

  onMount(async () => {
    const res = await fetch(`${BASE_URL}/${from}`);
    const data = await res.json();
    currencies = [...Object.keys(data.rates)].sort();
    exchangeRates = {...data.rates};
    currentRate = exchangeRates[to];
  })

</script>

<main class="calc">
  <div class="calc__wrapper_title">
    <h1>Currency Converter</h1>
  </div>
  <div class="calc__wrapper_sides">
    <div class="calc__wrapper_side">
      <div class="calc__side">
        <label class="calc__label" for="leftAmount">Amount of {from}</label>
        <input
                id="leftAmount"
                class="calc__input"
                name="leftAmount"
                type="number"
                min="0"
                placeholder="Enter amount"
                maxlength="10"
                value={leftAmount}
                on:input={handleChange}
                on:focus={handleFocus}
        />
      </div>
      <div class="calc__side">
        <label class="calc__label" for="fromCurrency">Convert From:</label>
        <input
                id="fromCurrency"
                class="calc__input"
                name="fromCurrency"
                maxlength="3"
                value={from}
                on:input={handleInput}
                on:focus={handleFocus}
                on:change={handleCurrencyChangeFrom}
                list="fromCurrencyList"
        />
        <datalist id="fromCurrencyList">
          {#each currencies as option}
            <option>{option}</option>
          {/each}
        </datalist>
      </div>
    </div>
    <div class="calc__wrapper_side">
      <div class="calc__side">
        <label class="calc__label" for="rightAmount">Amount of {to}</label>
        <input
                id="rightAmount"
                class="calc__input"
                name="rightAmount"
                type="number"
                min="0"
                placeholder="Enter amount"
                maxlength="10"
                value={rightAmount}
                on:input={handleChange}
                on:focus={handleFocus}
        />
      </div>
      <div class="calc__side">
        <label class="calc__label" for="toCurrency">Convert To:</label>
        <input
                id="toCurrency"
                class="calc__input"
                name="toCurrency"
                maxlength="3"
                value={to}
                on:input={handleInput}
                on:focus={handleFocus}
                on:change={handleCurrencyChangeTo}
                list="toCurrencyList"
        />
        <datalist id="toCurrencyList">
          {#each currencies as option}
            <option>{option}</option>
          {/each}
        </datalist>
      </div>
    </div>
  </div>
  <footer>
    <a href="https://www.exchangerate-api.com">Rates By Exchange Rate API</a>
  </footer>
</main>

<style>
  .calc {
    width: 100%;
    padding: 1em;
    box-sizing: border-box;
    max-width: 768px;
    min-width: 320px;
    margin: 0 auto;
    display: flex;
    height: 40vh;
    flex-direction: column;
    text-align: center;
    border: 1px solid transparent;
    border-radius: 20px;
    box-shadow: 0 5px 10px 0 rgb(0 0 0 / 70%);
    background: #004225;
    color: black;
  }

  .calc__wrapper_title {
    box-sizing: border-box;
    width: 100%;
    margin: 1em auto;
    padding-bottom: 3em;
  }

  .calc__wrapper_sides {
    display: flex;
    box-sizing: border-box;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
  }

  .calc__wrapper_side {
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    height: 100%;
  }

  .calc__side {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 1em 0;
  }

  .calc__label {
    position: absolute;
    top: -10px;
    left: 10px;
    background: inherit;
    color: #FFCF9D;
    padding: 0 .5em;
  }

  .calc__input {
    background: inherit;
    color: #F5F5DC;
    padding: 1em;
    border-radius: 20px;
    width: 200px;
    border: 1px solid #FFB000;
    outline: none;
  }

  .calc__input:focus {
    outline: 1px solid #FFCF9D
  }


</style>
