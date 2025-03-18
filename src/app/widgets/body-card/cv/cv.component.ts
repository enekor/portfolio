import { Component } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [PdfViewerModule],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent {
  downloadCv(){
    const link = document.createElement('a');
    link.href = 'assets/files/cv.pdf';
    link.download = 'curriculum Eneko Rebollo.pdf';
    link.click();
  }

  openCv(){
    window.open('assets/files/cv.pdf', '_blank');
  }
}
