<template>
  <div class="container-fluid">
    <h1>Tabela de preços</h1>
    <div class="container">
    <b-table
    striped
    bordered
    hover
      :items="items"
      :fields="fields"
      head-variant="none"
      table-variant="dark"
    ></b-table>
</div>
  </div>
</template>

<script>
// tabela da https://bootstrap-vue.js.org/docs/components/table
  export default {
    name:'Tabela',
    data() {
      return {
        fields: ['Atividade', 'Preço', 'Manutenção'],
        items: [
          { Atividade: 'HotPage', Preço: 'R$ 500,00', Manutenção: 'R$ 50,00' },
          { Atividade: 'Site sem progamação(até 5 páginas)', Preço: 'R$ 1000,00', Manutenção: 'R$ 100,00' },
          { Atividade: 'Site completo', Preço: 'R$ 4000,00', Manutenção: 'R$ 200,00' },
          { Atividade: 'E-commerce', Preço: 'R$ 15000,00	', Manutenção: 'R$ 500,00' },
          { Atividade: 'Hora avulsa', Preço: 'R$ 50,00	', Manutenção: 'R$ 00,00' },
        ],

        //striped  deixa linhas listradas(mudança de tonalidade de uma linha para outra)
      //  bordered: cria linha embaixo da linha de dados
      //  borderless: retira divisao da linha entre as linhas de dado,
      //  outlined: false,
      //  small: false, muda o tamnho da tabela para pequeno
    //    hover: true, muda a tonalidade ao colocar o mouse sobre a linha de dados
    //    dark: false, tonalidade
    //    fixed: false, deixa o tamndo da celula fixa
    //    footClone: false, copia o cabeçalho no rodapé
    //    headVariant: null, muda somente a linha do titulo
  //      tableVariant: 'dark', cor da tabela
  //      noCollapse: false
      }
    }
  }
</script>
<style scoped>
.container-fluid{
  text-align: center;

}
b-table{
  position: absolute;
  
}
</style>
