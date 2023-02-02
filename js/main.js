    // document.getElementById('btn').addEventListener('click', () => {
    //     console.log(document.getElementById('salam1').value);
    // }) 



    function axtarmaqq(url) {
        document.getElementById('university').innerHTML = ``
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            for (let uni of data) {
                console.log(uni);
            document.getElementById('university').innerHTML += `
            <div class="cards">
            <div class="card card-3">
              <div class="card__icon"><i class="fas fa-bolt"></i></div>
              <p class="card__exit"><i class="fas fa-times"></i></p>
              <h2 class="card__title">${uni.name}</h2>
              <p class="card__apply">
                <a id="linke-get" class="card__link" href="${uni.web_pages}"  target="_blank" >Link<i class="fas fa-arrow-right"></i></a>
              </p>
            </div>
          </div>
            `
            }
            
    
        })
    }
    
    
    
    
    document.getElementById('btn').addEventListener("click", () => {
        let data = axtarmaqq(`http://universities.hipolabs.com/search?country=${document.getElementById('salam1').value}`)
    })

