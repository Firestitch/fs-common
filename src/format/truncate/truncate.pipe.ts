import { Pipe, PipeTransform } from '@angular/core';
import { truncate } from './truncate';


@Pipe({
  name: 'fsFormatTruncate'
})
export class FsFormatTruncatePipe implements PipeTransform {

  constructor() {  }

  transform(value, limit?, completeWords?, ellipsis?): string {
    return truncate(value, limit, completeWords, ellipsis);
  }

}
