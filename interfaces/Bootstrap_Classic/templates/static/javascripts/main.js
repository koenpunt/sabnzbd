$(function(){

  $('[data-action]').on('click', function(event){
    event.preventDefault();
    var data = $(this).data()
      , action = data.action.split('?')
      , url = '/' + action.shift() + '?session=' + SABNZBD_SESSION + '&' + action.pop();
    
    
    if( data.confirm ){
      if( confirm( data.confirm ) ){
        console.log(url + '&del_files=1');
      }
    }else{
      console.log(url);
      window.location = url;
    }
  });
  
});