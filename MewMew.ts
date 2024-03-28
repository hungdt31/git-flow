class Cat {
  private color : string;
  constructor(){
    this.color = 'red';
  }
  public alert() {
    console.log('MEW MEW');
  }
}
const cat = new Cat();
cat.alert()