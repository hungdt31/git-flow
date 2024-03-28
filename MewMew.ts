class Cat {
  private color : string;
  constructor(){
    this.color = 'Red';
  }
  public alert() {
    console.log(this.color + ' cat' + ' MEW MEW');
  }
}
const cat = new Cat();
cat.alert()