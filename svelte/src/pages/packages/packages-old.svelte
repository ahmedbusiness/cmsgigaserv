<style>


.u-button {
        background-color: #2CBC62;
        color: white;
        padding: 8px 16px;
        border-radius: 4px;
        cursor: pointer;
        width: 200px;
        margin: 8px auto 0 auto;
        text-align: center;
    }

    .title-container {
        margin-top: 16px;
        width: 100%;
        display: flex;
        flex-direction: column;
        border-radius: 4px;
        
        background-color: white;
    }
    .u-title {
        text-align: center;
        border-radius: 4px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
        color: white;
        background-color: #1B2433;
        padding: 8px 0;
        width: 100%;
    }

    .border-remainder {
        padding: 8px;
        display:flex;
        flex-direction: column;
        width: 100%;
        border-bottom-right-radius: 4px;
        border-bottom-left-radius: 4px;
        border: 1px solid #AFB2B4;
        border-top: 0;
    }
    .u-container {
        width: 100%;
        height: 100%;
        padding: 8px 16px 0px 16px;
        overflow-y: scroll; 
    }
    .u-center {
        margin: auto;
    }

    .many-packages {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        justify-content: center;
    }
    .fa-times{
        color: #EE6E73;
        border: 1px solid #EE6E73;
        border-bottom: 0;
    }
    .fa-times:hover {
        color: #E8E8E8;
        background-color: #EE6E73;
    }

    .fa-thumbtack{
        color: #2CBC62;
        border: 1px solid #2CBC62;
        border-bottom: 0;
    }
    .fa-thumbtack:hover,  .fa-thumbtack.active{
        color: #E8E8E8;
        background-color: #2CBC62;
    }

    .fa-edit{
        color: #00D1B2;
        border: 1px solid #00D1B2;
        border-bottom: 0;
    }
    .fa-edit:hover, .fa-edit.active {
        color: #E8E8E8;
        background-color: #00D1B2;
    }
    
    .control {
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
    i {
        -webkit-app-region: no-drag;
        transition: all 0.2s;
        width: 36px;
        font-size: 130%;
        padding: 0.25em;
        text-align: center;
        margin-left: 3px;
    }
    .bottom {
        padding-bottom: 4em;
    }
</style>

<script>
    import PackageItem from './pakcageItem.svelte'
    import {notifChannel, storage, db} from '../../store.js'
    import { onMount } from 'svelte';
    let data = {stars: 4}
    let offers = [];
    let pinned = []


    onMount(async () => {
		$db.collection('sections').doc('packages').onSnapshot(function(doc) {
            if (doc.data()) {
                offers = doc.data().data;
                offers.sort((a, b) => !a.pinned)
                for (let x of offers) {
                if (x.pinned) {
                    pinned = [...pinned, x]
                }
                
            }
            }
            
        })
	});

    let registerOffer = () => {


        offers = [...offers, Object.assign(data, {pinned: false, creation: Date.now() / 1000})]
        $db.collection('sections').doc('packages').set({data: offers})
        notifChannel.set({msg: 'Package created', type: "info"})
        data = {
           stars: 3,
        }
    }

     let pinOffer = (o) => {
        offers = offers.map((item, index) => {
            if ( o == item) {
               if (item.pinned) {
                   item.pinned = false
                   pinned = pinned.filter((r) => r != item)
               } else {
                   item.pinned = true
                   pinned = [...pinned, item]
                   
               }
            }
            return item;
        })
        if (pinned.length > 4) {
            console.log("over")
            console.log(pinned.shift())
            offers[0].pinned = false
            console.log(offers[0])
            offers = offers
            notifChannel.set({msg: "you can only have 3 offers active", type: "info"})
        }
        $db.collection('sections').doc('packages').set({data: offers})
    }
    let deleteOffer = (o) => {
        offers = offers.filter((item) => item != o)
        $db.collection('sections').doc('packages').set({data: offers})
    }


    let initUpdateOffer = (o, i) => {
        offers = offers.map((item, index) => {
            if ( o == item) {
                
                if (item.edit) {
                    
                    console.log(item.original)
                    item = JSON.parse(item.original)
                    item.edit = false
                    delete item.original
                } else {
                    item.edit = true
                    item.original = JSON.stringify(item)
                }

            }
            return item
        })
    }
    let updateOffer = (o) => {
        offers = offers.map((item, index) => {
            if ( o == item && item.edit) {
                delete item.original;
                item.edit = false;
            }
            return item
        })
        $db.collection('sections').doc('packages').set({data: offers})
    }
</script>

<div class="u-container">
    <div class="title-container">
        <div class="u-title">
            Create Package
        </div>
        <div class="border-remainder">
            <div class="u-center">
                <PackageItem bind:data={data}></PackageItem>
                <div on:click={registerOffer} class="u-button">
                    Create
                </div>
            </div>

        </div>
    </div>
    <div class="title-container">
            <div class="u-title">
                Manage Packages
            </div>
            <div class="border-remainder bottom">
                <div class="many-packages">
                    {#each offers as offer}
                        <div class="controls">
                            <div class="control">
                                <i on:click={() => pinOffer(offer)} class={offer.pinned ? "fas fa-thumbtack active": "fas fa-thumbtack"}></i>
                                <i on:click={() => initUpdateOffer(offer)} class={offer.edit ? "fas fa-edit active": "fas fa-edit"}></i>
                                <i on:click={() => deleteOffer(offer)} class="fas fa-times"></i>
                            </div>
                            <PackageItem edit={offer.edit} bind:data={offer}/>
                            {#if offer.edit == true}
                                <div on:click={() => updateOffer(offer)} class="u-button">
                                    Update
                                </div>
                            {/if}
                        </div>
                    {/each}
                
                </div>
            </div>
        </div>
</div>