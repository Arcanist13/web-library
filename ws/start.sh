#!/bin/bash

screen -d -m -p 0 -S "library-webserver" bash -c "cd /home/arcanist/live/web-library/ws; source /home/arcanist/live/web-library/ws/venv/bin/activate; hypercorn main:app --bind 127.0.0.1:8000"
