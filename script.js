// buton seçici oluştur
//body seçici oluştur
//current color seçici oluştur
// rgb random fonksiyon kodu oluştur
// rgb random kodunu fonk içinde backtik ile yazır ${}
//returnü alttaki fonk döndür
// buton seçiciyi   olay dinleyicisi ve  boş parametre ile fonk açıp => içerisine
//randomclr isimli değişken oluşturup , bunu üstteki fonk. bağla
//body arka plan rengini , randomclr eşitle
// currentcolor yazısı , random clr eşitle.



const mainbutton = document.querySelector("button")
const body = document.body
const currentcolor = document.querySelector(".currentcolor")
const choose = document.querySelector(".choose")
const kopyala = document.querySelector(".copyBtn")

function randomColor() {
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random() * 256)
    const randomclr = `rgb(${red},${green},${blue})`
    return randomclr;
}

mainbutton.addEventListener("click", () =>{
    const randomclr = randomColor();
    body.style.backgroundColor = randomclr;
    currentcolor.textContent = randomclr;
    choose.classList.add("hidden")
})
