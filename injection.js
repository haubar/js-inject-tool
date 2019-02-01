javascript:
      var timestamp = new Date().getTime();
          action      = document.createElement('script');
          action.type = 'text/javascript';
          action.src  = 'https://raw.githubusercontent.com/haubar/js-inject-tool/master/demo_alert.js';
          document.body.appendChild(action);
      void(0);
