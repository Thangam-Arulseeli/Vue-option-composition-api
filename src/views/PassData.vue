<template>
   <h2> Hello Welcome : {{myName}}</h2>
   <h3> I have purchased  <b> {{ productName }}</b> </h3>
</template>
<script>
export default{
  props: ['productName'],
data (){
return{
  myName: 'Seeli'
}
}
}
</script>