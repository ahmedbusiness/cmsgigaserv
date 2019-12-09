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


  .tableTextPhotocopie {
    color: #fff;
    line-height: 1.4;
    text-align: center;
    width: 100%;
    font-weight: 800;
    padding: 10px;
    border-radius: 10px 10px 0 0;
    background-color: rgba(244, 98, 58, 0.73);
    font-size: 18px;
  }
  .h4 {
    font-size: 25px;
    text-align: center;
  }
.els {
    text-align: center;
    display: flex;
    justify-content: space-around;
  margin-top:5px;
    margin-bottom:5px;
  }
  .table1{
    min-height:161px;
  }
  .AllTabless{
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
  }
.tableContainers{
    width:33%;
  }
  .Right {
    width: 50%;
    border-right: 1px solid rgba(128, 128, 128, 0.27);
  }
  .Left {
    width: 50%;
  }
 
.Table {
    box-shadow: 0 0px 40px 0px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    margin:0 10px 10px 10px;
  
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

{#if Object.keys(landing).length != 0}

<h2 class="text-center mt-0">Bureautique</h2>
  
<div class="editSave">
<div class="edit" on:click={()=>{
  let x=document.getElementById("saveBtnBureau");
  if(editable){
    x.style.display='none';
editable=false;
  }else if(!editable){
    x.style.display='flex';
  editable=true;
  }


}}>Modifier</div>

<div class="save" id="saveBtnBureau" on:click={()=>{
Fdb.collection("landing").doc("uOD2YitEzj5P4i2uV0wG").update(landing);

let x=document.getElementById("saveBtnBureau");
x.style.display='none';
editable=false;

notifChannel.set({msg: "les données ont été mises à jour avec succès", type: "success"});
 
}}>Enregister</div></div>
  <div class="AllTabless"> 
      <div class="tableContainers">
       <h3 class="h4">Tarif photocopie</h3>
        <div class="Table table1">
 
              <div class="tableTextPhotocopie">Noir et Blanc - Texte</div>
              {#each Object.values(landing.Photocopie.noir.type) as item,i }
              {#if editable}
              <div class="els">
                <span  bind:innerHTML={landing.Photocopie.noir.type[i]} contenteditable="true" class="Right">{item}</span>
                <span bind:innerHTML={landing.Photocopie.noir.price[i]} contenteditable="true" class="Left">{landing.Photocopie.noir.price[i]}</span>
              </div>
              {:else}
               <div class="els">
                <span  bind:innerHTML={landing.Photocopie.noir.type[i]} contenteditable="false" class="Right">{item}</span>
                <span bind:innerHTML={landing.Photocopie.noir.price[i]} contenteditable="false" class="Left">{landing.Photocopie.noir.price[i]}</span>
              </div>
              {/if}
              {/each}
            

        </div>
      
          <div class="Table table1">

              <div class="tableTextPhotocopie">Couleur</div>
               {#each Object.values(landing.Photocopie.color.type) as item,i }
                {#if editable}
                <div class="els">
                <span bind:innerHTML={landing.Photocopie.color.type[i]} contenteditable="true" class="Right">{item}</span>
                <span bind:innerHTML={landing.Photocopie.color.price[i]} contenteditable="true" class="Left">{landing.Photocopie.color.price[i]}</span>
              </div>
              {:else}
                <div class="els">
                <span bind:innerHTML={landing.Photocopie.color.type[i]} contenteditable="false" class="Right">{item}</span>
                <span bind:innerHTML={landing.Photocopie.color.price[i]} contenteditable="false" class="Left">{landing.Photocopie.color.price[i]}</span>
              </div>
                {/if}
              
              {/each}
              
          </div>
     </div>

<div class="tableContainers">
              <h3 class="h4">Tarif tirage A4</h3>
        <div class="Table table1">

            <div class="tableTextPhotocopie">Image</div>
            {#each Object.values(landing.tirageA4.noir.type) as item,i }
               {#if editable}
              <div class="els">
                <span bind:innerHTML={landing.tirageA4.noir.type[i]} contenteditable="true" class="Right">{item}</span>
                <span bind:innerHTML={landing.tirageA4.noir.price[i]} contenteditable="true" class="Left">{landing.tirageA4.noir.price[i]}</span>
              </div>
                {:else}
              <div class="els">
                <span bind:innerHTML={landing.tirageA4.noir.type[i]} contenteditable="false" class="Right">{item}</span>
                <span bind:innerHTML={landing.tirageA4.noir.price[i]} contenteditable="false" class="Left">{landing.tirageA4.noir.price[i]}</span>
              </div>
                {/if}
              
              {/each}
            

          </div>

          <div class="Table table1">
         
            <div class="tableTextPhotocopie">Texte</div>
            {#each Object.values(landing.tirageA4.color.type) as item,i }
             {#if editable}
              <div class="els">
                <span bind:innerHTML={landing.tirageA4.color.type[i]} contenteditable="true" class="Right">{item}</span>
                <span bind:innerHTML={landing.tirageA4.color.price[i]} contenteditable="true" class="Left">{landing.tirageA4.color.price[i]}</span>
              </div>
              {:else}
              <div class="els">
                <span bind:innerHTML={landing.tirageA4.color.type[i]} contenteditable="false" class="Right">{item}</span>
                <span bind:innerHTML={landing.tirageA4.color.price[i]} contenteditable="false" class="Left">{landing.tirageA4.color.price[i]}</span>
              </div>
              {/if}
              
              {/each}
            

          </div>
</div>
      <div class="tableContainers">
       <h3 class="h4">Tarif Tirage A3</h3>
          <div class="Table table1">

            <div class="tableTextPhotocopie">Image</div>
             {#each Object.values(landing.tirageA3.image.type) as item,i }
              {#if editable}
              <div class="els">
                <span bind:innerHTML={landing.tirageA3.image.type[i]} contenteditable="true" class="Right">{item}</span>
                <span bind:innerHTML={landing.tirageA3.image.price[i]} contenteditable="true" class="Left">{landing.tirageA3.image.price[i]}</span>
              </div>
              {:else}
              <div class="els">
                <span bind:innerHTML={landing.tirageA3.image.type[i]} contenteditable="false" class="Right">{item}</span>
                <span bind:innerHTML={landing.tirageA3.image.price[i]} contenteditable="false" class="Left">{landing.tirageA3.image.price[i]}</span>
              </div>
              {/if}
             
              {/each}
        
          </div>

          <div class="Table table1">

            <div class="tableTextPhotocopie">Texte</div>
            {#each Object.values(landing.tirageA3.texte.type) as item,i }
             {#if editable}
              <div class="els">
                <span bind:innerHTML={landing.tirageA3.texte.type[i]} contenteditable="true" class="Right">{item}</span>
                <span bind:innerHTML={landing.tirageA3.texte.price[i]} contenteditable="true" class="Left">{landing.tirageA3.texte.price[i]}</span>
              </div>
            {:else}
              <div class="els">
                <span bind:innerHTML={landing.tirageA3.texte.type[i]} contenteditable="false" class="Right">{item}</span>
                <span bind:innerHTML={landing.tirageA3.texte.price[i]} contenteditable="false" class="Left">{landing.tirageA3.texte.price[i]}</span>
              </div>
            {/if}
              
              {/each}
          
          </div>
      </div>

        </div>

{/if}