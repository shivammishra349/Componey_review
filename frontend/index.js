
    const allStar=document.querySelectorAll('.rating .star')
    const starValue=document.querySelector('.rating input')
    arr=[]

    allStar.forEach((item,index)=>{
        item.addEventListener('click',function(){
            starValue.value=index+1;
            arr.push(starValue.value)
            console.log(starValue.value)
            console.log(arr)
            allStar.forEach(i=>{
                i.classList.replace('bxs-star','bx-star')
            })
            for(let i=0; i<allStar.length; i++){
                if(i <=  index){
                    allStar[i].classList.replace('bx-star','bxs-star')
                }
            }
        })
    })
    

    async function add(event){  
        event.preventDefault();
        
        let name=event.target.name.value
        let pros=event.target.pros.value;
        let cos=event.target.cos.value;
        let rate=starValue.value;
        // console.log(starValue)
        

        let obj={
            name,
            pros,
            cos,
            rate
        }
        try{
            let res= await axios.post('http://localhost:1999/add-review',obj)
            
        }
        catch(err){
            console.log(err)
        }

        event.target.name.value='';
        event.target.pros.value='';
        event.target.cos.value='';
        
    }

    document.getElementById('searchButton').addEventListener('click', searchData);
        
    async function searchData() {
        const name = document.getElementById('search').value;
    
     
        try {
            let res = await axios.get(`http://localhost:1999/search?name=${name}`);
            showData(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    
    




    function showData(obj){
        // console.log(obj)

            let parentNode=document.getElementById('list')

            let h3=document.createElement('h3');
            h3.style.color='red';
            h3.style.marginTop='30px'
            h3.style.marginLeft='110px'

            h3.textContent='Company Review';
            parentNode.appendChild(h3)

            let h1 = document.createElement('h1');
                h1.style.color = 'blue';
                h1.textContent = 'Company name: ' + obj.data[0].name;
                parentNode.appendChild(h1);
        
                let h2 = document.createElement('h2');
                h2.style.color = 'yellow';
                h2.textContent = 'Company Rating: ' + obj.averageRating;
                h2.style.marginLeft='20px'
                parentNode.appendChild(h2);

            for (let i = 0; i < obj.data.length; i++) {
        
                let p1 = document.createElement('p');   
                p1.style.color = 'white';
                p1.style.fontWeight='bold'
                p1.textContent = 'Pros: '
                parentNode.appendChild(p1);


                let pros = document.createElement('p');
                pros.style.color = 'white';
                pros.textContent = obj.data[i].pros;
                parentNode.appendChild(pros);

        
                let p2 = document.createElement('p');
                p2.style.color = 'white';
                p2.style.fontWeight='bold'
                p2.textContent = 'Cos: '
                parentNode.appendChild(p2);

                let cos=document.createElement('p');
                cos.style.color='white';
                cos.textContent=obj.data[i].cos;
                parentNode.appendChild(cos)

                
                let ratingStars = document.createElement('div');
                ratingStars.style.color = 'white';
                for (let j = 0; j < obj.data[i].rate; j++) {
                    let starIcon = document.createElement('i');
                    starIcon.classList.add('bx', 'bxs-star');
                    ratingStars.appendChild(starIcon);
        }
                parentNode.appendChild(ratingStars)


                let entryLine = document.createElement('hr');
                entryLine.style.border = '0';
                entryLine.style.borderTop = '2px solid white';
                parentNode.appendChild(entryLine);
            }
        
        }

        
    




