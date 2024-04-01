class _Cat_ {
  private color: string;

  constructor() {
    this.color = 'Red';
    this.run();
  }
  
  public alert() {
    console.log(this.color + ' one MEW MEW ....');
  }

  private run() {
    console.log('<------>');
  }
}

const x = new _Cat_();
x.alert();
