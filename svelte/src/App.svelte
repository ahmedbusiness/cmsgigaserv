

<style>
    :global(html) {
        min-width: 1200px;
    }
    :global(body) {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        min-width: 1200px;
    }
	h1 {
		color: purple;
	}
    .screen {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
    }
    .content {
        flex-grow: 1;
        display: flex;
        width: 100%;
        
    }
   
    .page {
        flex-grow: 1;
        background-color: #edf1f2;
        min-width: 700px;
        
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
    }
    .hide {
        display: none;
    }
</style>

<script>
    const electron = require('electron')
    const {ipcRenderer} = electron
    
    import './utility/keyframes.css'


    import CloseComp from './closenav.svelte'
    import NavComp from './Nav.svelte'
    import {activePage, storage, db, fb} from './store.js'
    import NotifComp from './notification.svelte'
    //import AdminNav from './utility/adminNav.svelte'


    import Bureautique from './pages/Bureautique/Bureautique.svelte'
    import ParisSportifs from './pages/ParisSportifs/ParisSportifs.svelte'
    import RechargeGSM from './pages/RechargeGSM/rechargeGSM.svelte'

    let pages = {
       "Bureautique": Bureautique,
        "Paris Sportifs": ParisSportifs,
        "Recharge GSM" :RechargeGSM,
    }
import { fbx,auth } from "./firebase.js";
import "firebase/firestore";
import { onMount } from 'svelte';
onMount(async () => {

    let email ="test@gmail.com";
    let password ="test123456";
   fbx.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  var errorCode = error.code;
            var errorMessage = error.message;
});
});
     /*import {onMount} from 'svelte'

 onMount(async () => {
        setTimeout(() => {
            
        }, 250);
    })*/

    

</script>


<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
<NotifComp />
<div class="screen">
    <CloseComp {ipcRenderer}/>
    <div class="content">
        <NavComp />

        {#each Object.entries(pages) as [npage, comp]}
            <div class={$activePage == npage ?  "page" : "page hide"}>
                <svelte:component this={comp}/>

        
            </div>
        {/each}
        
    </div>

</div>



