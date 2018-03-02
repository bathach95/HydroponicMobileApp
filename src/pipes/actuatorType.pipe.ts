import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'actuatorTypeFilter',
    pure: false
})
export class ActuatorTypePipe implements PipeTransform {
    transform(items: any[], filter: any): any {
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => item.type === filter.type);
    }
}