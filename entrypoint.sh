#!/bin/sh
set -e

# Run Nginx in the foreground
exec nginx -g "daemon off;"