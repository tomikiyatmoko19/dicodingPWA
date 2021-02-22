var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BLlN6zazcrWgaIC45R1Q0ZS7jWnxYkFADKLMz7Sw3Y7mcCA4bNYU2Q-rrR7_7GilFxalUKz3iU1cT0BncrLVOtk",
   "privateKey": "jVgWPOoDUpcnizTjMOINQ-wCkwKgDUJTSL_5QL5_VLk"
};
 
 
webPush.setVapidDetails(
   'mailto:tomi.kiyatmoko19@gmail.com',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint":"https://fcm.googleapis.com/fcm/send/fRQTlOMEsB8:APA91bEAn1yF0VnQ6u8PZuMVn9VsXLa7W3IhrFnFaBS_uXfNW81cmwodpCWlN6egXrTcwOIYfQUiWWC-avYDU6-LwOim0qqABBEVhwRppQK1jy16o4ZkGkJ0iGZ8GOxiG6FhMHLzTXYq",
   "keys": {
       "p256dh":"BPJ3PWnNa8KWGWi1AngXGGT7hEmojJxFycqfkOQPo+w9AOPGWwx4t/ka7mm8YPW5l62bsjyHqfSRjTlg6rREpmg=",
       "auth": "AKeEa+xk4Gek9OmYr7VMlw=="
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