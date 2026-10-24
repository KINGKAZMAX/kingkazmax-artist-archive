// A local convenience only. Production always requires IMAGE_API_KEY explicitly.
export function localEnvironment(source=process.env){
  const env={...source};
  const base=env.IMAGE_API_BASE_URL||'https://api.openai.com/v1';
  // Never forward the OpenAI fallback key to a third-party API base URL.
  if(!env.IMAGE_API_KEY&&/^https:\/\/api\.openai\.com\/v1\/?$/.test(base))env.IMAGE_API_KEY=env.OPENAI_API_KEY;
  return env;
}
