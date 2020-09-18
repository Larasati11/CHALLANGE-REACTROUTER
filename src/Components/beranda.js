import React from 'react'

class Beranda extends React.Component{
    render() {
        return(
          <body>
            
          <div class=" shadow-lg p-3 mb-2 bg-light text-black">
          <div class="alert alert-dark alert-dismissible fade show" role="alert">
          <strong>------HAI USER!------</strong> Selamat Datang Di Web Covid 19 //STAY AT HOME// JANGAN LUPA PAKAI MASKER:)
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        </div>
        <br/>
        <div class=" p-3 mb-2 bg-info text-dark">
        <br/>
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
        <div class="alert alert-info" role="alert"></div>
        <h1 class="display-4">SEBERAPA TAU KAMU TENTANG COVID 19 ?</h1>
        <div class="alert alert-info" role="alert"></div>
        <p class="lead">SEMOGA WEB INI BISA MEMBANTU PENGETAHUAN KALIAN MENGENAI COVID 19</p>
      </div>
      </div>
      </div>
      
      <div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h2 class="mb-0">
        <button class="btn btn-info" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          APA ITU COVID-19 ?
        </button>
        <div class="spinner-border text-dark" role="status">
  <span class="sr-only">Loading...</span>
</div> 
      </h2>
    </div>
    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
      <h3>Severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) yang lebih dikenal dengan nama virus Corona adalah jenis baru dari coronavirus yang menular ke manusia. Virus ini bisa menyerang siapa saja, seperti lansia (golongan usia lanjut), orang dewasa, anak-anak, dan bayi, termasuk ibu hamil dan ibu menyusui. Infeksi virus Corona disebut COVID-19 (Corona Virus Disease 2019) dan pertama kali ditemukan di kota Wuhan, China pada akhir Desember 2019. Virus ini menular dengan sangat cepat dan telah menyebar ke hampir semua negara, termasuk Indonesia, hanya dalam waktu beberapa bulan.</h3>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h2 class="mb-0">
        <button class="btn btn-info collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          KAPAN COVID 19 MASUK KE INDONESIA ?
        </button>
        <div class="spinner-border text-dark" role="status">
  <span class="sr-only">Loading...</span>
</div> 
      </h2>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
      <h3>Indonesia pertama kali mengkonfirmasi kasus COVID-19 pada Senin 2 Maret lalu. Saat itu, Presiden Joko Widodo (Jokowi) mengumumkan ada dua orang Indonesia positif terjangkit virus Corona yakni perempuan berusia 31 tahun dan ibu berusia 64 tahun.
Kasus pertama tersebut diduga berawal dari pertemuan perempuan 31 tahun itu dengan WN Jepang yang masuk ke wilayah Indonesia. Pertemuan terjadi di sebuah klub dansa di Jakarta pada 14 Februari.</h3>
      </div>
    </div>
  </div>
  
  <div class="card">
    <div class="card-header" id="headingThree">
      <h2 class="mb-0">
        <button class="btn btn-info collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          BERAPA NEGARA YANG TERINFEKSI ?
        </button>
        <div class="spinner-border text-dark" role="status">
  <span class="sr-only">Loading...</span>
</div> 
      </h2>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">
      <h3>Penyebaran virus corona sudah menjangkiti 212 negara di berbagai teritori di seluruh dunia termasuk 2 moda transportsi internasional.
      Artikel ini telah tayang di Tribunjogja.com dengan judul Peringkat Negara Terbanyak Terjangkit Virus Corona, China 11, Indonesia 36, Inggris 4, USA ke-1</h3>
      </div>
    </div>
  </div>
</div>
<br/>
<button type="button" class="btn btn-info btn-block" data-toggle="modal" data-target="#exampleModalLong">
  PROFIL SAYA
</button>
<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">PROFIL SAYA</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h3>Nama    : Larasati Puspita Candra Dewi</h3>
        <h3>TTL     : Kediri, 11 Januari 2004</h3>
        <h3>Rumah   : Ngadiluwih, Kediri</h3>
        <h3>Sekolah : SMK Telkom Malang</h3>
        <h3>Jurusan : Rekayasa Perangkat Lunak</h3>
        <h3>No HP   : 081334654455</h3>
        <h3>Email   : @larasati.puspita1101@gmail.com</h3>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
        </body>
            
        )
    }
}
export default Beranda