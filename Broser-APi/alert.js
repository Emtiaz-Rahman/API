
// alert('ma is coming')
const maComing = () => {
    alert('Ma is coming.Opnen the book')
}

const askPicnic = () => {
    const response = confirm('Are you going to picnic?')
    console.log(response);
    if (response === true) {
        alert('please pay the fee')
    }
    else {
        console.log('Thanks for your answer')
    }
}
const askName = () => {
    const name = prompt('What is your Name?')
    if (name) {
        console.log(name)
    }
}