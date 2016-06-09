//Kendra showed me this is best practice to have 'DOMContentLoaded' as eventListener
document.addEventListener('DOMContentLoaded',function(){
  var request = new XMLHttpRequest();
  var album = document.getElementById('albumArt');
  function displayAlbumArt() {
    request.onreadystatechange = function() {
      if(request.readyState === 4){
        if(request.status < 400){
          var result = JSON.parse(request.responseText).results;

          for (var i = 0; i < result.length; i++) {
            var albumName = result[i].cover_art;
            console.log(albumName);

            var randomAlbum = document.createElement('img');
            randomAlbum.src='images/'+ albumName;
            randomAlbum.width = 150;
            randomAlbum.height = 150;
            console.log(randomAlbum);

            album.appendChild(randomAlbum);
          }
        }
      }
    }
    request.open('GET', 'https://lit-fortress-6467.herokuapp.com/object');
    request.send();
  }
  displayAlbumArt();
});
