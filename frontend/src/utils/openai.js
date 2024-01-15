import OpenAI from 'openai';
import { OPENAI_KEY } from './constant';

const key = OPENAI_KEY;

const openai = new OpenAI({
  apiKey: key, // This is the default and can be omitted
  dangerouslyAllowBrowser: true,
});

export default openai;