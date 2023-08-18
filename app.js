 
const btn1 = document.getElementById('icon');
const btn2 = document.getElementById('icon2');
const out_put = document.getElementById('output');
var input_ele = document.getElementById('input');
const input_ele_2 = document.getElementById('input2');
// var input_ele_2 = document.getElementById('input2');


async function getMessage(){
    const put = document.getElementById('put');
    put.innerHTML = input_ele.value;
    //     // const input_ele = document.getElementById('input').value="";
    document.querySelector('.right').style.display='none';
    document.querySelector('.right2').style.display='block';
    console.log('clicked');
        // dislay.style=none;
    // alert(input_ele_2);

    const options = {
        method:'POST',
        headers:{
            'Authorization':`Bearer ${API_KEY}`,
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            model:"gpt-3.5-turbo",
            messages:[{role:"user",content:input_ele.value}],
            max_tokens:100
        })
    }


try{
    const response = await fetch('https://api.openai.com/v1/chat/completions',options)

    const data = await response.json()
    console.log(data);

    out_put.textContent = data.choices[0].message.content  
    // outputElement.textContent = data.choices[0].message.content
}catch(err){
console.log(err);
}

// // const input_ele = document.getElementById('input').value="";
}
btn1.addEventListener('click',getMessage)


// FOR BTN 2
async function getMessagee(){
    const put = document.getElementById('put');
    put.innerHTML = input_ele_2.value;
  
    // document.querySelector('.right').style.display='none';
    // document.querySelector('.right2').style.display='block';
    console.log('clicked');
    // dislay.style=none;

    const options = {
        method:'POST',
        headers:{
            'Authorization':`Bearer ${API_KEY}`,
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            model:"gpt-3.5-turbo",
            messages:[{role:"user",content:input_ele_2.value}],
            max_tokens:100
        })
    }


try{
    const response = await fetch('https://api.openai.com/v1/chat/completions',options)

    const data = await response.json()
    console.log(data);

    out_put.textContent = data.choices[0].message.content  
    // outputElement.textContent = data.choices[0].message.content
}catch(err){
console.log(err);
}

// const input_ele = document.getElementById('input').value="";
}
btn2.addEventListener('click',getMessagee)


