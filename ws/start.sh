#!/bin/bash

export LIBRARY_WS_DEV=0
screen -d -m -p 0 -S "library-webserver" bash -c "cd /home/arcanist/live/web-library/ws; source /home/arcanist/live/web-library/ws/venv/bin/activate; uvicorn main:app  --host 127.0.0.1 --port 8002;"
