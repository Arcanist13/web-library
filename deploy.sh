#!/bin/bash

# Frontend
ng build --configuration production
cp -fr /home/arcanist/repos/web-library/dist/web-library/* /home/arcanist/live/web-library/ui

# Backend
/home/arcanist/live/web-library/ws/stop.sh
sudo /home/arcanist/live/web-library/ws/stop.sh
rsync -avr --exclude=*.sqlite /home/arcanist/repos/web-library/ws/ /home/arcanist/live/web-library/ws
sudo /home/arcanist/live/web-library/ws/start.sh
