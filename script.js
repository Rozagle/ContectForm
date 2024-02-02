const form = document.querySelector("form"),
statusText = form.querySelector(".button-area span");

form.onsubmit = (e) => {
e.preventDefault(); //preventing form from submiting
statusText.style.display= "inline-block";
statusText.style.color = "#0D6EFD";

let xml = new XMLHttpRequest();
xml.open("post" , "message.php", true);
xml.onload = () =>{

    if(xml.readyState == 4 && xml.status == 200 ){ //when ajax response status is 200 and 4 is meaans no any errors

        let response = xml.response;
        if(response.indexOf("Please make sure fill all fields") || response.indexOf("Enter a valid email address!" || response.indexOf("Sorry, we can't send your message!")) ){
            statusText.style.color = "red";
            console.log("not finddddd");
        }else{
            form.reset();
            setTimeout(() => {
                statusText.style.display= "none";
            }, 3000);

        }
        document.getElementById('sending-message').innerText = response;
        
    }
}
let formData = new FormData(form); // create formdata obj , this obj send from data
xml.send(formData); // sending form data 

}