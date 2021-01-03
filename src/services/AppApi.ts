import { getRandomUSD } from "../mocks/usd";

const DELAY_MS = 500;
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export class AppApi {
  static async getRandomUSDAsync(): Promise<number> {
    await delay(DELAY_MS);
    return getRandomUSD();
  }
}
