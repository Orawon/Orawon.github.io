$(document).ready(function () {

    $('.post__button--button').click(function () {

        let msg = $('#msg__input').val();
        let msg2 = $('#text_image').val();
        // $(`p:first`).before(`
        // <p style="width: 40%;border:solid;font-size: 30px;">
        //     <p>${msg}</p> 
        //     <span> 
        //         <img style="background-size:cover;margin-bottom:12px; width="350" height="200"" src=${msg2}></img>
        //     </span>
        //     <p>
        //         <h4 id="like--button">Like</h4>
        //      </p>
        // </p>`);

        $(`.content:first`).before(`
        <div  class="content"style="width: 40%;border:rgb(223, 223, 223) 1px solid;font-size: 30px;margin: 12px;">
            <p>${msg}</p> 
                 <img style="background-size:cover;margin:25px; width= "4500"; height= "500"; " src=${msg2}></img>
             <p>
                 <h4 id="like--button">Like</h4>
              </p>
         </div>`);
           
        $('#text_image').val("");
        $('#msg__input').val("");
       
    });
    $(document.body).on('click', '#like--button', function (e) {
        $(this).css('color','blue');
    });
})