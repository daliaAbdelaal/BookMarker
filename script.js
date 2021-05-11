var siteName=document.getElementById("name");
var siteUrl=document.getElementById("url");
var button=document.getElementById("btn");
var content= document.getElementById('content');
// var requiredName=document.getElementById("requiredName")
// var requiredUrl=document.getElementById("requiredUrl")
var sitesContainer=[];

if(localStorage.getItem("Bookmarker")==null)
{
        sitesContainer=[];   
}else
{
        sitesContainer= JSON.parse(localStorage.getItem("Bookmarker")) ;
        displaySite()
}
button.onclick=function()
{
        if( checkName()==true&&checkUrl()==true)
        {
                // button.removeAttribute("disabled");
                addInput() 
                siteName.classList.remove("is-valid");
                siteUrl.classList.remove("is-valid");
        }
        else
        {
                button.disabled="true";
                // requiredName.innerHTML=
                // `<div  class=" alert-error">Name is required</div>`
                // requiredUrl.innerHTML=
                // `<div class=" alert-error">Url field is required</div>`
        }
        displaySite()
        clearInput()
}
function addInput()
{
        var site=
        {
              name:siteName.value,
              url:siteUrl.value
        }
        sitesContainer.push(site);
        localStorage.setItem("Bookmarker", JSON.stringify(sitesContainer));

}
function displaySite()
{       cartonna="";
        for(var i=0;i<sitesContainer.length;i++)
        {   
               
                cartonna+=
                        `<div>
                                <h2 class="d-inline mx-5">${sitesContainer[i].name}</h2>
                        
                                <button class="btn btn-info my-5 mx-3">
                                        <a href="${sitesContainer[i].url}" target="_blank">Visite</a>
                                </button>

                                <button class="btn btn-danger my-5" onclick="deleteBook(${i});">Delete
                                </button>
                        </div>`; 
        }

        content.innerHTML= cartonna;

}
      
function clearInput()
{
        siteName.value="";
        siteUrl.value="";
}
function deleteBook(index)
{
        sitesContainer.splice(index,1);
        localStorage.setItem("Bookmarker", JSON.stringify(sitesContainer));
        displaySite();
}
function checkInputs()
{
        if(siteName.value!=""&& siteUrl.value!="")
        {
                return true
        }else{
                return false
        }
}

// valdition
var nameAlert=document.getElementById("nameAlert")
function checkName() {
        var nameRejex=/^[a-zA-Z0-9]{2,15}$/;
        var res = nameRejex.test(siteName.value);
        return res;
    }
siteName.onkeyup=function(){
        if(checkName()==true&&siteName.value!="")
        {
                siteName.classList.add("is-valid");
                siteName.classList.remove("is-invalid");
                nameAlert.classList.add("d-none")
                button.removeAttribute("disabled");


        }else
        {
                
                siteName.classList.add("is-invalid");
                siteName.classList.remove("is-valid");
                nameAlert.classList.remove("d-none")
                button.disabled="true";  
        }
}

var urlAlert=document.getElementById("urlAlert")
function checkUrl() {
        var urlRejex=/^(http|https)?(:\/\/)?(www.)?[a-zA-Z0-9]{1,10}.com$/;
        var res = urlRejex.test(siteUrl.value);
        return res;
    }
siteUrl.onkeyup=function(){
        if(checkUrl()==true&&siteUrl.value!="")
        {  
                siteUrl.classList.add("is-valid");
                siteUrl.classList.remove("is-invalid");
                urlAlert.classList.add("d-none")
                button.removeAttribute("disabled");
        }else
        {
                siteUrl.classList.add("is-invalid");
                urlAlert.classList.remove("d-none")
                button.disabled="true";
        }
}




