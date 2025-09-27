import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function openAIConnection (inputText)
{
    const response = await openai.responses.create({
      model: "gpt-5-nano",
      input:` Extract name of event, commencing date and time of the event and event venue from the text in double quotes "${inputText}". Give me output like this ->  Event:...., Date:...., Time:....., Venue:....., just give me details and dont say anything else.`,
      store: true,
    });
}

module.exports = openAIConnection