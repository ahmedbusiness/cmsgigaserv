<style>
     .nav {
        width: 200px;
        min-width: 200px;
        background-color: #ffffff;
        display: flex;
        flex-direction: column; 
    }
    .nav-item {
        transition: all 0.5s;
        width: 100%;
        font-size: 100%;
        padding: 0.5em 1em;
        color: #34495e;
        border-bottom: 1px solid transparent;
        cursor: pointer;
        margin:5px 0 5px 10px;
        
    }
    .nav-item:hover, .active {
        background-color: #41b883;
        color: white;
        width:85%;
        border-radius: 10px;
        margin-left:10px;
    }

    .active {
    background-color: #41b883;
    width:85%;
    border-radius: 10px;
    margin-left:10px;
    }
    .user{
    margin-top:10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 10px;
    margin-left:50%;
    transform: translateX(-50%);
    }
    .user img{
    width:98px;
    height:93px;
    margin-left:50%;
    transform: translateX(-50%);
    margin-bottom: 20px;
    }
     .user h2{
    color:#34495e;
    display: flex;
    }
    .logo{ 
    margin-top:10px;
    display: flex;
    justify-content: left;
    margin-bottom: 20px;

    }
    .logoText{
     color:#34495e;
     margin-top:5px;
    font-size: 120%;
    font-weight: 600;
    }
   
    
    
</style>

<script>
    import {activePage} from './store.js'
    let navs = [ "Bureautique","Paris Sportifs","Recharge GSM"]
</script>

<div class="nav">
<!--
<div class="logo">
<object title ="logo" type="image/svg+xml" data="images/logo.svg"></object>
<div class="logoText">
Devronic
</div>
</div

<div class="user">
<img src="Images/UserAvatar.png" alt="useravatar">
<h2>Adam Boulila</h2>
</div>
-->
    {#each navs as nav}
        <div on:click={() => {$activePage = nav}}  class={$activePage == nav ? "nav-item active": "nav-item"}>
            {nav}  
        </div>
    {/each}
</div>