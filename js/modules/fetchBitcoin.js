export default function fetchBitcoin(url, target) {
  async function getFetchBitcoin(url) {
    try {
      const bitcoin = await fetch(url);
      const bitcoinJson = await bitcoin.json();
      const btcPreco = document.querySelector(target);
      btcPreco.innerHTML = (1000 / bitcoinJson.BRL.sell).toFixed(4);
    } catch (erro) {
      console.log(erro);
    }
  }

  getFetchBitcoin(url);
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
