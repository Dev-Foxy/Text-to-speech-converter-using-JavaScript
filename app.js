const synth = window.speechSynthesis
const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    const text = form.text.value

    speak(text)
})

function speak(text){
    const utterance = new window.SpeechSynthesisUtterance(text)
    const speed = form.speed.value
    const pitch = form.pitch.value

    utterance.rate = speed
    utterance.pitch = pitch

    synth.speak(utterance)
}