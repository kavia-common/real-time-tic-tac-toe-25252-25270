#!/bin/bash
cd /home/kavia/workspace/code-generation/real-time-tic-tac-toe-25252-25270/tic_tac_toe_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

