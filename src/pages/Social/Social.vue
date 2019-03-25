/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2019/1/29
* Time: 9:39 AM
* name:
*/
<template>
  <div class='Social'>
    <suspend :category='data.category'></suspend>
    <SearchInput
      :Province = 'Province'
      :data='data'
      ref='search'
    ></SearchInput>
    <div class="imageModule">
      <ImageModule
        v-for='item in HRList'
        :key='item.sort'
        :item='item'
        :height='height'
      ></ImageModule>
    </div>
  </div>
</template>

<script>
import api from '../../api/api'
import SearchInput from '../common/SearchInput'
import ImageModule from '../common/ImageModule'
import suspend from '../common/suspend'
export default {
  name: 'Social',
  data () {
    return {
      data: {
        category: '2'
      },
      HRList: '',
      Province: '',
      height: '1.15'
    }
  },
  components: {
    SearchInput,
    ImageModule,
    suspend
  },
  methods: {
    searchHome (res) {
      console.log(res)
      this.HRList = res.data
      api.checkImg(this.HRList)
    },
    changeAddress (res) {
      this.Province = res
    }
  },
  beforeMount () {
    this.params = {
      pageNum: 1,
      pageSize: 10,
      keyword: '',
      category: ''
    }
    this.$store.commit('SET_SEARCHCONTENT', this.params)
  },
  mounted () {
    this.$store.commit('SET_SEARCHCATEGORIES', 2)
    // this.$.get('./static/address.json').then(this.changeAddress)
    // this.$.post('/book/web/api/book/searchHome', {category: this.data.category})
    //   .then(this.searchHome)
    this.$.getAddress('').then(this.changeAddress)
    this.$.searchHome({category: this.data.category}).then(this.searchHome)
  }
}
</script>

<style scoped lang='scss'>
  .imageModule{
    padding: 0 .13rem;
  }
</style>
