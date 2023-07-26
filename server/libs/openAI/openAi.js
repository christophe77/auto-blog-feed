require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

const { OPENAI_API_KEY } = process.env;
const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function generateArticle(language, theme) {

  const askQuestion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `can you write me in ${language} a title between <title> and </title> tag and a long text of 10000 words about ${theme} between <text> and </text> tag?`,
    max_tokens: 2000,
    temperature: 0.3,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });

  const response = askQuestion.data.choices[0].text;

  const title = response.substring(
    response.indexOf("<title>") + 7,
    response.lastIndexOf("</title>"))

  const text = response.substring(
    response.indexOf("<text>") + 6,
    response.lastIndexOf("</text>"))

  return {
    title,
    text
  }
}

async function createImage(question, size) {
  const generateImage = await openai.createImage({
    prompt: question,
    n: 1,
    size,
  });
  return generateImage;
}

const openAi = {
  generateArticle,
  createImage
};

module.exports = openAi;
