// Safe local preflight: reports secret presence, never secret values.
import {localEnvironment} from './local-environment.mjs';
import {handleRequest} from './portrait-api.mjs';
const env=localEnvironment();
const required=['IMAGE_API_KEY','TURNSTILE_SITE_KEY','TURNSTILE_SECRET_KEY','ALLOWED_ORIGINS'];
const missing=required.filter(name=>!env[name]);
const response=await handleRequest(new Request('https://operator-test.invalid/api/portrait/health'),{...env,RATE_LIMITER:{limit:async()=>({success:true})}});
const health=await response.json();
console.log(JSON.stringify({configurationValid:health.ready,providerKeyPresent:Boolean(env.IMAGE_API_KEY),missing,model:health.model,rateLimitBinding:'Required in the deployed Worker; configured in wrangler.toml',providerGenerationVerified:false,publicDeploymentVerified:false},null,2));
if(!health.ready)process.exitCode=1;
