
fetch('https://digimon-api.vercel.app/api/digimon')
  .then(response => response.json())
  .then(data => {

    const digimonList = document.getElementById('digimon-list');

  
    const ul = document.createElement('ul');


    data.forEach(digimon => {
      const li = document.createElement('li');
      const text = document.createTextNode(digimon.name);
      li.appendChild(text);
      
     
      li.addEventListener('click', () => {
      
        fetch(`https://digimon-api.vercel.app/api/digimon/name/${digimon.name}`)
          .then(response => response.json())
          .then(digimonData => {
            
            const digimonImage = document.getElementById('digimon-image');
            const digimonLevel = document.getElementById('digimon-level');
            
            
            digimonImage.src = digimonData[0].img;
            digimonLevel.textContent = `Level: ${digimonData[0].level}`;
          })
          .catch(error => console.log(error));
      });
      
      ul.appendChild(li);
    });

   
    digimonList.appendChild(ul);
  })
  .catch(error => console.log(error));
