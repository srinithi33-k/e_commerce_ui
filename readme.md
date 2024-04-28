# angular-app
./node_modules/.bin/http-server

pm2 start $(which http-server) -p 8080
pm2 list
pm2 stop ...