<template>
  <div class="option">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>This is Options - API Page </h1>
    <!-- <h3> List contains  {{names.length}}  names</h3> -->
    <h3> List contains {{ nameCount }} names </h3>
  </div> <br />

  <div>
    <input type="text" placeholder="Enter the name"
       v-model="newName" @keyup.enter="addNewName()" />
  </div>

  <div>
    <ul>
      <li v-for="(name, index)  in names" :key="name.id">
        <span> {{name.pname}}</span>
        <button @click="deleteName(index)"> x </button> 
        <!-- @click="deleteName(index)" -->
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  data(){
    return{
      newName: '',
      names: [
        {
          id: 1,
          pname: 'One'
        },
        {
          id: 2,
          pname: 'Two'
        },
        {
          id: 3,
          pname: 'Three'
        }   ],
        wordCollection:['failure','hatred','dislike','dishonest']
      }  
     },
   computed:{
      nameCount(){
        return this.names.length
      }
     },

     methods: {
      addNewName()
      {
        let temp = {
          id: Date.now(),
          pname: this.newName
        }
        this.names.push(temp)   
        this.newName=''     
      },
        deleteName(index){
            console.log(index)
            this.names.splice(index, 1)
          }
        },
        watch:{
          newName(newVal){
           // console.log(newVal)
           if (this.wordCollection.includes(newVal.toLowerCase())){
            this.newName=''
            alert('You must Never say  ' + newVal)
           }
          }
        } 
  }

 </script>

<style>
ul{
  list-style: none;
  padding: 0;
  width: 200px;
  margin: 20px auto 0;
}
li{
  border: 1px solid;
  display: flex;
  margin-bottom: 10px;
  }
  li span{
    flex-grow: 1;
  }
</style>
