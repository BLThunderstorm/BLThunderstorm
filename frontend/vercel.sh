if [[ $VERCEL_GIT_COMMIT_MESSAGE == *"[allow preview]"* || "$VERCEL_ENV" == "production" ]]; then
  echo "✅ - Build can proceed"
  exit 1
else
  echo "🛑 - Build cancelled"
  exit 0
fi
