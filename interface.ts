export interface TokenDayData {
    priceUSD: number;
    dailyVolumeUSD: number;
    totalLiquidityUSD: number;
    date: number;
    id: string;
  }
  
export interface TokenResponse {
    id: string;
    name: string;
    symbol: string;
    totalLiquiditySRG: number;
    liquidityUSD: number;
    tokenDayData: TokenDayData[];
  }