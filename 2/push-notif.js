var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BLck9QqKft8vvrWNtL1nR2RQUBnZgINpQON3rtCh9T4QnxUjXWnE4dDyMQ0GtjATzmfJdQUL1_Z89QDLav0ic64",
   "privateKey": "yN-M4lXONwyjRzhZ_ED4nqMsRA-Fz5O3vzphfPAo0mo"
};
 
 
webPush.setVapidDetails(
   'mailto:tomi.kiyatmoko19@gmail.com',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint":"https://fcm.googleapis.com/fcm/send/f-C19VIjLzM:APA91bEtlVUcHyUo8MzH_1PCQzNjpBk-9fWzRT6xxWalwnVjnHx_flmfD0-E5-3Iy8hBXnSfhAnjluS01iWSNZtenS2VAGan3fJilh7eaz4lNNpwpn6uA1koxTV4ZL2J8MqrOTd-1EF8",
   "keys": {
       "p256dh":"BHfMbpbNXYcU4qpGxKBiEBwVh1oTVkcibYOC0KEwQIjoNekc2NAW6JFycZFck/KOBWAf99oOI4xO9ljluyVtdq8=",
       "auth": "LgHcmLrDBPG7IMN2zIaMDw=="
   }
};
var payload = 'Selamat Datang Di Serie A Italia';
 
var options = {
   gcmAPIKey: '1057640402612',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);