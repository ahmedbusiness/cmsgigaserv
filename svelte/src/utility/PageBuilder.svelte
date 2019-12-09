<style>

</style>





<script>
    import {notifChannel, storage, db} from '../store.js'
    import { onMount } from 'svelte';
    let landing = {};
    onMount(async () => {
    Firebasedb.collection("landing").doc("uOD2YitEzj5P4i2uV0wG").get().then(function(doc) {
        if (doc.exists) {
          landing = doc.data();
          //console.log("Document data:", doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }).catch(function(error) {
        console.log("Error getting document:", error);
      });
	});


  
</script>

