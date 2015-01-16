javascript:
      var timestamp = new Date().getTime();
          action      = document.createElement('script');
          action.type = 'text/javascript';
          action.src  = 'http://localhost/alert.js';
          document.body.appendChild(action);
      void(0);