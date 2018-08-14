new Vue({
  el: '#exercise',
  data: {
    name: 'Justin',
    age: '21',
    multiple: '21',
    link: 'https://vignette.wikia.nocookie.net/blogclan-2/images/4/45/Random-turtle.gif/revision/latest?cb=20160706220110'
  },
  methods: {
    multiply: function(){
      this.multiple = 21*3;
      return this.multiple;
    },
    randomized: function(){
    var num = (Math.random());
    return num;
    }
  }
});
