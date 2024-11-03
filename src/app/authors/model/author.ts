export class Book {
  constructor(public id: number, public authors?: Author[]) {}
}

export class Author {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string
  ) {}
}
