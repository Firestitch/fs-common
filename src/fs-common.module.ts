import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FsArray } from './services/fsarray.service';
import { FsMath } from './services/fsmath.service';
import { FsUtil } from './services/fsutil.service';
import { FsValidate } from './services/fsvaildate.service';
import { FsUtilGuidPipe, FsUtilStringifyPipe } from './services/fsutil.pipe';
import { FsFormatNumberPipe } from './format';


@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    FsUtilGuidPipe,
    FsUtilStringifyPipe,
    FsFormatNumberPipe
  ],
  entryComponents: [
  ],
  declarations: [
    FsUtilGuidPipe,
    FsUtilStringifyPipe,
    FsFormatNumberPipe
  ],
  providers: [
    FsArray,
    FsMath,
    FsUtil,
    FsValidate
  ]
})
export class FsCommonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsCommonModule,
      providers: [
        FsArray,
        FsMath,
        FsUtil,
        FsValidate
      ]
    };
  }
}
