module.exports = {
  name: "Alpen Testnet",
  chain: "ALPEN",
  rpc: [
    "https://rpc.testnet.alpenlabs.io"
  ],
  faucets: [
    "https://faucet.testnet.alpenlabs.io"
  ],
  nativeCurrency: {
    name: "Signet BTC",
    symbol: "sBTC",
    decimals: 18
  },
  features: [
    { name: "EIP155" },
    { name: "EIP1559" }
  ],
  infoURL: "https://docs.alpenlabs.io/welcome/get-started",
  shortName: "alp-test",
  chainId: 8150,
  networkId: 8150,
  explorers: [
    {
      name: "alpen-testnet-explorer",
      url: "https://explorer.testnet.alpenlabs.io",
      standard: "EIP3091"
    }
  ]
};
