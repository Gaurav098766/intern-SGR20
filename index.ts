import axios from 'axios';
import {TokenDayData, TokenResponse} from './interface'
import {formatDate} from './formatDate'
import * as dotenv from 'dotenv'
dotenv.config();


// If we dont want to show our token to the user : SAFETY PURPOSE
// const tokenID = process.env.TOKEN_ID! 


// I HAVE USED THE TOKEN WHICH YOU HAVE PROVIDED

const HistoricalData = async () => {
  const query = `
      {
        token(id: "0x43c3ebafdf32909ac60e80ee34ae46637e743d65") {
          id
          name
          symbol
          totalLiquiditySRG
          liquidityUSD
          tokenDayData {
            priceUSD
            dailyVolumeUSD
            totalLiquidityUSD
            date
            id
        }
      }
    }
  `;

  try {
    const responseData: Record<string, any> = {
            "Time": [],
            "PriceHistory": [],
            "VolumeHistory": [],
            "LiquidityHistory": []
    }


    const response = await axios.post(
      "https://api.thegraph.com/subgraphs/name/somemoecoding/surgeswap-v2",
      { query }
    );

      const tokenData = response.data;
      console.log(tokenData);

      const tokenDayData:TokenDayData[] = response.data.data.token.tokenDayData;

      for (let item of tokenDayData){
        const { priceUSD, dailyVolumeUSD, totalLiquidityUSD,date} = item;

        responseData.PriceHistory.push({
          timestamp: formatDate(date),
          priceUSD: priceUSD
        });
        responseData.VolumeHistory.push({
          timestamp: formatDate(date),
          dailyVolumeUSD: dailyVolumeUSD
        });
        responseData.LiquidityHistory.push({
          timestamp: formatDate(date),
          totalLiquidityUSD: totalLiquidityUSD
        });
      }
    
    console.log(responseData);


  } catch (error) {
    console.error(error);
  }
};

HistoricalData();
