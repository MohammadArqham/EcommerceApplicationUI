

// const adddEliment=()=>{
//     const a = document.querySelector('.container')

//     let code = "<div class='card' ><div class='img'><img src='./images/1_MCn1VrXQznTi3JMtAIGK0g.jpeg' alt=''></div><div class='detail'><h2>cource name</h2><h3>Cource by <span>instructor</span></h3><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, aut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, impedit dolore unde asperiores tempora beatae atque </p><a href=''>view</a></div></div>"
//     let newnode = document.createElement('div')
//     newnode.innerHTML=code
//     a.appendChild(newnode)
//     return "hello"
// }

// console.log(adddEliment)


// let c = document.querySelector('.btn')
// c.addEventListener('click',adddEliment)






// let arr = [1,2,3,4,5,6,7,8,9]
// console.log(arr)

// // arr = arr.filter( ele => !(ele%2))
// // console.log(arr)

// // arr.forEach(i=>console.log(i))
// let a=10
// let b="random-string"
// console.log(`some ${b} random text ${a}`)


const object = fetch('script/data.json')

object.then(responce =>{
    const newd = responce.json()
    newd.then(res=>{
        console.log(res)
    })
    
})







