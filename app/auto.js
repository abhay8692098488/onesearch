const openai = require('openai-api');
const OPENAI_API_KEY = 'your-api-key-here';

// Initialize OpenAI API
const openAI = new openai(OPENAI_API_KEY);

// Function to get autocomplete suggestions
async function getAutocompleteSuggestions(prompt) {
  const response = await openAI.complete({
    engine: 'text-davinci-003',
    prompt: prompt,
    maxTokens: 5,
    temperature: 0.7,
    topP: 1,
    frequencyPenalty: 0,
    presencePenalty: 0
  });

  return response.choices[0].text.trim().split('\n');
}
