<style>
    .overlay {
        height: calc(100vh - 45px);
        width: 218px;
        position: fixed;
        right: 20px;
        bottom: 0;
        z-index: 5;
        pointer-events: none;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding-bottom: 100px;
    }

    .notif {
        pointer-events: auto;
        width: 200px;
        padding: 16px 8px;
        margin: 16px 8px;
        border-radius: 4px;
        text-align: center;
        cursor: pointer;
    }

    :global(.notif-success ){
        background-color: #41b883;
        border: 1px solid #41b883;
        color: white;
    }
     :global(.notif-error ){
        background-color: #F1321F;
        border: 1px solid #F1321F;
        color: white;
    }

    :global(.notif-info) {
        color: white;
        background-color: #1A73E8;
        border: 1px solid #1A73E8;
    }
</style>



<script>
    import {notifChannel} from './store.js'
    import { fly } from 'svelte/transition';
    let notifs = []
    notifChannel.subscribe((value) => {
        if (value == 10) {
            return
        }
      
        value.timestamp = Date.now()
        let timer = setTimeout(() => {
            for (let i = 0; i < notifs.length; i++) {
                if (notifs[i].timestamp == value.timestamp) {
                    notifs.splice(i, 1)
                    notifs = [...notifs]
                     let z = 0;
                    for (let x of notifs) {
                        if (x != undefined) {z++}
                    }
                    if (z == 0) {
                        notifs = []
                    }
                    break
                }
            }
        }, 20000)
        value.timer = timer
        notifs = [...notifs,  value]
    })

    let gar_collect = (n,r) => {
            console.log(r)
            clearTimeout(n.timer)
            //notifs.splice(r, 1)
            delete notifs[r]
            let z = 0;
            for (let x of notifs) {
                if (x != undefined) {z++}
            }
            if (z == 0) {
                notifs = []
            }
            notifs = notifs
        }
</script>


<div class="overlay">
    {#each notifs as notif, i}
        {#if notif != undefined}
            <div on:click={() => {gar_collect(notif,i)}} in:fly="{{ x: 200, duration: 800 }}" out:fly="{{x: 200, duration: 600}}" class={"notif notif-" + notif.type}>
                {notif.msg}
            </div>
        {/if}
    {/each}
</div>


