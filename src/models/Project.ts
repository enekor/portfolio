export class Project{
    public Nombre:string = ""
    public Imagen:string = ""
    public Link:string = ""
    public Link2:string = ""
    public Tecnologias:string[] = []
    public Info:string = ""

    constructor(nombre:string, imagen:string, link:string, tecnologias:string[], info:string, link2:string = ""){
        this.Nombre = nombre
        this.Imagen = imagen
        this.Link = link
        this.Link2 = link2
        this.Tecnologias = tecnologias
        this.Info = info
    
    }
}