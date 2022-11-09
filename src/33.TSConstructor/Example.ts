// Longhand
class Person {
  private name: string
  public age: number
  protected hobbies: string[]

  constructor(name: string, age: number, hobbies: string[]) {
    this.name = name
    this.age = age
    this.hobbies = hobbies
  }
}

// Shorthand
class Person1 {
  constructor(
    private name: string,
    public age: number,
    protected hobbies: string[]
  ) { }
}