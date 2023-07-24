import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateContent'
})
export class TruncateContentPipe implements PipeTransform {
  transform(content: string, wordCount: number): string {
    const words = content.split(' ');
    if (words.length > wordCount) {
      return words.slice(0, wordCount).join(' ') + '...';
    }
    return content;
  }
}
