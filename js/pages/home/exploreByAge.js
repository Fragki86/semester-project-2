export function exploreByAge() {
  const exploreByAgeContainer = document.querySelector("#exploreByAge");

  exploreByAgeContainer.innerHTML = `<div>
                                      <h2>Explore by age</h2>
                                        <img src="images/title-line.svg" class="title-custom-line">
                                        <div class="age-cubes-grid">
                                          <a href="products.html"><img src="images/cube 0-2.svg" class="age-cubes-individually" alt="Cube drawing"></a>
                                          <a href="products.html"><img src="images/cube 2-4.svg" class="age-cubes-individually" alt="Cube drawing"></a>
                                          <a href="products.html"><img src="images/cube 4-6.svg" class="age-cubes-individually" alt="Cube drawing"></a>
                                          <a href="products.html"><img src="images/cube 6+.svg" class="age-cubes-individually" alt="Cube drawing"></a>
                                      </div>
                                    </div>`
}