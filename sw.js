// সরল service worker: কোনো ক্যাশ করে না, তাই আপডেট ও লগইন সবসময় ঠিক থাকে
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
