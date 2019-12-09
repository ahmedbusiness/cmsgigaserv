<style>
    .progress {
    -moz-appearance: none;
    /* color: black; */
    -webkit-appearance: none;
    border: none;
    border-radius: 290486px;
    display: block;
    height: 1rem;
    overflow: hidden;
    padding: 0;
    width: 100%;
    }

    
    .progress:indeterminate::-webkit-progress-bar {
        background-color: transparent;
        }

        .progress:indeterminate::-moz-progress-bar {
        background-color: transparent;
        }

    @keyframes moveIndeterminate {
        from {
            background-position: 200% 0;
        }
        to {
            background-position: -200% 0;
        }
    }

    /* mozzila */
    
   

    progress::-webkit-progress-value {
        background: #23D160;
    }


    progress::-webkit-progress-bar {
        background-color: #dbdbdb;
    }

    .progress::-webkit-progress-value {
        background-color: #23d160;
    }

    .progress:indeterminate {
        -webkit-animation-duration: 1.5s;

        animation-duration: 1.5s;

        -webkit-animation-iteration-count: infinite;

        animation-iteration-count: infinite;

        -webkit-animation-name: moveIndeterminate;

        animation-name: moveIndeterminate;

        -webkit-animation-timing-function: linear;

        animation-timing-function: linear;

        background-color: #dbdbdb;

        background-image: linear-gradient(to right,#23d160 30%,#dbdbdb 30%);

        background-position: top left;

        background-repeat: no-repeat;

        background-size: 150% 150%;
        } 
        

    /* Chrome */
    
</style>


<script>
    import { get } from 'svelte/store'
    import { tweened } from 'svelte/motion'
    import { cubicOut } from 'svelte/easing'
    /** Value of progress bar
     * @svelte-prop {Number} value
     * */
    export let value = undefined
    /** Type (color) of progress bar
     * @svelte-prop {String} [type]

     * */
    export let type = ''
    /** Maximum value of progress bar
     * @svelte-prop {Number} [max=100]
     * */
    export let max = 100
    /** Duration of progress change animation (in ms)
     * @svelte-prop {Number} [duration=400]
     * */
    export let duration = 400
    /** Easing function to use for animation
     * @svelte-prop {Function} [cubicOut]
     * @values Any function from <code>svelte/easing</code>, or a custom one
     * */
    export let easing = cubicOut
    let el
    let newValue = tweened(value, { duration, easing })
    $: newValue.set(value)
    newValue.subscribe(val => {
        if (el && typeof(value !== undefined)) {
            el.setAttribute('value', get(newValue))
        }
    })


</script>

<progress class="progress {type}" bind:this={el} {max}>{value}</progress>