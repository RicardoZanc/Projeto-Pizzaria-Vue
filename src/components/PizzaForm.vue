<template>
    <form>
        <div class="field">
            <label for="">Nome do cliente</label>
            <input class="text" type="text" placeholder="Digite seu nome">
        </div>
        <div class="field">
            <label for="">Escolha a massa</label>
            <select name="" id="">
                <option :value="massa.id" v-for="massa in massas">{{ massa.tipo }}</option>
            </select>
        </div>

        <div class="field">
            <label for="">Escolha o sabor da sua pizza</label>
            <select name="" id="">
                <option :value="sabor.id" v-for="sabor in sabores">{{ sabor.tipo }}</option>
            </select>
        </div>

        <div class="field">
            <label for="">Selecione os opcionais:</label>

            <template v-for="opcional in opcionais">
                <div class="field">
                    <input class="checkbox" type="checkbox" :value="opcional.id"> <p class="checklabel">{{ opcional.tipo }}</p>
                </div>
            </template>
        </div>

    </form>
</template>

<script>
import api from '@/services/api';


export default {
    name: "PizzaForm",
    data() {
        return {
            massas: [],
            sabores: [],
            opcionais: [],
        }
    },
    mounted() { 
        this.getDados();
    },
    methods: {
        async getDados(){
            await api.get('/ingredientes')
            .then(res=>{
                this.massas = res.data.massa;
                this.sabores = res.data.Sabores;
                this.opcionais = res.data.opcionais;

            })
        }
    }
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