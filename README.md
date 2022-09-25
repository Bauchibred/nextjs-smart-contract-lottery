
![App](img/readme-app.png)

[Example App here!](https://fancy-dream-3458.on.fleek.co/)
[Example App on IPFS here!](ipfs://Qme4KacFx21y6pYuTC6veAU2usryXB3fNWqLkX3a2hMvDe)

Built with ❤️ using:
NextJS
Solidity
Chainlink
Moralis
web3uikit
Ethers
Hardhat
IPFS

- [NextJS Smartcontract Lottery (Raffle) FCC](#nextjs-smartcontract-lottery-raffle-fcc)
- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Quickstart](#quickstart)
  - [Typescript](#typescript)
    - [Optional Gitpod](#optional-gitpod)
  - [Formatting in VSCode](#formatting-in-vscode)
- [Usage](#usage)
  - [Testing](#testing)
- [Deploying to IPFS](#deploying-to-ipfs)
- [Deploy to IPFS using Fleek](#deploy-to-ipfs-using-fleek)
- [Linting](#linting)
- [Thank you!](#thank-you)

This project is a part of the Hardhat FreeCodeCamp video.

Video coming soon...

# Getting Started

## Requirements

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - You'll know you did it right if you can run `git --version` and you see a response like `git version x.x.x`
- [Nodejs](https://nodejs.org/en/)
  - You'll know you've installed nodejs right if you can run:
    - `node --version` and get an ouput like: `vx.x.x`
- [Yarn](https://yarnpkg.com/getting-started/install) instead of `npm`
  - You'll know you've installed yarn right if you can run:
    - `yarn --version` and get an output like: `x.x.x`
    - You might need to [install it with `npm`](https://classic.yarnpkg.com/lang/en/docs/install/) or `corepack`

## Quickstart

```
git clone https://github.com/Bauchibred/nextjs-smart-contract-lottery
cd nextjs-smart-contract-lottery
yarn
yarn dev
```

### Optional Gitpod

If you can't or don't want to run and install locally, you can work with this repo in Gitpod. If you do this, you can skip the `clone this repo` part.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#github.com/PatrickAlphaC/nextjs-smartcontract-lottery-fcc)

## Formatting in VSCode

To have VSCode extension prettier auto-format `.jsx` and `.tsx`, add the following to your settings.json file:

```
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
```

# Usage

1. Run your local blockchain with the lottery code

> In a different terminal / command line

```
git clone https://github.com/PatrickAlphaC/hardhat-fund-me-fcc
cd hardhat-fund-me-fcc
yarn 
yarn hardhat node
```

> You can read more about how to use that repo from its [README.md](https://github.com/PatrickAlphaC/hardhat-fund-me-fcc/blob/main/README.md)


2. Add hardhat network to your metamask/wallet

- Get the RPC_URL of your hh node (usually `http://127.0.0.1:8545/`)
- Go to your wallet and add a new network. [See instructions here.](https://metamask.zendesk.com/hc/en-us/articles/360043227612-How-to-add-a-custom-network-RPC)
  - Network Name: Hardhat-Localhost
  - New RPC URL: http://127.0.0.1:8545/
  - Chain ID: 31337
  - Currency Symbol: ETH (or GO)
  - Block Explorer URL: None

Ideally, you'd then [import one of the accounts](https://metamask.zendesk.com/hc/en-us/articles/360015489331-How-to-import-an-Account) from hardhat to your wallet/metamask. 

3. Run this code

Back in a different terminal with the code from this repo, run:

```
yarn dev
```

4. Go to UI and have fun!

Head over to your [localhost](http://localhost:3000) and play with the lottery!


## Testing

I didn't write any front end tests 😢

If you'd like to create some tests for this repo, please make a PR!

# Deploying to IPFS

1. Build your static code.

```
yarn build
```

2. Export your site

```
yarn next export
```

> Note: Some features of NextJS & Moralis are not static, if you're deviating from this repo, you might run into errors. 

3. Deploy to IPFS

- [Download IPFS desktop](https://ipfs.io/#install)
- Open your [IPFS desktop app](https://ipfs.io/)
- Select `import` and choose the folder the above step just created (should be `out`)

4. Copy the CID of the folder you pinned

![IPFS](./img/readme-ipfs.png)

5. Get [IPFS companion](https://chrome.google.com/webstore/detail/ipfs-companion/nibjojkomfdiaoajekhjakgkdhaomnch?hl=en) for your browser (or use [Brave Browser](https://brave.com/))

5. Go to `ipfs://YOUR_CID_HERE` and see your ipfs deployed site!


# Deploy to IPFS using Fleek

You can also have [Fleek](https://fleek.co/) auto-deploy your website if you connect your github. Connect to fleek and follow along the docs there. You'll get an IPFS hash and a "regular" URL for your site. 


# Linting

To check linting / code formatting:
```
yarn lint
```


MORE EXPLANATION FOR CODE

NextJs this is a framework that's built on the Reactjs
And th reason we are using the React and Nextjs is cause react is really one of the most poopular framworks out there right now to use
uniswap, aave, inst, facebook all use reactjs which is why it's advisable to be vast at it and regarding nextjs, it makes working with reactjs easier

Taking a pause and going through the Next Js and ReactJs short course for more front end details
https://www.youtube.com/watch?v=pdsYCkUWrgQ&ab_channel=PatrickCollins




Index.js is our default page like our home page

the main code is like a jscirpt/html combination which react and nextjs allows us to do, and it makes things a lot easier

And remember that here we have to do imports and not require as we do for our nodes
nodejs != javascript
backendjs is a bit different from frontend js

App.js is our entry point for everything 
And for react/next everything is component based
public is like our public images

styles is our css
net.config.js is our ocnfiguration file

We want to build our contracts

We need to make our wallet connect button to really be powerful, so it can make our browser responsive

Components are independent reuasable bits of code, They serve the same purpose as javascript functions, but they work in isoation adnthey return html

After exporting and importing remember that we have to add it to what the page returns before we can get it on our home page

The hard way first- this is when we manually create our connect button function by using state hooks, and using moralis to check state of if web3IsEnabled and all that 
there's a whole lot of packages to connect our wallet and the react moralis is the like finest way

we are not using  dev depencies for the front end cause those are for our backend 

Use moralis is a hook, like it helps us hook into react state and lifecycle features
inorder to use moralis we need to wrap our application around it, so we go _app.js and import moralis provider and then wrap our component around it using this
  <MoralisProvider initializeOnMount={false}>
        <Component {...pageProps} />
    </MoralisProvider>
    initialize on amount here is to help us provide the optionality for us to hook into our server and add some more features to it. so since we dont want to hook anything and all of that we can just initialie equals false

    React hooks
    Hooks allow function components to have access to state and other react features.
    in essence we want our application to be different if we are connected to metamask or not so this state helps us with that, so this is wheat we want so our front end  rerenders when something changes

    Useeffect hook
    this is a core react hook that helps us in cases like for example when our wallet is already connected and we hit refresh it gets disconnected, inorder to avoid this we use the useEffect hook

    useEffect(() => {}, [])
its a function that takes 2 parameters, a function and then second it optionally takes a dependency
useeffect runs twice because of strict mode

if we dont give it any array it just keeps on running anytime the page rerenders, which ,ight be risky if we have more than one useeffect, cause now they can both keep going back and forth, which is why we use the blank array [], that way they run once and that's it

We use our local storage to make our browser know that e've connected


Web3uikit
This is a front end kit that has most of this components already built for us
to add it we run yarn add web3uikit, and it shouldn't be a dev dependency, after adding we import it in our headers file




Introduction to calling function on node.js

Here we create a new component called lottery enterance
then we import it to our index.js

under the lottery we are going to use moralis to call some of these functions with a hook called useWeb3Contract
now they are a lot of constants we are going to need for this page and so advisably we create a constant folder and store everything we are going to use in there

But there is a more effective way which is to create a deploy script which means that anytime we deploy it auto creates the constants file for us, remember that this is done in our smart contract deployment and not in the front end file
And we want this to be the last thing that deploys, while we are deploying
Also we might want to do this only when we have a env file and then we can just add our process.env.UPDATE_FRONT_END then we use an if statement in our last deployment file if it exists to auto update, 

Everything goes through our app.js


Run Contract Function

in our lotterjs file
we can usemoralis to check our chainud by using
const { chainId } = useMoralis 
and the function auto knows what chain we are on
but the chainid give us the hex edition, so to get the real number wedo a bit of jscript which would be 

const { chainId: chainIdHex } = useMoralis()
console.log(parseInt(chainIdHex))

and now with this we don't get the hex code but rather the main chain id, and the line just interprets to pull out the chain id and name it chainIdHex

Runcontractfunction can both send transactions and read state

Calling function in nextJs
remember that in our html in jsx or js files, we use curly brackets to add javascript to our code

Notifications
we can use the web3uikit 
we import this in our appjs and then we also imort useNotification in our lottery.js
Also our runcontract function comes automatically with the onSuccess OnError and a lot of other stuffs, which helps us know the state of a particular thing we are trying to run.


Tailwind Css
What this does is that in our code we can now set minimalistic styles and tailwind covers it for us
We can also just have up our tailwind site and like search what we need at a particular time in essence if we want a border with 2 pixels we can get that from the tailwind website and just add it to our code directly
And to make our CSS to take effect, we stop the node rerun yarn dev


Introduction to hosting sites
There are diferent places we can deploy our applications like vercel amd the rest, but these are all centralised but if we want to have a decentralised front end it's a bit harder.
So the main thing is to be sure that the smart contracts in the back end are deployed and decentralised, as this is the main aspect that a decentralisation is needed

IPFS
This a decentralised data structure
the first ipfs does is to hash the data and give us th eunique code, and all the data that has been hashed we can now pin this to our node, our node is connected to other ipfs nodes
One difference between IPFS and blockchains is that, it can't really execute anything it can just store data, and it's a decentralised storage, now the issue is a lot of nodes have to pin our data before we can really say it's decentralised3
Hosting on IPFS
so we import our files to ipfs then we copy the CID 


We can make a static website 
but to do this there are some features we can't use 
yarn next export is the command line for us to export our static website.
then we now have an out folder. we then import it in the ipfs
we pin it to our local node, and once it's up we copy CID and check it on brave or chrome, and we immediately get dropped to our site in our browser

Hosting on IPFS & Filecoin using Fleek
This is the easier way to add our code to ipfs using the fleek.co

Filecoin is like a blockchain that helps pin pur data
with this we push tp git first and from there on we add it to filecoin, and if we make any changes on our code we can just re-add it to our github repo and filecoin auto updates it for us for the same url

Filecoin Overview
ipfs doesnt have data persistance but filecoin has this 
IPFS is unique cause it uses content addressing, that means each data has it's own unique cryptographical fingerprint as we might call it 
To make the network phaseable, filecoin uses storage deals 
so once a payment is made, a provider provides you with a unique copy of your original data over time to make sure that the data is persisted and they create proof of state times, which means that you can check on the blocckchain at any time to see if the storage is still up, and one would have to stake fil on the chain to be a network provider 

so in short ipfs is a protocol like HTTP
and Filecoin is a blockchain, and you can store 
Devtools for ipfs and filecoin;
1-Fleek, this just uses ipfs to 
@-NFT storage- to store your nfts
3.WEB3.storage - A decentralised storage
4-Textile powergate, and others
5-OrbitDB, similar to what it's used in web2


Below are some of the codes before editting to get the final lines of codes


1- _app.js

import "../styles/globals.css"
import { MoralisProvider } from "react-moralis"

function MyApp({ Component, pageProps }) {
    return (
        <MoralisProvider initializeOnMount={false}>
            <Component {...pageProps} />
        </MoralisProvider>
    )
}

export default MyApp

2- MANUALHEADER.JS

import { useMoralis } from "react-moralis"
/*import { ConnectButton } from "web3uikit"*/
import { useEffect} from "react"

export default function ManualHeader() {
    const { enableWeb3, account } = useMoralis()

    useEffect(() => {}, [])
    return (
        <div>
            {account ? (
                <div>
                    Connected to {account.slice(0, 6)}...{account.slice(account.length - 4)}
                </div>
            ) : (
                <button
                    onClick={async () => {
                        await enableWeb3()
                    }}
                >
                    Connect
                </button>
            )}
        </div>
    )
}


import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import ManualHeader from "../component/ManualHeader"
import { useMoralis } from "react-moralis"

export default function ManualHeader() {
    const { enableWeb3 } = useMoralis()
    return (
        <div className={styles.container}>
            <Head>
                <title>Smart contract lottery</title>
                <meta name="description" content="Our Smart contract lottery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ManualHeader />
            Hello
        </div>
    )
}
# nextjs-smart-contract-lottery
# nextjs-smart-contract-lottery
