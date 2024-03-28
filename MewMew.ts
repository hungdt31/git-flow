class Cat {
  private color : string;
  constructor(){
    this.color = 'Red';
    this.run();
  }
  public alert() {
    console.log(this.color + ' cat' + ' MEW MEW');
  }
  public run(){
    console.log('<------>');
  }
}
const cat = new Cat();
cat.alert()