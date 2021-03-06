$(function(){

  var component = {
    name: 'page-main',
    path: '/',
    template_url: 'app/components/main.html',
    init: function(html){
      return  {
        template:html,
        data: function(){
          return {
            sponsors: App.sponsors
          }
        },
        mounted: function(){

          init_foundry();

         $(".volume.btn").click(
           function(){
             var video = document.getElementById("video");
             video.muted = !video.muted;
           }
         );
          PixleeAsyncInit()
        }
      }
    }
  };


    Vue.component(component.name,
      function(resolve, reject){
        $.get(component.template_url, function(html){
          resolve(component.init(html));
        });
    });

    App.routes.push( { name: component.name,
                       path: component.path,
                       component: Vue.component(component.name)
      }
    );

});
