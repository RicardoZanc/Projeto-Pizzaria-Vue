<template>
    <form>
        <div class="field">
            <label for="">Nome do cliente</label>
            <input class="text" type="text" placeholder="Digite seu nome">
        </div>
        <div class="field">
            <label for="">Escolha a massa</label>
            <select name="" id="">
                <option value=""></option>
                <option value="">Teste</option>
            </select>
        </div>

        <div class="field">
            <label for="">Escolha o sabor da sua pizza</label>
            <select name="" id="">
                <option value=""></option>
            </select>
        </div>

        <div class="field">
            <label for="">Selecione os opcionais:</label>
            <input class="checkbox" type="checkbox" name="" id=""> <p class="checklabel">Borda de catupiry</p>
        </div>

    </form>
</template>

<script>
export default {
    name: "PizzaForm",
}
</script>

<style scoped>
    .field {
        display: block;
        text-align: start;
    }

    p.checklabel {
        display: inline;
        font-weight: bold;
    }

    label {
        display: block;
        text-align: start;
        padding: 6px 8px 6px 8px;
        border-left: solid  gold ;
        font-size: large;
        font-weight: bold;
    }
    
    input.text {
        display: block;
        font-size: large;
        margin: 12px 0px;
        width: 100%;
    }

    input.checkbox {
        margin: 12px 0px;
    }
    
    select {
        width: 100%;
        font-size: large;
        margin: 12px 0px;
    }

</style>