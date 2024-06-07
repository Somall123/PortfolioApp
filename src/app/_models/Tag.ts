export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly CSHARP = new Tag('C#', 'blue');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'green');
    static readonly JAVA = new Tag('Java', 'orange');
    static readonly PYTHON = new Tag('Python', 'purple');
    static readonly CPLUSPLUS = new Tag('C++', 'black');
    static readonly REACT = new Tag('React', 'cerise');
    static readonly NODEJS = new Tag('Node Js', 'brown');
    static readonly ASPNET = new Tag('ASP.net', 'pink');
    static readonly VUEJS = new Tag('VUEJS', 'black');
    static readonly JAAVSCRIPT = new Tag('Javascript', 'gray');



    private constructor(private readonly key: string, public readonly color: string) { }

    toString(): string {
        return this.key;
    }
}
