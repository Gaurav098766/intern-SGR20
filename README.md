
# SGR20 token

Develop a script that retrieves historical market indicators for SGR20 tokens using a token entry.

### 0x43C3EBaFdF32909aC60E80ee34aE46637E743d65 --> 
The given token is of SGR20 BSC. The findings has been done from the @https://surgecharts.com/

![image](https://github.com/Gaurav098766/intern-SRG20/assets/97042529/b42211ed-549b-41be-b997-26a438313579)


## API Reference

#### POST items

```https
  POST https://api.thegraph.com/subgraphs/name/somemoecoding/surgeswap-v2
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `PriceHistory` | `Array` | **Required**. Get priceUSD by date (timestamp) |
| `VolumeHistory` | `Array` | **Required**. Get dailyVolumeUSD by date (timestamp) |
| `LiquidityHistory` | `Array` | **Required**. Get liquidityUSD by date (timestamp)|



## Response

#### The response from the surge-swapv2 Playground:

![image](https://github.com/Gaurav098766/intern-SRG20/assets/97042529/a2c1efea-f2c2-48b7-bc60-c50784716924)

#### The response from my API in terminal:

![image](https://github.com/Gaurav098766/intern-SRG20/assets/97042529/38478115-ab2c-442e-ae16-6ab6608670be)

![image](https://github.com/Gaurav098766/intern-SRG20/assets/97042529/ab88ff48-8d42-4e70-b546-8bf802a0db7c)

![image](https://github.com/Gaurav098766/intern-SRG20/assets/97042529/bcefc2c0-6338-43de-825b-0c094f665b90)




## Tech Stack

**Server:** NodeJS, Typescript 

## Future Scope

**Getting to have the data hourly and not just daily.**


## Acknowledgements

 - [subgraph Overview](https://docs.surgeprotocol.io/development/subgraph-overview)
 - [GraphQL Quering Overview](https://thegraph.com/docs/en/querying/graphql-api/)


