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
    <h1 class="calc__title">Currency Converter</h1>
  </div>
  <div class="calc__wrapper_side">
    <div class="calc__wrapper_side-left">
      <div class="calc__side">
        <label for="leftAmount">Amount</label>
        <input
                id="leftAmount"
                class=""
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
      <div class="">
        <label for="fromCurrency">Convert From:</label>
        <input
                id="fromCurrency"
                class=""
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
    <div class="calc__wrapper_side-right">
      <div class="calc__side">
        <label for="rightAmount">Amount</label>
        <input
                id="rightAmount"
                class=""
                name="rightAmount"
                type="number"
                min="0"
                placeholder="Enter amount"
                maxlength="10"
                value={rightAmount}
                on:input={handleChange}
                on:focus={handleFocus}
        />
        <div class="">
          <label for="toCurrency">Convert To:</label>
          <input
                  id="toCurrency"
                  class=""
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
  </div>
</main>

<style>

</style>
