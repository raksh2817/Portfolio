#!/usr/bin/env bash
set -euo pipefail

PROJECT_REF="${SUPABASE_PROJECT_REF:-wetzuykavkdbnzuglqxp}"
SUPABASE_URL="https://${PROJECT_REF}.supabase.co"

if ! command -v vercel >/dev/null 2>&1; then
  echo "Install the Vercel CLI first: npm install -g vercel"
  exit 1
fi

if ! vercel whoami >/dev/null 2>&1; then
  echo "Run 'vercel login' first."
  exit 1
fi

if ! command -v supabase >/dev/null 2>&1; then
  echo "Install the Supabase CLI first: npm install -g supabase"
  exit 1
fi

ANON_KEY="$(supabase projects api-keys --project-ref "$PROJECT_REF" --output json | node -e "
  const keys = JSON.parse(require('fs').readFileSync(0, 'utf8'));
  const anon = keys.find((key) => key.name === 'anon' && key.type === 'legacy');
  if (!anon) throw new Error('Could not find anon key');
  process.stdout.write(anon.api_key);
")"

SERVICE_ROLE_KEY="$(supabase projects api-keys --project-ref "$PROJECT_REF" --output json | node -e "
  const keys = JSON.parse(require('fs').readFileSync(0, 'utf8'));
  const serviceRole = keys.find((key) => key.name === 'service_role' && key.type === 'legacy');
  if (!serviceRole) throw new Error('Could not find service role key');
  process.stdout.write(serviceRole.api_key);
")"

printf '%s\n' "$SUPABASE_URL" | vercel env add SUPABASE_URL production preview development
printf '%s\n' "$ANON_KEY" | vercel env add SUPABASE_ANON_KEY production preview development
printf '%s\n' "$SERVICE_ROLE_KEY" | vercel env add SUPABASE_SERVICE_ROLE_KEY production preview development

echo "Vercel environment variables updated for project ref ${PROJECT_REF}."
echo "Remove the old paused db_portfolio_rs integration in Vercel if deploys still fail at provisioning."
