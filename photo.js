function photo() {
     var photos = ['https://lh5.googleusercontent.com/-DV4ZZENpDqk/VDMgBFiSQmI/AAAAAAAAEHo/palPNtgMO-Q/w821-h581-no/One-Piece-19.png',
     'http://vignette3.wikia.nocookie.net/doblaje/images/d/d4/SoulEater.jpg/revision/latest?cb=20140713003209&path-prefix=es',
     'http://vignette2.wikia.nocookie.net/eyeshield21/images/c/c0/245854-demondevilbats.jpg/revision/latest?cb=20120602015158&path-prefix=es',
     'https://theregularcritic.files.wordpress.com/2015/12/diamond-no-ace2.jpg',
     'http://www.imovilizate.com/wp-content/uploads/2014/10/Nanatsu-no-Taizai-1.jpg', 
     'http://static.zerochan.net/Boku.no.Hero.Academia.full.1937562.jpg',
     'http://www.deculture.es/wp-content/uploads/2015/09/one-punch-man-anime-licenciado.jpg',
     'http://static.chilango.com/media/2014/10/28/naruto-shippuden.jpg',
     'http://s.libertaddigital.com/fotos/noticias/dragon-ball.jpg',
     'http://k33.kn3.net/taringa/8/6/C/D/E/F/Yustyyus/62C.jpg']
     var operation = document.getElementById('fotitos');
     var photoRandom = photos[Math.floor(Math.random() * photos.length)];
     operation.innerHTML = '<img src="' + photoRandom + '">';
}