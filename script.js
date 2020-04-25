function showImage() {
    var modal = document.getElementById("myModal");




    var captionText = document.getElementById("caption");
    var captionText2 = document.getElementById("caption2");
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;

        captionText.innerHTML = this.alt;
    }

    var span = document.getElementsByClassName("close")[0];


    span.onclick = function() {
        modal.style.display = "none";
    }
}



function submitForm() {
    console.log('clicked');
    var fullname = document.querySelector('#fullname').value;
    var checkboxGroup = document.querySelectorAll('input[name="checkboxGroup"]');
    var radioGroup = document.querySelectorAll('input[name="radioGroup"]');

    var container = document.querySelector('.container');
    container.style.display='none';

    var container2 = document.querySelector('.container2');
    container2.style.display='inline-block';

    document.querySelector('#lblName').textContent=fullname;
    var checkbox_arr = [] ;
    var index = 0;
    var percintage = 0;
    for(var i=0;i<4;i++){
        if(checkboxGroup[i].checked == true){
            var node = document.createElement("LI");
            var textnode = document.createTextNode(checkboxGroup[i].value);
            node.style.fontSize  = "17px"
            node.style.fontWeight   = "normal"
            node.style.fontStyle    = "italic"
            node.style.marginLeft    = "158px"
            node.appendChild(textnode);
            document.getElementById("ulInterest").appendChild(node);

            checkbox_arr[index] = checkboxGroup[i].value;
            index = index + 1;
            percintage = percintage + 25 ;
        }
    }

    document.querySelector('#lblinterestMatch').textContent=percintage+"% ,We also";



    if(radioGroup[0].checked){
        var cv = document.querySelector('#CV1');
        cv.style.display='block';

        var CVShahad = document.querySelector('#CV2');
        CVShahad.style.display='none';

        var vedioDev = document.querySelector('#vedioDev');
        vedioDev.style.display='none';

    }else if(radioGroup[1].checked){
        var cv = document.querySelector('#CV1');
        cv.style.display='none';

        var CVShahad = document.querySelector('#CV2');
        CVShahad.style.display='block';

        var vedioDev = document.querySelector('#vedioDev');
        vedioDev.style.display='none';

    }else{

        var cv = document.querySelector('#CV1');
        cv.style.display='none';

        var CVShahad = document.querySelector('#CV2');
        CVShahad.style.display='none';

        var vedioDev = document.querySelector('#vedioDev');
        vedioDev.style.display='block';

    }



   document.title="Result Page";


}
const button = document.getElementById("button");
button.addEventListener("mouseover", submitForm);



