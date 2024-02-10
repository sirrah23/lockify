<script lang="ts">
    let lockerCode: number[];
    function generateCode() {
        let newDigits: number[] = [];
        for(let i = 0; i < 4; i++) {
            newDigits.push(Math.floor(Math.random() * 9));
        }
        lockerCode = [...newDigits];
    }
</script>
<h1>Lockify</h1>
<button on:click={() => generateCode()}>Generate a code</button>
<p>Your locker code is: {lockerCode ? lockerCode : "..."}</p>
<p>Notes:</p>
<textarea></textarea>