export class Experience{
    public Nombre:string = ""
    public ExtraInfo:string = ""
    public Skills:string[] = []
    public Foto:string = ""

    constructor(nombre:string, info:string, skills:string[], foto:string){
        this.Nombre = nombre
        this.ExtraInfo = info
        this.Skills = skills
        this.Foto = foto
    }
}