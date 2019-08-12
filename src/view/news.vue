<template>
  <div class="main-container">
    <div v-for="(item,index) in Object.keys(news)" :key="index">
      <h1 class="title">{{item}}</h1>
      <div v-for="(sitem,sindex) in Object.keys(news[item])" :key="sindex">
        <h2 class="subtitle">{{sitem}}</h2>
        <ul>
          <li class="item" v-for="(ssitem,ssindex) in news[item][sitem]" :key="ssindex">
            <span>{{ssitem.posttime}}</span>
            <a target="_blank" class="link" :href="ssitem.detailLink">{{ssitem.title}}</a>
          </li>
        </ul>
        
      </div>

    </div>
  </div>
</template>
<script>
/* eslint-disable*/
import axios from 'axios'
import urlPrefix from '@/util/urlPrefix'

export default {
  data() {
    return {
      news: []
    };
  },
  created() {
    this.getNews();
  },
  components: {
  },
  computed: {
    
  },
  methods: {
    getNews(){
      axios({
        method: 'get',
        url: `${urlPrefix}/api/news-titles?queryParams=1&size=100000`
      }).then((res)=>{
        let data = res.data
        let formatObj = {}
        data.forEach((item)=>{
          if(!formatObj[item.department]){
            formatObj[item.department] = {}
          }
          if(!formatObj[item.department][item.newscolumn]){
            formatObj[item.department][item.newscolumn] = []
          }
          formatObj[item.department][item.newscolumn].push(item)
        })
        console.log(Object.keys(formatObj))
        this.news = formatObj
        console.log(this.news)

      })
    }

    
  }
};
</script>
<style scoped lang="scss">
.title{
  font-size: 24px;
  font-weight: bold;
}
.subtitle{
  font-size: 18px;
  margin-top: 20px;
}
.item{
  margin: 4px 0;
}
.link{
  margin-left: 20px;
  
}

</style>
