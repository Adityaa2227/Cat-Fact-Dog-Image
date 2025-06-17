let url="https://catfact.ninja/fact";


let btn=document.querySelector('button');
let para=document.querySelector('#fact');


btn.addEventListener('click',async ()=>{
    let fact=await getfact();
    para.innerText=fact;
})

async function getfact() {
    try {
        let res= await axios.get(url);
        return res.data.fact;
    } catch (error) {
    return "no fact found";
    }
}

let url2="https://dog.ceo/api/breeds/image/random";
let img=document.querySelector("img");
let btn2=document.querySelector('#dog');
btn2.addEventListener('click',async ()=>{
    let imagesrc=await getdog();

    img.setAttribute('src',imagesrc);
})

async function getdog() {
    try{
let image=await axios.get(url2);
return image.data.message;

    }
    catch(err){
        return '/';
    }
}