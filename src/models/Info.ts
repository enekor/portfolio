export class Info {
  public Name: string = "";
  public Phone: string = "";
  public Email: string = "";
  public UrlCv: string = "";
  public UrlProfilePicture:string = "";
  public UrlGithub: string = "";
  public UrlLinkedin: string = "";


constructor(name: string, phone: string, email: string, urlCv: string, urlProfilePicture: string, urlGithub: string = "", urlLinkedin: string = "") {
    this.Name = name;
    this.Phone = phone;
    this.Email = email;
    this.UrlCv = urlCv;
    this.UrlProfilePicture = urlProfilePicture;
    this.UrlGithub = urlGithub;
    this.UrlLinkedin = urlLinkedin;
  }

}

