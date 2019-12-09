
<style>

    .u-container {
        top: 0;
        left: 0;
        position: sticky;
        width: 100%;
        display: flex;
        justify-content: space-between;
        background: #34495e;
        min-height: 45px;
        -webkit-app-region: drag;
       
    }
    .controls {
        display: flex;
        justify-content: flex-end;
        align-items: stretch;
    }
    i {
        -webkit-app-region: no-drag;
        transition: all 0.2s;
        width: 36px;
        font-size: 130%;
        padding: 0.25em;
        text-align: center;
    }
    .fa-times{
        color: #EE6E73;
    }
    .fa-times:hover {
        color: #E8E8E8;
        background-color: #EE6E73;
    }
    .fa-minus, .fa-square {
        color: #03a9f4 ;
    }
    .fa-square {
        font-size: 110% !important;
        display: flex;
    }
    .fa-minus, .fa-times {
        display: flex;

    }
    .fa-square::before, .fa-minus::before, .fa-times::before {
        margin: auto;
    }

    .fa-minus:hover, .fa-square:hover {
        color: #E8E8E8;
        background-color: #03a9f4;
    }
    .u-title {
        padding: 8px;
        color: white;
    }
</style>

<script>
    import {activePage} from './store.js'
    export let ipcRenderer;
    
    let send_command = (c) => {
        ipcRenderer.send('apptopmenu', c)
    }

    
</script>

<div class="u-container">
    <div class="u-title">
        Admin Panel - {$activePage}
    </div>
    <div class="controls">
        <i on:click={() => {send_command("minimize")}} class="fas fa-minus"></i>
        <i on:click={() => {send_command("full")}} class="far fa-square"></i>
        <i on:click={() => {send_command("close")}} class="fas fa-times"></i>
    </div>
    
</div>