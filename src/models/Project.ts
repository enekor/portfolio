export class Project{
    public Nombre:string = ""
    public Imagen:string = ""
    public Link:string = ""
    public Tecnologias:string[] = []
    public Info:string = ""

    constructor(nombre:string, imagen:string, link:string, tecnologias:string[], info:string){
        this.Nombre = nombre
        this.Imagen = imagen
        this.Link = link
        this.Tecnologias = tecnologias
        this.Info = info
    
    }
}