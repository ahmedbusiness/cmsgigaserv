
<script>

 export let edit = true;
 export let landing= {};
import { Fdb, Fstorage,fbx } from "../../firebase.js"
import { onMount } from 'svelte';
import {notifChannel, storage, db} from '../../store.js'
export let test;
onMount( async () => {
Fdb.collection("landing").doc("uOD2YitEzj5P4i2uV0wG").onSnapshot(function(doc) {
    landing = doc.data();
  
});
});


export let editable=false;
</script>

<style>
   
.roww{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 10px;
}
.Table {
    box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    margin:0 10px 10px 10px;
  
  }
  .tableContainerPromo{
  width:40%;
}
.elements{
width:100%;

}
  .el {
    text-align: center;
    padding-bottom: 5px;
    margin:10px 0 5px 0;
  }
   .seperator{
    margin-left: 50%;
    transform: translateX(-50%);
    border-bottom: 1px solid rgba(128, 128, 128, 0.623);
    width: 90%;
   
  }
   .headerParis{
    color: #fff;
    line-height: 1.4;
    text-align: center;
    font-weight: 800;
    padding: 10px;
    border-radius: 10px 10px 0 0;
    font-size: 18px;
  }
  .headerParisPromo{
    background-color: #202020;
  }
  .subHeaderParis {
    color: #fff;
    line-height: 1.4;
    text-align: center;
    font-weight: 800;
    padding: 10px;
    font-size: 18px;
  }
  .subHeaderParisPromo {
    background-color: #CB1517;
  }
  .edit{
    background-color: #41b883;
    width:100px;
    height:50px;
    font-size: 20px;
    text-align: center;
    color:white;
    cursor: pointer;
    border-radius: 5px;
    margin:15px 10px 30px 0px;
    display:flex;
    flex-direction: column;
    justify-content: center;
  }
  .save{
    background-color:#e24343;
    width:100px;
    height:50px;
    font-size: 20px;
    text-align: center;
    color:white;
    cursor: pointer;
    border-radius: 5px;
    margin:15px 0px 30px 10px;
    display:none;
    flex-direction: column;
    justify-content: center;
  }
  
  .save:active{
    background-color:black;
  }
  .edit:active{
    background-color:black;
  }
  .editSave{
display:flex;
flex-direction: row;
justify-content: center;
  }
</style>
<h2 class="text-center mt-0">Promocote</h2>
 
<div class="editSave">
<div class="edit" on:click={()=>{
  let x=document.getElementById("saveBtnPromo");
  if(editable){
    x.style.display='none';
editable=false;
  }else if(!editable){
    x.style.display='flex';
  editable=true;
  }


}}>Modifier</div>

<div class="save" id="saveBtnPromo" on:click={()=>{

  Fdb.collection("landing").doc("uOD2YitEzj5P4i2uV0wG").update(landing) ;

let x=document.getElementById("saveBtnPromo");
x.style.display='none';
editable=false;
notifChannel.set({msg: "les données ont été mises à jour avec succès", type: "success"});
 
}}>Enregister</div>
</div>

  <div class="roww">
        
            <!----------Details--------> 
<div class="tableContainerPromo">          
    <div class="Table">
                    <!--header-->
        <div class="headerParisPromo headerParis">Promocote</div>
        {#if Object.keys(landing).length != 0}
        <div class="subHeaderParisPromo subHeaderParis">{landing.ParisSportig.Promocote.Headers[0]}</div>
                    <!--table elements-->
      <div class="elements">

{#each Object.values(landing.ParisSportig.Promocote.Titles) as item,i }
{#if editable}
  <div class="el"><span  bind:innerHTML={landing.ParisSportig.Promocote.Titles[i]} contenteditable="true">{item}</span> :<span  bind:innerHTML={landing.ParisSportig.Promocote.Details.Price[i]} contenteditable="true">{landing.ParisSportig.Promocote.Details.Price[i]}</span></div>
{:else}
  <div class="el"><span  bind:innerHTML={landing.ParisSportig.Promocote.Titles[i]} contenteditable="false">{item}</span> :<span  bind:innerHTML={landing.ParisSportig.Promocote.Details.Price[i]} contenteditable="false">{landing.ParisSportig.Promocote.Details.Price[i]}</span></div>
{/if}

<div class="seperator"></div>
   
        {/each}

      </div>  
  {/if}
    </div>
  </div>

          <!----------Gros-------->
  <div class="tableContainerPromo">    
    <div class="Table">
                    <!--header-->
        <div  class="headerParisPromo headerParis">Promocote</div>
        {#if Object.keys(landing).length != 0}
         <div  class="subHeaderParisPromo subHeaderParis">{landing.ParisSportig.Promocote.Headers[1]}</div>
                    <!--table elements-->
      <div class="elements">
    {#each Object.values(landing.ParisSportig.Promocote.Titles) as item ,i }
 {#if editable}
<div class="el"><span  bind:innerHTML={landing.ParisSportig.Promocote.Titles[i]} contenteditable="true"> {item}</span> : <span bind:innerHTML={landing.ParisSportig.Promocote.Gros.Price[i]}  contenteditable="true">{landing.ParisSportig.Promocote.Gros.Price[i]}</span></div>
{:else}
<div class="el"><span  bind:innerHTML={landing.ParisSportig.Promocote.Titles[i]} contenteditable="false"> {item}</span> : <span bind:innerHTML={landing.ParisSportig.Promocote.Gros.Price[i]}  contenteditable="false">{landing.ParisSportig.Promocote.Gros.Price[i]}</span></div>
{/if}
<div class="seperator"></div>
   
        {/each}
      </div>
      {/if}
    </div>
</div>   

         
</div>
           
