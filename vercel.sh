

if [[ $VERCEL_GIT_COMMIT_MESSAGE == *"[allow preview]"* || "$VERCEL_ENV" == "production" ]]; then
  echo "✅ - Build can proceed"
  exit 0
else 
   echo "🛑 - Build cancelled"
  exit 1
fi
