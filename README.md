# Decentralized Voting Application | BlockVote
Made by Ualikhan Kamarov, Ali Atchibayev, Aigali Sultankul, Alibi Kemelbek and Beksultan Nalibek from SE-2211

## Installation

Firstly, we should install the modules

```shell
npm install
```

Secondly we need to compile the contract and upload it to the blockchain network. By running the following commands we can compile and upload the contract.

```shell
npx hardhat compile
npx hardhat run --network sepolia scripts/deploy.js
```

Once the contract is uploaded to the blockchain, copy the contract address and copy it in the .env file.

Once we have pasted our private key and contract address in the .env file, we can simply run command

```shell
npm start
```