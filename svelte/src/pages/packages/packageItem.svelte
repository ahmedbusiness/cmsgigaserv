<script>
    export let data = {stars: 3};
    export let edit = true;
    
    
</script>



<div class="owl-item active" style=";width: 1110px;height:383.633px; margin-bottom: 16px;">
                <div class="owl-item cta_item text-center" style="border: 1px solid #AFB2B4">
                    {#if edit}
                        <div bind:innerHTML={data.headline} contenteditable="true" class="cta_title">maldives deluxe package</div>
                    {:else}
                        <div bind:innerHTML={data.headline} contenteditable="false" class="cta_title">maldives deluxe package</div>
                    {/if}
                    <div class={"rating rating_" + data.stars}>
                        {#if edit}
                            <i on:click={() => data.stars = 1} class="fa fa-star"></i>
                            <i on:click={() => data.stars = 2} class="fa fa-star"></i>
                            <i on:click={() => data.stars = 3} class="fa fa-star"></i>
                            <i on:click={() => data.stars = 4} class="fa fa-star"></i>
                            <i on:click={() => data.stars = 5} class="fa fa-star"></i>
                        {:else}
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                        {/if}
                            
                    </div>
                    {#if edit}
                        <p bind:innerHTML={data.paragraph} contenteditable="true" class="cta_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec. Proin bibendum, augue faucibus tincidunt ultrices, tortor augue gravida lectus, et efficitur enim justo vel ligula.</p>
                    {:else}
                        <p bind:innerHTML={data.paragraph} contenteditable="false" class="cta_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae cursus mi hendrerit nec. Proin bibendum, augue faucibus tincidunt ultrices, tortor augue gravida lectus, et efficitur enim justo vel ligula.</p>
                    {/if}
                    
                    <div class="button cta_button">
                        <div class="button_bcg">
                        </div>
                        <a href="#">book now<span></span><span></span><span></span></a>
                    </div>
                </div>
            </div>