#!/bin/bash

if [[ "$VIRTUAL_ENV" == "" ]]
then
  source venv/bin/activate
fi

export LIBRARY_WS_DEV=1
uvicorn main:app --reload --host 0.0.0.0 --port 5000
export LIBRARY_WS_DEV=0

deactivate
