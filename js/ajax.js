    // var urlApi = 'http://36.91.39.115/morbis-IM2/api/index.php/api/mobile/pengguna';
    // var urlApi = 'https://reqres.in/api/users';
    var urlApi = 'https://shielded-beyond-23529.herokuapp.com/api/posting';
    // var urlApi = 'http://localhost:8000/api/profil';

    $.ajax({

      type: 'GET',
      url: urlApi,
      dataType: 'json',
      headers: {
        // 'Authorization': 'Basic bW9yYmlzYXBpOm1vcmJpczEyMzQ='
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyYW5kIjoxODc1ODQ3OTEsInZhbGlkX3RpbWUiOiIyMDIwLTExLTE4IDE2OjQ4OjA3In0.ThRNnhunj-bg0JzzRxOs818M0-Rvg4uGDyotOdfx0Rc',
        // 'Access-Control-Allow-Origin': urlApi
        'Content-Type': 'application/json',
        "Accept": 'application/json',
      },
      beforeSend: function (xhr) {
          xhr.setRequestHeader('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyYW5kIjoxODc1ODQ3OTEsInZhbGlkX3RpbWUiOiIyMDIwLTExLTE4IDE2OjQ4OjA3In0.ThRNnhunj-bg0JzzRxOs818M0-Rvg4uGDyotOdfx0Rc');
      },
      success: function(data){
        console.log(data);
        console.log(data.data.agama);
        var gambar = '<img src="'+ data.data.url_gambar +'" class="img-fluid" width="200" height="200" alt="">';
        var keterangan = '<p>'+data.data.deskripsi+'</p>';
        $('#gambar_profil').html(gambar);
        // $('#keterangan').html(keterangan);
        new Typed('#keterangan', {
          strings: [data.data.deskripsi],
          typeSpeed: 10,
          backSpeed: 0,
          // shuffle: false,
          // smartBackspace: false,
          // loop: false // Default value
        });
      }

    });