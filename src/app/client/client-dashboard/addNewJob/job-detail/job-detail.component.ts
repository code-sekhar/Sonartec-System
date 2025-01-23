import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common'
import { FormsModule } from '@angular/forms';
// import { CKEditorModule } from 'ckeditor4-angular';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'job-detail',
  imports: [
    FormsModule,CommonModule,RouterLink ],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css'
})
export class JobDetailComponent {
  // public Editor: any;
  // public editorData: string = '<p>Start typing...</p>';
  // public isBrowser: boolean;

  // constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  //   this.isBrowser = isPlatformBrowser(this.platformId);
    
  //   // Load CKEditor only if running in the browser
  // }
  // editor: typeof ClassicEditor = ClassicEditor;
  // data: any = `<p>Hello, world!</p>`;
}
