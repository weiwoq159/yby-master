/**
* Created with vue.js
* User: 马强/529524114@qq.com
* Date: 2019/1/29
* Time: 10:07 AM
* name:
*/
<template>
  <div class='Taxation'>
    <suspend :category='data.category'></suspend>
    <SearchInput
      :Province = 'Province'
      :data='data'
      ref='search'
    ></SearchInput>
    <div class="imageModule">
      <ImageModule
        v-for='(item, index) in HRList'
        :key='index'
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
  name: 'Taxation',
  data () {
    return {
      data: {
        category: '3'
      },
      HRList: '',
      Province: '',
      height: '.89'
    }
  },
  components: {
    SearchInput,
    ImageModule,
    suspend
  },
  methods: {
    searchHome (res) {
      this.HRList = res.data
      api.checkImg(this.HRList)
      console.log(this.HRList)
    },
    changeAddress (res) {
      console.log(res.data)
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
