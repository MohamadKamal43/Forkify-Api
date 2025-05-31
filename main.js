
(async function getApi()
{
    var items =await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
    var  result = await items.json();
    var recipes = result.recipes;
    var myText ="";
    for(var i =0; i < recipes.length;i++)
    {
        var cartona = `
          <div class="col-md-4 text-center mb-5">
                    <img src="${recipes[i].image_url}" class="w-100" style="height:300px">
                    <h4>${recipes[i].title}</h4>
                    <h5>${recipes[i].publisher}</h5>
                    <h5>${recipes[i].social_rank}</h5>
                </div>
        `;
        myText = myText + cartona;
    }
    document.querySelector(".test").innerHTML=myText;
})();