export default function initFetchBitcoin() {
  async function fetchBitcoin(url) {
    try {
      const bitcoin = await fetch(url);
      const bitcoinJson = await bitcoin.json();
      const btcPreco = document.querySelector(".btc-preco");
      btcPreco.innerHTML = (1000 / bitcoinJson.BRL.sell).toFixed(4);
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchBitcoin("https://blockchain.info/ticker");
}

// fetch("https://blockchain.info/ticker")
//   .then((response) => response.json())
//   .then((bitcoin) => {
//     const btcPreco = document.querySelector(".btc-preco");
//     btcPreco.innerHTML = (1000 / bitcoin.BRL.sell).toFixed(4);
//   })
//   .catch((erro) => {
//     console.log(Error(erro));
//   });
