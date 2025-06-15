<template>
<div id="pizza-table">
    <table>
        <tr>
            <th>#</th>
            <th>Cliente:</th>
            <th>Massa:</th>
            <th>Sabor:</th>
            <th>Opcionais:</th>
            <th>Ações:</th>
            <th>Massa:</th>
        </tr>
        <tr>
            <td>1</td>
            <td>Paulo</td>
            <td>Integral</td>
            <td>Calabres</td>
            <td>
                <select>
                    <option value="">Opção 1</option>
                    <option value="">Opção 2</option>
                </select>
            </td>
            <td>ué</td>
            <td>Hmmmm masssa crocante</td>
        </tr>
    </table>
</div>

</template>

<style scoped>
    table, th, tr, td {
        border: solid 1px;
        border-collapse: collapse;
        padding: 3px 12px;
    }
</style>

<script>
import api from '@/services/api';

export default {
    name: "DashPedidos",
    data(){
        return {
            pizzas: null,
            pizzas_id: null,
            status: [],
            msg: null,
        }
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