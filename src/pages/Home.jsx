import React from 'react'

const Home = () => {
  return (
    <div>
     <img src="Foodie.jpg" class="img-fluid w-100 pt-1" alt="..." height={200}/>
     <div class="row row-cols-1 row-cols-md-2 g-4 m-2">
  <div class="col">
    <div class="card">
      <img src="chicken Biryani.jpeg" class="card-img-top" alt="..."height={200}/>
      <div class="card-body">
        <h5 class="card-title">chicken Biryani</h5>
        <p class="card-text">A Chicken Thali is a vibrant, wholesome platter that brings together a variety of flavors, textures, and aromas — all centered around a delicious chicken dish.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="Desert.jpeg" class="card-img-top" alt="..."height={200}/>
      <div class="card-body">
        <h5 class="card-title">Deserts</h5>
        <p class="card-tittle">Dessert recipes open the door to a world of creativity and flavor, allowing both beginners and seasoned bakers to craft sweet masterpieces.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="Mutton Biryani.jpeg" class="card-img-top" alt="..."height={200}/>
      <div class="card-body">
        <h5 class="card-title">Mutton Biryani</h5>
        <p class="card-text"> Mutton Biryani is a flavorful and aromatic rice dish that originated in the Indian subcontinent.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="Veg.jpeg" class="card-img-top" alt="..."height={200}/>
      <div class="card-body">
        <h5 class="card-title">Veg</h5>
        <p class="card-text"> Vegetables, commonly referred to as "veg," are edible plant-based foods that form an essential part of a balanced diet.</p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Home