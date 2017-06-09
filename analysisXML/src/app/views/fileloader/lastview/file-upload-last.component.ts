import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { SelectFileModel } from '../untils/file-upload.model';

@Component({
  selector: 'fileloader-last',
  templateUrl: './file-upload-last.component.html',
  styleUrls: ['./file-upload-last.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'fileUploadLast'
})
export class FileUploadLastComponent {

  @Input() imgPreview: boolean;
  @Input() previewWidth: string;
  @Input() uploaded: boolean;
  @Input() selectFiles: SelectFileModel[] = [];
  @Output() removeFile = new EventEmitter<SelectFileModel>();
  @Output() loadFile = new EventEmitter<SelectFileModel>();

}