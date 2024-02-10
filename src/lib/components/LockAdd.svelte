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

<style>
    .black-border {
        border: 2px solid black;
        padding: 10px;
    }
    .container {
        padding: 10px;
        margin: 10px;
    }
    .textarea {
        height: 5rem;
        width: 50%;
    }
</style>

<h2>Add a lock</h2>
<div class="black-border container">
    <div>
        <button on:click={() => generateCode()}>Generate a code</button>
        <button on:click={() => {}}>Save</button>
    </div>
    <p>Your locker code is: {lockerCode ? lockerCode : "..."}</p>
    <p>Notes:</p>
    <textarea class="textarea"></textarea>
</div>