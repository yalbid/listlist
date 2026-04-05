self.addEventListener('notificationclick', function(e) {
  e.notification.close();
  e.waitUntil(clients.matchAll({type:'window'}).then(function(list) {
    for (var i = 0; i < list.length; i++) {
      if (list[i].url.includes('happy-cal') && 'focus' in list[i]) return list[i].focus();
    }
    if (clients.openWindow) return clients.openWindow('./');
  }));
});
