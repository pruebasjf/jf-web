
    const p = 
    `<!-- Messenger plugin del chat Code -->
    <div id="fb-root"></div>
    
    <!-- Your plugin del chat code -->
    <div id="fb-customer-chat" class="fb-customerchat">
    </div>
    
    <script>
    var chatbox = document.getElementById('fb-customer-chat');
    chatbox.setAttribute("page_id", "105975122210222");
    chatbox.setAttribute("attribution", "biz_inbox");
    </script>
    
    <!-- Your SDK code -->
    <script>
    window.fbAsyncInit = function() {
        FB.init({
            xfbml            : true,
            version          : 'v14.0'
        });
    };
    
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/es_ES/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    </script>`;
    


    
 function pluginF(){
     const cuerpo = document.querySelector("head")
    let div = document.createElement("div");
    
    cuerpo.appendChild(div);
    div.classList.add("elplugin")
    div.innerHTML=p    



    
 }



 pluginF()

