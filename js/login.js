// console.log('Button Clicking File Added')


//STEP 1 : set event handler


// document.getElementById('button-login').addEventListener('click',function(event){

//     //STEP 2 : Prevent Default behaviour
//     event.preventDefault(); //Vejal to beginners

//     //STEP 3 : get the phone number
//     const phoneNumber = document.getElementById('phone-number').value;
//     const pinNumber = document.getElementById('pin-number').value;

//     console.log(phoneNumber,pinNumber)


//         //STEP 4: validate phone or pin
//     //This is temporary. you should do not like this
//     if(phoneNumber==='5' && pinNumber='1234'){
//         console.log('You Are Logged In');
//         //STEP 5 : Allow User To Use The Website
//     }
//     else{
//         alert('Wrong Phone Number Or Pin')
//     }
// })

document.getElementById('button-login').addEventListener('click',function(event){
    event.preventDefault();

    //ge phone number and pin
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    // console.log(phoneNumber,pinNumber)
    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('You Are Logged In')
        window.location.href = '/home.html'
    }
    else{
        alert('Wrong Phone Number Or Pin')
    }
    
})