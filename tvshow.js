var val=document.getElementById('input')
// val.defaultValue="mona"

const inputval = document.getElementById('input')
inputval.addEventListener('keydown',(e)=>{
    if(e.key=='Backspace')
    {
        window.location.reload(true)
    }
})

inputval.addEventListener('keyup',(e)=>{
    e.preventDefault()
    var val = e.target.value    
})

const btn=document.getElementById('btn')
    btn.addEventListener('click', (e)=>{
        e.preventDefault()
        var xhr = new XMLHttpRequest()
        // console.log(xhr.readyState)
        var val=document.getElementById('input')
        console.log(val.value)
        const url="https://api.themoviedb.org/3/search/tv?api_key=1f76b7b57ee681a9c514a2b5877b8efe&query="+val.value
        xhr.open('GET',url) 
        console.log(xhr.readyState)
        
        xhr.onreadystatechange = () =>
        {
           console.log(xhr.readyState)
           if(xhr.readyState==4 && xhr.status==200)
           {    
              var data=JSON.parse(xhr.responseText)
              console.log(data)
                 var id2=data.results[0].id
                 console.log(id2)
                 var ovrview=data.results[0].overview
                 var title= data.results[0].original_name
                 var date_released=data.results[0].first_air_date

                const para=document.createElement('p')
                // para.className='lead'
                para.id='p2'
                para.textContent=JSON.parse(xhr.responseText).results[0].overview

                const para1=document.createElement('p')
                // para1.className='lead'
                para1.id='p3'
                para1.textContent=JSON.parse(xhr.responseText).results[0].title

                const para2=document.createElement('p')
                // para2.className='lead'
                para2.id='p4'
                para2.textContent=JSON.parse(xhr.responseText).results[0].release_date

                const box3=document.getElementById('box2')
                box3.appendChild(para)
                box3.appendChild(para1)
                box3.style.backgroundColor='rgba(255,255,255,0.4)'
                box3.style.borderRadius='20px'
                TvShow(id2)
                console.log('function called')
           }
           
        }
        xhr.send()
})

function TvShow(id) {
    let xhr = new XMLHttpRequest()
    console.log(id)
    let url = "https://api.themoviedb.org/3/tv/"+id +"/videos?api_key=1f76b7b57ee681a9c514a2b5877b8efe&language=en-US"
    xhr.open('GET', url)
    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            var info = JSON.parse(xhr.responseText)
            console.log(info)
          
            if(info.results.length==0)
          {
             alert('Vedio not found')
          }
          else{
              
          const vedio=document.createElement('iframe')
        
          vedio.src=" https://www.youtube.com/embed/"+info.results[0].key+"?autoplay=1&showinfo=0&controls=0"
          vedio.id="vd1"
          vedio.height=600
          vedio.width=1100
          vedio.controls="autoplay" 
          vedio.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          
          const name=document.createElement('p')
          name.className='lead'
          name.id='p1'
          name.textContent=info.results[0].name

          const box1 =document.getElementById('box')
          console.log(box1)
          box1.appendChild(vedio)
         
          console.log(vedio)

          const box3=document.getElementById('box2')
          box3.appendChild(name)
           
        }
    }
  }
  xhr.send()
}
const btnn = document.getElementById('back')
btnn.addEventListener('click',(e)=>{
    location.href="index.html"
})