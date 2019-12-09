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
  .page-section {
    padding: 80px 0;
  }

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
.tableContainer{
  width:25%;
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
    border-bottom: 1px solid #80808047;
    width: 90%;
   
  }
  .headerGSM{
    color: #fff;
    line-height: 1.4;
    text-align: center;
    font-weight: 800;
    padding: 10px;
    border-radius: 10px 10px 0 0;
    font-size: 18px;
  }
 
 
  .subHeaderGSM {
    color: #fff;
    line-height: 1.4;
    text-align: center;
    font-weight: 800;
    padding: 10px;
    font-size: 18px;
  }
  .headerGSMooredoo {
    background-color: #b01111;
  }
  .subHeaderGSMooredoo {
    background-color: #e24343;
  }
 
  .headerGSMorange {
    background-color: #cd3700;
  }
  .subHeaderGSMorange {
    background-color: #ff6914;
  }
  .headerGSMtelecom {
    background-color: #0076bf;
  }
  .subHeaderGSMtelecom {
    background-color: #00a8f1;
  }
  .headerGSMlyca {
    background-color: #006f01;
  }
  .subHeaderGSMlyca {
    background-color: #19a133;
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

@media only screen and (max-width: 1000px) {
  .roww {
    flex-direction: column;
  }
  .tableContainer{
    width:100%;
  }

}
</style>
{#if Object.keys(landing).length != 0}
<!-- Prix d'achat recharge GSM Section -->
<div class="editSave">
<div class="edit" on:click={()=>{
  let x=document.getElementById("saveBtnGSM");
  if(editable){
    x.style.display='none';
editable=false;
  }else if(!editable){
    x.style.display='flex';
  editable=true;
  }

}}>Modifier</div>

<div class="save" id="saveBtnGSM" on:click={()=>{
Fdb.collection("landing").doc("uOD2YitEzj5P4i2uV0wG").update(landing);

let x=document.getElementById("saveBtnGSM");
x.style.display='none';
editable=false;

notifChannel.set({msg: "les données ont été mises à jour avec succès", type: "success"});
 
}}>Enregister</div></div>

<section class="page-section" id="portfolio">
  <div class="container">
    <h2 class="text-center mt-0">Recharge GSM</h2>
    <hr class="divider my-4" />
    <!-------------------------------------------------------OOREDOO---------------------------------------------------------->
<div class="roww">
                   <!--Normal-->
  <div class="tableContainer">
    <div class="Table"> 
                    <!--header-->
        <div class="headerGSMooredoo headerGSM">OOREDOO</div>
        <div class="subHeaderGSMooredoo subHeaderGSM">{landing.RechargeGSM.headers[0]}</div>
                    <!--table elements-->
      <div class="elements">
      {#each Object.values(landing.RechargeGSM.OOREDOO.type) as item,i }
       {#if editable}
        <div class="el">
        <span bind:innerHTML={item} contenteditable="true" class="lef">{item}</span> :
        <span bind:innerHTML={landing.RechargeGSM.OOREDOO.normal[i]} contenteditable="true"  class="right">{landing.RechargeGSM.OOREDOO.normal[i]}</span>
        </div>
        {:else}
        <div class="el">
        <span bind:innerHTML={item} contenteditable="false" class="lef">{item}</span> :
        <span bind:innerHTML={landing.RechargeGSM.OOREDOO.normal[i]} contenteditable="false"  class="right">{landing.RechargeGSM.OOREDOO.normal[i]}</span>
        </div>
         {/if}
        <div class="seperator"></div>
        {/each}
        </div>
    </div>
  </div>
                 <!--privilège-->
<div class="tableContainer">
 <div class="Table">
                    <!--header-->
        <div class="headerGSMooredoo headerGSM">OOREDOO</div>
        <div class="subHeaderGSMooredoo subHeaderGSM">{landing.RechargeGSM.headers[1]}</div>
                    <!--table elements-->
      <div class="elements">
       {#each Object.values(landing.RechargeGSM.OOREDOO.type) as item,i }
          {#if editable}
        <div class="el">
        <span bind:innerHTML={item} contenteditable="true" class="lef">{item}</span> :
        <span bind:innerHTML={landing.RechargeGSM.OOREDOO.privilège[i]} contenteditable="true" class="right">{landing.RechargeGSM.OOREDOO.privilège[i]}</span>
        </div>
         {:else}
         <div class="el">
         <span bind:innerHTML={item} contenteditable="false" class="lef">{item}</span> :
        <span bind:innerHTML={landing.RechargeGSM.OOREDOO.privilège[i]} contenteditable="false" class="right">{landing.RechargeGSM.OOREDOO.privilège[i]}</span>
        </div>
        {/if}
        <div class="seperator"></div>
        {/each} 
      </div>
  </div>
</div>
                <!--grossiste1 -->
<div class="tableContainer">
 <div class="Table">
                    <!--header-->
        <div class="headerGSMooredoo headerGSM">OOREDOO</div>
        <div class="subHeaderGSMooredoo subHeaderGSM">{landing.RechargeGSM.headers[3]}</div>
                    <!--table elements-->
      <div class="elements">
         {#each Object.values(landing.RechargeGSM.OOREDOO.type) as item,i }
          {#if editable}
          <div class="el">
        <span bind:innerHTML={item} contenteditable="true" class="lef">{item}</span> :
        <span bind:innerHTML={landing.RechargeGSM.OOREDOO.grossiste1[i]} contenteditable="true" class="right">{landing.RechargeGSM.OOREDOO.grossiste1[i]}</span>
        </div>
        {:else}
        <div class="el">
        <span bind:innerHTML={item} contenteditable="true" class="lef">{item}</span> :
        <span bind:innerHTML={landing.RechargeGSM.OOREDOO.grossiste1[i]} contenteditable="true" class="right">{landing.RechargeGSM.OOREDOO.grossiste1[i]}</span>
        </div>
        {/if}
        <div class="seperator"></div>
        {/each} 
        
      </div>
  </div>
  </div>
<div class="tableContainer">
               <!--grossiste2 -->
 <div class="Table">
                    <!--header-->
        <div class="headerGSMooredoo headerGSM">OOREDOO</div>
        <div class="subHeaderGSMooredoo subHeaderGSM">{landing.RechargeGSM.headers[3]}</div>
                    <!--table elements-->
      <div class="elements">
       {#each Object.values(landing.RechargeGSM.OOREDOO.type) as item,i }
       
          {#if editable}
        <div class="el">
        <span bind:innerHTML={item} contenteditable="true" class="lef">{item}</span> :
        <span bind:innerHTML={landing.RechargeGSM.OOREDOO.grossiste2[i]} contenteditable="true" class="right">{landing.RechargeGSM.OOREDOO.grossiste2[i]}</span>
       </div>
        {:else}
        <div class="el">
        <span bind:innerHTML={item} contenteditable="true" class="lef">{item}</span> :
        <span bind:innerHTML={landing.RechargeGSM.OOREDOO.grossiste2[i]} contenteditable="true" class="right">{landing.RechargeGSM.OOREDOO.grossiste2[i]}</span>
        </div>
         {/if}        
        <div class="seperator"></div>
        {/each} 
        
      </div>
  </div>
</div>
</div>
    <!-------------------------------------------------------ORANGE---------------------------------------------------------->
  
  <div class="roww">
                   <!--Normal-->
 <div class="tableContainer">                  
    <div class="Table">
                    <!--header-->
        <div class="headerGSMorange headerGSM">ORANGE</div>
        <div class="subHeaderGSMorange subHeaderGSM">{landing.RechargeGSM.headers[0]}</div>
                    <!--table elements-->
      <div class="elements">
        {#each Object.values(landing.RechargeGSM.ORANGE.type) as item,i }
        <div class="el">  
        <span class="lef">{item}</span> :
        <span class="right">{landing.RechargeGSM.ORANGE.normal[i]}</span>
        </div>
        <div class="seperator"></div>
        {/each}
      </div>

    </div>
</div>

                 <!--privilège-->
 <div class="tableContainer">             
 <div class="Table">
                    <!--header-->
        <div class="headerGSMorange headerGSM">ORANGE</div>
        <div class="subHeaderGSMorange subHeaderGSM">{landing.RechargeGSM.headers[1]}</div>
                    <!--table elements-->
      <div class="elements">
        {#each Object.values(landing.RechargeGSM.ORANGE.type) as item,i }
        <div class="el">
        <span class="lef">{item}</span> :
        <span class="right">{landing.RechargeGSM.ORANGE.privilège[i]}</span></div>
        <div class="seperator"></div>
        {/each}
  
      </div>
  </div>
 </div>     

                <!--grossiste1 -->
                <div class="tableContainer">
 <div class="Table">
                    <!--header-->
        <div class="headerGSMorange headerGSM">ORANGE</div>
        <div class="subHeaderGSMorange subHeaderGSM">{landing.RechargeGSM.headers[3]}</div>
                    <!--table elements-->
      <div class="elements">
       {#each Object.values(landing.RechargeGSM.ORANGE.type) as item,i }
        <div class="el">
        <span class="lef">{item}</span> :
        <span class="right">{landing.RechargeGSM.ORANGE.grossiste1[i]}</span></div>
        <div class="seperator"></div>
        {/each}
        
      </div>
  </div>
  </div>

  <div class="tableContainer">
               <!--grossiste2 -->
 <div class="Table">
                    <!--header-->
        <div class="headerGSMorange headerGSM">ORANGE</div>
        <div class="subHeaderGSMorange subHeaderGSM">{landing.RechargeGSM.headers[3]}</div>
                    <!--table elements-->
      <div class="elements">
      {#each Object.values(landing.RechargeGSM.ORANGE.type) as item,i }
        <div class="el">
        <span class="lef">{item}</span> :
        <span class="right">{landing.RechargeGSM.ORANGE.grossiste2[i]}</span>
        </div>
        <div class="seperator"></div>
        {/each}
        
      </div>
  </div>

  </div>
</div>

      <!-------------------------------------------------------TELECOM---------------------------------------------------------->

  <div class="roww">
                   <!--Normal-->
<div class="tableContainer">
    <div class="Table">
                    <!--header-->
        <div class="headerGSMtelecom headerGSM">TELECOM</div>
        <div class="subHeaderGSMtelecom subHeaderGSM">{landing.RechargeGSM.headers[0]}</div>
                    <!--table elements-->
      <div class="elements">
       {#each Object.values(landing.RechargeGSM.TELECOM.type) as item,i }
        <div class="el">
        <span class="lef">{item}</span> :
        <span class="right">{landing.RechargeGSM.TELECOM.normal[i]}</span>
        </div>
        <div class="seperator"></div>
        {/each}
      </div>
    </div>
     </div>  
            <!--privilège-->
<div class="tableContainer"> 
 <div class="Table">
                    <!--header-->
        <div class="headerGSMtelecom headerGSM">TELECOM</div>
        <div class="subHeaderGSMtelecom subHeaderGSM">{landing.RechargeGSM.headers[1]}</div>
                    <!--table elements-->
      <div class="elements">
      {#each Object.values(landing.RechargeGSM.TELECOM.type) as item,i }
        <div class="el">
        <span class="lef">{item}</span> :
        <span class="right">{landing.RechargeGSM.TELECOM.privilège[i]}</span></div>
        <div class="seperator"></div>
        {/each}
      </div>
  </div>
    </div>    
                <!--grossiste1 -->

<div class="tableContainer">              
 <div class="Table">
                    <!--header-->
        <div class="headerGSMtelecom headerGSM">TELECOM</div>
        <div class="subHeaderGSMtelecom subHeaderGSM">{landing.RechargeGSM.headers[3]}</div>
                    <!--table elements-->
      <div class="elements">
       {#each Object.values(landing.RechargeGSM.TELECOM.type) as item,i }
        <div class="el">
         <span class="lef">{item}</span> :
        <span class="right">{landing.RechargeGSM.TELECOM.grossiste1[i]}</span>
        </div>
        <div class="seperator"></div>
        {/each}
      </div>
  </div>
</div>

           <!--grossiste2 -->
<div class="tableContainer">
 <div class="Table">
                    <!--header-->
        <div class="headerGSMtelecom headerGSM">TELECOM</div>
        <div class="subHeaderGSMtelecom subHeaderGSM">{landing.RechargeGSM.headers[3]}</div>
                    <!--table elements-->
      <div class="elements">
      {#each Object.values(landing.RechargeGSM.TELECOM.type) as item,i }
        <div class="el">
         <span class="lef">{item}</span> :
        <span class="right">{landing.RechargeGSM.TELECOM.grossiste2[i]}</span>
        </div>
        <div class="seperator"></div>
        {/each}
      </div>
  </div>

</div>
</div>
        <!-------------------------------------------------------LYCA---------------------------------------------------------->

<div class="roww">
        
            <!----------normal--------> 
<div class="tableContainer">          
    <div class="Table">
                    <!--header-->
        <div class="headerGSMlyca headerGSM">LYCA</div>
        <div class="subHeaderGSMlyca subHeaderGSM">{landing.RechargeGSM.headers[0]}</div>
                    <!--table elements-->
      <div class="elements">
        {#each Object.values(landing.RechargeGSM.LYCA.type) as item,i }
        <div class="el">
         <span class="lef">{item}</span> :
        <span class="right">{landing.RechargeGSM.LYCA.normal[i]}</span>
        </div>
        <div class="seperator"></div>
        {/each}
      </div>  

    </div>
  </div>

          <!----------privilège-------->
  <div class="tableContainer">    
    <div class="Table">
                    <!--header-->
        <div class="headerGSMlyca headerGSM">LYCA</div>
        <div class="subHeaderGSMlyca subHeaderGSM">{landing.RechargeGSM.headers[1]}</div>
                    <!--table elements-->
      <div class="elements">
        {#each Object.values(landing.RechargeGSM.LYCA.type) as item,i }
        <div class="el">
        <span class="lef">{item}</span> :
        <span class="right">{landing.RechargeGSM.LYCA.privilège[i]}</span></div>
        <div class="seperator"></div>
        {/each}
      </div>
    </div>
</div>   
                    <!----------grossiste 1-------->
 <div class="tableContainer">                
    <div class="Table">
                    <!--header-->
            <div class="headerGSMlyca headerGSM">LYCA</div>
            <div class="subHeaderGSMlyca subHeaderGSM">{landing.RechargeGSM.headers[2]}</div>
                    <!--table elements-->
          <div class="elements">
           {#each Object.values(landing.RechargeGSM.LYCA.type) as item,i }
        <div class="el">
        <span class="lef">{item}</span> :
        <span class="right">{landing.RechargeGSM.LYCA.grossiste1[i]}</span></div>
        <div class="seperator"></div>
        {/each}
          </div>
    </div>
</div>
                    <!----------grossiste 2-------->
<div class="tableContainer">                  
    <div class="Table">
                    <!--header-->
            <div class="headerGSMlyca headerGSM">LYCA</div>
            <div class="subHeaderGSMlyca subHeaderGSM">{landing.RechargeGSM.headers[3]}</div>
                    <!--table elements-->
          <div class="elements">
            {#each Object.values(landing.RechargeGSM.LYCA.type) as item,i }
        <div class="el">
        <span class="lef">{item}</span> :
        <span class="right">{landing.RechargeGSM.LYCA.grossiste2[i]}</span></div>
        <div class="seperator"></div>
        {/each}
          </div>
    </div>
</div>

</section>
{/if}