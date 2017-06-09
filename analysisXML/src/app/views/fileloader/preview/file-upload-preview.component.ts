import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { SelectFileModel } from '../untils/file-upload.model';

@Component({
  selector: 'fileloader-preview',
  templateUrl: './file-upload-preview.component.html',
  styleUrls: ['./file-upload-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'fileUploadPreview'
})
export class FileUploadPreviewComponent {

  @Input() imgPreview: boolean;
  @Input() previewWidth: string;
  @Input() uploaded: boolean;
  @Input() selectFiles: SelectFileModel[] = [];
  @Output() removeFile = new EventEmitter<SelectFileModel>();
  @Output() loadFile = new EventEmitter<SelectFileModel>();

  onRemoveFile(fileItem) {
    this.removeFile.emit(fileItem);
  }
  onLoadFile(fileItem) {
    this.loadFile.emit(fileItem);
  }
}