
$('#open-Nav i').click(function(){
    $('#head-nave').animate({marginLeft: 235},500);
    $('#side-nav').animate({marginLeft:0},500 ,function(){ 
        $(' #navUp ').animate({paddingTop:0},1200 );});
    $("#open-Nav").animate({opacity: 0},10);
    $('#clos-Nav').animate({opacity: 1},10);
    });


$('#clos-Nav i').click(function(){
    $('#head-nave').animate({marginLeft: 0},500);
    $('#side-nav').animate({marginLeft:-260},500);
    $("#open-Nav").animate({opacity: 1},1);
    $('#clos-Nav').animate({opacity: 0},1);
    $(' #navUp ').animate({paddingTop:320},1000);
});


$("#navUp a[href^='#']").click(function(){

    let linkHref=$(this).attr('href');
    let goSection=$(linkHref).offset.top;
    $('html,body').animate({scrollTop:goSection},9000);
     $(window).scrollTop(0);

    //  console.log(goSection);
    //  console.log(linkHref);

});



//////////////   section Api to featch  ///////

let newsmovie=[];

async function addUrlmoviedb( nuwmovie='search/movie' , category='' )
{
    //     async function getgnewMovidb(categor='')
    // {
        let response=await fetch(`https://api.themoviedb.org/3/${nuwmovie}?query="+${category}h+"&api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
        let resulte= await response.json();
        let apiReselt=resulte.results;
        newsmovie= apiReselt;
        displaymove();
        
        // console.log(newsmovie)
    // }
    // getgnewMovidb();
}

addUrlmoviedb()



async function getgnewMovidb(category='')
{
    // let response=await fetch(`https://api.themoviedb.org/3/movie/now_playing?query="+${category}+"api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
    // let response =await fetch(`https://api.themoviedb.org/3/trending/all/day?query="+${category}h+"&api_key=eba8b9a7199efdcb0ca1f96879b83c44`);
    let response=await fetch(`https://api.themoviedb.org/3/search/movie?query="+${category}h+"&api_key=eba8b9a7199efdcb0ca1f96879b83c44`)
    let resulte= await response.json();
    let apireselt=resulte.results;
    newsmovie= apireselt;
    displaymove()
    // console.log(newsmovie)
}



 function displaymove()
{
    let cartona=``
    for(let i= 0; i < newsmovie.length; i++)
    {
        cartona +=` <div class="col-lg-4 col-md-6 shadow">
        <div class="movies shadow rounded position-relative overflow-hidden">
            <div id="post">
                <img src="https://image.tmdb.org/t/p/w500${newsmovie[i].poster_path}" class="w-100 rounded-3" alt=""> 
                <div class="bg-layer d-flex align-items-center">
                    <div class="text-center px-1 ">
                        <h3 class="my-2">${newsmovie[i].original_title}</h3>
                        <p>${newsmovie[i].overview}.</p>
                        <p>rate: ${newsmovie[i].vote_average}</p>
                        <P>${newsmovie[i].release_date}</P>
                    </div>
                </div>
            </div>
        </div>     
    </div>`
    }

      document.getElementById('rowData').innerHTML= cartona;
}




// cheack Name

function testValidatName()
{
    let regex=/^[a-zA-Z]{5,8} [a-zA-Z]{5,10} [a-zA-Z]{5,10} [a-zA-Z]{5,10}$/;
    $("#EnterValidName").keyup(function()
    {
         attrIdEVent= $(this).next().attr('id');
        var length = $(this).val();
        if(regex.test(length)==true)
        {
            $('#alertName').fadeOut(50); 
            // console.log(attrIdEVent);
        }
        else
        {
            $('#alertName').fadeIn(500);
            // console.log('erro');
        }
    });
};



// cheack Email
function testValidatEmail()
{
    let regex=/^[a-zA-Z]{5,8} {0,1}[a-zA-Z]{5,10} {0,1}@(gmail|yahoo|microsoft)\.com$/
    $("#entreValidEmail").keyup(function()
    {
        // var attrIdEVent= $(this).next().attr('id');
        // console.log(attrIdEVent);
        var length = $(this).val();
        if(regex.test(length)==true)
        {
            $('#alertEmail').fadeOut(50);
        }
        else
        {
            $('#alertEmail').fadeIn(500);
        }
    });
};


// cheack Phone
function testValidPhone()
{
    let regex=/^(002){0,1}01[0125][0-9]{8}$/
    $("#entreValidPhone").keyup(function()
    {
        // var attrIdEVent= $(this).next().attr('id');
        // console.log(attrIdEVent);
        var length = $(this).val();
        if(regex.test(length)==true)
        {
            $('#alertPhone').fadeOut(50);
        }
        else
        {
            $('#alertPhone').fadeIn(500);
        }
    });
};


// cheack Age
function testValidAge()
{
    let regex=/^([5-9]{0,1}[0-9]|100)$/
    $("#entreValidAge").keyup(function()
    {
        // var attrIdEVent= $(this).next().attr('id');
        // console.log(attrIdEVent);
        var length = $(this).val();
        if(regex.test(length)==true)
        {
            $('#alertAge').fadeOut(50);
        }
        else
        {
            $('#alertAge').fadeIn(500);
        }
    });
};


// cheack Password  {0,6} {0,1}[0-9]{0,12}
function testValidPassword()
{
    let regex=/^[a-zA-z]{0,6} {0,1}[0-9]{0,12}$/;
    $("#entreValidPassword").keyup(function()
    {
        // var attrIdEVent= $(this).next().attr('id');
        // console.log(attrIdEVent);
        var length = $(this).val();     
        if(regex.test(length)==true)
        {
            $('#alertPassword').fadeOut(50);
        }
        else
        {
            $('#alertPassword').fadeIn(500);
        }
    });
};

// cheack Repassword
function testValidRepassword()
{
    let regex=/^[a-zA-z]{0,6} {0,1}[0-9]{0,12}$/;

    $("#entreValidRePassword").keyup(function()
    {
        // var attrIdEVent= $(this).next().attr('id');
        // console.log(attrIdEVent);
        var length = $(this).val();
        if(regex.test(length)==true)
        {
            $('#alertRepassword').fadeOut(50);
        }
        else
        {
            $('#alertRepassword').fadeIn(500);
        }
    });
};









