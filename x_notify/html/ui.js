(function ($) {
  $.extend({
      playSound: function () {
        return $(
        '<audio class="sound-player" autoplay="autoplay" style="display:none;">'
        +'<source src="' + arguments[0] + '" />'
        +'<embed src="' + arguments[0] + '" hidden="true" autostart="true" loop="false"/>'
        +'</audio>'
        ).appendTo('body');
      },
      stopSound: function () {
          $(".sound-player").remove();
      }
  });
})(jQuery);

$(function() {
  window.addEventListener('message', function(event) {
    if (event.data.name == "addNotification"){
      createnotify(event.data.message);
    }
  });
});

var index = 0, notifys = [], maxOpened = 5;
function createnotify(message, img) {
  var notify = {}
  notify.id = index++;
  notify.code = '<div id="notify-'+notify.id+'" class="notify">'+
  '<span><img src="  https://cdn.tipo.live/files/avatar/6496_avatar.jpg">'+message+'</span>' +
  '</div>';

  if (maxOpened && notifys.length >= maxOpened) {
    remove(notifys[0].id)
  }

  notifys.push(notify);
  $(notify.code).appendTo('notification-box')
  $('#notify-'+notify.id).addClass('notify-enter');
  $.playSound('./audio.mp3')
    setTimeout(function(){
      $('#notify-'+notify.id).removeClass('notify-enter');
      remove(notify.id);
    }, 5000);
}

function remove(id) {
    var notify = findnotify(id);

    if (notify) {
        $('#notify-'+id).addClass('notify-leave')
        setTimeout(function() {
        $('#notify-'+id).css('display', 'none');
        $('#notify-'+id).remove();
        }, 500);
        var index = notifys.indexOf(notify)
        notifys.splice(index, 1)
    }
    
    function findnotify(notifyId) {
      for (var i = 0; i < notifys.length; i++) {
        if (notifys[i].id == id) {
          return notifys[i]
        }
      }
    }

}