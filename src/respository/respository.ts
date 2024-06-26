export default abstract class Repository<T> {
  findAll(where?: Partial<T>): Promise<T[]> {
    throw new Error("method not implemented");
  }
  findById(id: string, where?: Partial<T>): Promise<T | undefined> {
    throw new Error("method not implemented");
  }

  find(where: Partial<T>): Promise<T | undefined> {
    throw new Error("method not implemented");
  }

  update(where: Partial<T>): Promise<T | undefined> {
    throw new Error("method not implemented");
  }

  deleteById(id: string, where?: Partial<T>): Promise<T | undefined> {
    throw new Error("method not implemented");
  }

  save(object: T): Promise<T> {
    throw new Error("method not implemented");
  }
}
