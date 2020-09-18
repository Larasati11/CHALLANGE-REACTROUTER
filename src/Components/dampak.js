import React from 'react'

class Dampak extends React.Component{
    render() {
        return(
          <body>
            <div class=" shadow-lg p-3 mb-2 bg-light text-info">
            <div class="row">
  <div class="col-4">
    <div class="list-group" id="list-tab-dark" role="tablist">
      <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Dampak Terhadap Kesehatan</a>
      <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Dampak Terhadap Pendidikan</a>
      <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Dampak Terhadap Ekonomi</a>
      <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Dampak Terhadap Sosial</a>
    </div>
  </div>
  <div class="col-8">
    <div class="tab-content" id="nav-tabContent">
      <br />
      <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list"><h3>SEPERTI PENYAKIT PERNAPASAN LAINNYA, VIRUS CORONA DAPAT MENYEBABKAN GEJALA RINGAN TERMASUK PILEK,<h3>SAKIT TENGGOROKAN, BATUK, DAN DEMAM. SEKITAR 80% KASUS DAPAT PULIH TANPA PERLU PERAWATAN KHUSUS.</h3> SELAIN ITU PANDEMI INI BISA MEYEBABKAN STRESS PADA MANUSIA KARENA KETERBATASANNYA</h3></div>
      <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list"><h3>DI LEVEL PENDIDIKAN DASAR, MENENGAH DAN ATAS SECARA TEKNIS PROSES PEMBELAJARAN JARAK JAUH JUGA BANYAK MENGALAMI KENDALA. PESERTA DIDIK DARI KELUARGA YANG TIDAK MEMILIKI AKSES INTERNET ATAU BAHKAN TIDAK MEMILIKI HANDPHONE AKAN KETINGGALAN PEMBELAJARAN KETIKA TUGAS BELAJAR DISAMPAIKAN MELALUI APLIKASI WHATSAPP ATAU YANG LAINNYA. MENYIKAPI KONDISI SEPERTI ITU, PIHAK SEKOLAH SEYOGYANYA MEMBERIKAN KEBIJAKSANAAN, MISALNYA DENGAN MEMBERIKAN TUGAS DALAM BENTUK KERTAS KERJA.
SELAIN ITU DAMPAK LAIN DIRASAKAN OLEH PESERTA DIDIK DARI BELAJAR DARI RUMAH ADALAH BEBAN PELAJARAN TERLALU BANYAK. PADA SAAT YANG SAMA PESERTA DIDIK DITUNTUT UNTUK DAPAT MENCERMATI DAN MEMPELAJARI MATERI PELAJARAN SENDIRI DENGAN CEPAT. </h3></div>
      <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list"><h3>“GEJOLAK EKONOMI YANG DIAKIBATKAN OLEH PANDEMI COVID-19 INI MENGHANTAM INDONESIA BAGAIKAN SEBUAH PERFECT STORM YANG SETIDAKNYA MEMBERI TIGA DAMPAK BESAR BAGI PEREKONOMIAN,” KATANYA DI JAKARTA, SELASA (14/7).
SURYO MENYEBUTKAN DAMPAK PERTAMA ADALAH MEMBUAT KONSUMSI RUMAH TANGGA ATAU DAYA BELI YANG MERUPAKAN PENOPANG 60 PERSEN TERHADAP EKONOMI JATUH CUKUP DALAM. HAL INI DIBUKTIKAN DENGAN DATA DARI BPS YANG MENCATATKAN BAHWA KONSUMSI RUMAH TANGGA TURUN DARI 5,02 PERSEN PADA KUARTAL I 2019 KE 2,84 PERSEN </h3></div>
      <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list"><h3> KEBIJAKAN PSYSICAL DISTANCING TELAH MENGUBAH RAGAM BENTUK PERILAKU MASYARAKAT YANG KEMUDIAN MENGHARUSKAN ADANYA JARAK FISIK DALAM PROSES INTERAKSI SOSIALNYA.
DALAM KONTEKS INI, PERILAKU DAN KEBIASAAN MASYARAKAT SECARA KONVENSIONAL DI MASA PRA-PANDEMI KEMUDIAN DIATUR DAN DITRANSFORMASIKAN MELALUI POLA INTERAKSI SECARA VIRTUAL. KONDISI INI SEKALIGUS MEMPERTEGAS BAHWA FUNGSI TEKNOLOGI MENJADI SANGAT PENTING SEBAGAI PERANTARA INTERAKSI SOSIAL MASYARAKAT DI ERA PANDEMI SAAT INI.</h3></div>
    </div>
  </div>
</div>
</div>
<br/>
<div class=" p-3 mb-2 bg-info text-dark">
<div className="container">
                <div class="alert alert-dark" role="alert">
                    <h2>PENCEGAHAN COVID 19</h2>
                </div>
                
                </div>
                <div class = "container">
            <div class="card border-info mb-3">
            <div class="card-body text-info">
            <img src="masker.jpg" alt="..." class="img-thumbnail"></img><img src="cuci.jpg" alt="" class="img-thumbnail"></img><img src="sc2.jpg" alt="" class="img-thumbnail"></img> <img src="suhu.jpg" alt="" class="img-thumbnail"></img> <img src="vit.png" alt="" class="img-thumbnail"></img><hr/>
            <button type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#exampleModalLong">
  KLIK
</button>
<div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">INFO PENCEGAHAN</h5><hr/>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h3>1. MEMAKAI MASKER</h3>
        <h3>2. MENCUCI TANGAN DENGAN SABUN/ HANDSANITIZER</h3>
        <h3>3. SOCIAL DISTANCING</h3>
        <h3>3. SOCIAL DISTANCING</h3>
        <h3>4. MEMINUM VITAMIN SEBAGAI DAYA TAHAN TUBUH</h3>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-info" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</div>
  
            </div>
            <div class="card mb-3">
            <img src="vaksin.jpeg" class="card-img-top" alt="..."></img>
            <div class="card-body">
    
    <h3 class="card-text">PENEMUAN OBAT ATAU VAKSIN DARI CORONAVIRUS MERUPAKAN HARAPAN SEMUA ORANG DI DUNA.</h3>
    <h3 class="card-text">RATUSAN JUTA ORANG MENINGGAL KARENA VIRUS INI MENJADI TRAUMA DAN KETAKUTAN UNTUK SEMUA ORANG</h3>
    <h3 class="card-text">BRBAGAI NEGARA BERUSAHA MELAKUKAN PENELITIAN UNTUK VAKSIN DARI VIRUS INI</h3>
    
    <p class="card-text"><small class="text-muted">Harapan Dunia</small></p>
 
</div>
                </div>
                </div>
                
                </div>
                
</body>




        )
    }
}

export default Dampak;
