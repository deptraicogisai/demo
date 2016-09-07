import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'namepipe'
})
export class NamepipePipe implements PipeTransform {

  transform(value: any, display: boolean): any {
    return display ? value + ' ' + value.length : value.length;
  }
}
