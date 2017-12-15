import { HttpClientModule } from '@angular/common/http';

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FsArray } from './fsarray.service';
import { FsMath } from './fsmath.service';
import { FsUtil } from './fsutil.service';
import { FsValidate } from './fsvaildate.service';
import { FsUtilGuidPipe, FsUtilStringifyPipe } from './fsutil.pipe';


export * from './fsutil.pipe';
export * from './fsutil.service';
export * from './fsarray.service';
export * from './fsmath.service';
export * from './fsvaildate.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FsUtilStringifyPipe,
    FsUtilGuidPipe
  ],
  providers: [
    FsArray,
    FsUtil,
    FsMath,
    FsValidate
  ],
  exports: [
    FsUtilStringifyPipe,
    FsUtilGuidPipe
  ]
})
export class FsCommonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsCommonModule,
      providers: [
        FsArray,
        FsUtil,
        FsMath,
        FsValidate
      ]
    };
  }
}

