echo "VERCEL_ENV: $VERCEL_ENV"

if [[ "$VERCEL_GIT_COMMIT_REF" == "develop" ||  "$VERCEL_GIT_COMMIT_REF" == "master"]] ; then
  # Proceed with the build
    echo "✅ - Build can proceed"
  exit 1;
else
  # Don't build
  echo "🛑 - Build canceled on branch $VERCEL_GIT_COMMIT_REF"
  exit 0;
fi