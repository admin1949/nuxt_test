<template>
    <div class="dd">
        <h1>hi,欢迎光临！</h1>
        <div class="t_head">
            <div class="flex1 hover">杂技</div>
            <div class="flex1 hover">日常</div>
            <div class="flex1 hover">随笔</div>
            <div class="flex1 hover">技术文章</div>
        </div>
    </div>
</template>

<script>
// import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

export default {
  name: '',
  data() {
      return {
      }
  },
  created() {
  },
  mounted(){
  }
}
</script>

<style>
  .dd{
  }
  .t_head{
      display: flex;
      height: 70px;
      padding: 10px;
      justify-content: space-evenly;
      background-color: #ddd;
  }
  .flex1{
      flex: 1;
      text-align: center;
      transition: all ease .15s;
      user-select: none;
      display: flex;
      justify-content: center;
      flex-flow: column;
      background-color: #fffff0;
      margin: 0 5px;
  }
  .flex1:first-child{
      margin-left: 0
  }
  .flex1:last-child{
      margin-right: 0
  }
  .hover:hover{
      background-color: #eff;
      cursor: pointer;
  }
</style>