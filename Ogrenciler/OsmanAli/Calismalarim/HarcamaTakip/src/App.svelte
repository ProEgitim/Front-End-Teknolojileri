<script>
  export let name;
  export let lastname;
</script>

<main>
  <h1><p>{name} {lastname} <br></p></h1>
  <p>Border çizgilerini kaldır</p>
  <div id="teneke" class="container">
    <div class="container">
      <div class="row">
        <div class="col-sm">Burada form öğeleri olacak</div>
		<div class="col-md"></div>
      </div>
	  <div class="row">
        <table class="table table-sm">
  <thead>
    <tr class="table-secondary">
      <th scope="col">Kayıt No</th>
      <th scope="col">Tutarı</th>
      <th scope="col">Türü</th>
      <th scope="col">Şekli</th>
	  <th scope="col">Tarih</th>
	  <th scope="col">Açıklama</th>
    </tr>
  </thead>
  <tbody>
    <tr class="table-secondary">
      <th scope="row">1</th>
      <td>5000₺</td>
      <td>Gelir</td>
      <td>Şubat Maaşı</td>
	  <td>02.02.2022</td>
	  <td>Bankadan çekildi.</td>
    </tr>
    <tr class="table-secondary">
      <th scope="row">2</th>
      <td>350₺</td>
      <td>Gider</td>
      <td>Alışveriş</td>
	  <td>03.02.2022</td>
	  <td>Bim market alışveriş.</td>
    </tr>
    <tr class="table-secondary">
      <th scope="row">2</th>
      <td>500₺</td>
      <td>Gelir</td>
      <td>Truva Akü</td>
	  <td>04.02.2022</td>
	  <td>Bilişim hizmeti.</td>
    </tr>
	<tr class="table-secondary">
      <th scope="row">2</th>
      <td>400₺</td>
      <td>Gelir</td>
      <td>Günay Kacar</td>
	  <td>04.02.2022</td>
	  <td>Ödemeler için destek.</td>
    </tr>
	<thead>
    <tr class="table-secondary">
      <th scope="col">Kayıt No</th>
      <th scope="col">Genel Toplam</th>
      <th scope="col">Türü</th>
      <th scope="col">Şekli</th>
	  <th scope="col">Tarih</th>
	  <th scope="col">Açıklama</th>
    </tr>
	</thead>
  </tbody>
</table>
      </div>
    </div>
  </div>
</main>

<style>
  .col-sm {
	  position: flex;
	  border: 1px solid white;
	  margin-top: 5px;
	  border-radius: 5px;
  }
  .col-md {
	  margin-top: 5px;
  }
  main {
    background-color: rgb(3, 38, 54);
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
    color: lightgray;
  }
  #teneke {
    border: 1px solid #ff3e00;
    border-radius: 15px;
    width: auto;
    height: 499px;
  }

  h1 {
    color: #ff3e00;
    /* text-transform: uppercase; */
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>


