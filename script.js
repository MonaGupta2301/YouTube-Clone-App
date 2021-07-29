var val=document.getElementById('data')
// val.defaultValue="mona"

const input = document.getElementById('data')
input.addEventListener('keydown',(e)=>{
    if(e.key=='Backspace')
    {
        window.location.reload(true)
    }
})
val.addEventListener('keyup',(e)=>{
    e.preventDefault()
    var val = e.target.value    
})
const btton=document.getElementById('btn')
    btton.addEventListener('click', (e)=>{
        e.preventDefault()
        var xhr = new XMLHttpRequest()
        // console.log(xhr.readyState)
        var val=document.getElementById('data')
        const url="https://api.themoviedb.org/3/search/movie?api_key=abdca3eea1b7fb0c1f10423e2fc33135&query="+val.value
        xhr.open('GET',url) 
        xhr.onreadystatechange=()=>
        {
            console.log(xhr.readyState)
           if(xhr.readyState==4 && xhr.status==200)
           {    
              var data=JSON.parse(xhr.responseText)
              id2=data.results[0].id
              console.log(data)//.results[0].id)
              const para=document.createElement('p')
              para.className='lead'
              para.id='p2'
              para.textContent=JSON.parse(xhr.responseText).results[0].overview

              const para1=document.createElement('p')
              para1.className='lead'
              para1.id='p3'
              para1.textContent=JSON.parse(xhr.responseText).results[0].title

              const para2=document.createElement('p')
              para2.className='lead'
              para2.id='p4'
              para2.textContent=JSON.parse(xhr.responseText).results[0].release_date

              const box3=document.getElementById('box2')
              box3.style.backgroundColor='rgba(255,255,255,0.4)'
              box3.style.borderRadius='20px'
              box3.appendChild(para)
              box3.appendChild(para1)

              movieifo(id2)
           }
        }
        xhr.send()
       

    })
// val.onkeydown=(e)=>{
//    const b=document.getElementById('box')
//    b.removeChild()
// }

function movieifo(i)
{
    const xhr1=new XMLHttpRequest()
    var url2="https://api.themoviedb.org/3/movie/"+ i +" /videos?api_key=abdca3eea1b7fb0c1f10423e2fc33135"
  
    xhr1.open('GET',url2)

    xhr1.onreadystatechange= () =>{
        console.log(xhr1.readyState)
      if(xhr1.readyState==4 && xhr1.status==200)
      {
          var data2=xhr1.responseText
          console.log(JSON.parse(data2))
          if(JSON.parse(data2).results.length==0)
          {
             alert('Vedio not found')
          }
          else{
              
          var make=JSON.parse(data2).results[0].key

          const vedio=document.createElement('iframe')
          console.log(make)
          vedio.src= "https://www.youtube.com/embed/" + make + "?autoplay=1&controls=0"
          
          vedio.id="vd1"
          vedio.height=600
          vedio.width=1100
          vedio.controls="autoplay" 
          vedio.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          
          const name=document.createElement('p')
          name.className='lead'
          name.id='p1'
          name.textContent=JSON.parse(data2).results[0].name

          const box1 =document.getElementById('box')
          console.log(box1)
          box1.appendChild(vedio)
         
          console.log(vedio)

          const box3=document.getElementById('box2')
          box3.appendChild(name)
          }
      }
    }
   xhr1.send()
}

const btnn = document.getElementById('back')
btnn.addEventListener('click',(e)=>{
    location.href="index.html"
})