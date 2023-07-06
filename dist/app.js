import { OpenAI } from "langchain/llms/openai";
import * as dotenv from "dotenv";
dotenv.config();
export const run = async () => {
    const model = new OpenAI({ temperature: 0.9 });
    const res = await model.call("What would be a good company name a company that makes colorful socks? ");
    console.log({ res });
};
run();
