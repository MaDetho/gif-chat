import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'status' })
export class StatusPipe implements PipeTransform {
    transform(value: string, args: string[]): any {
        if (!value) return value;
        return value === "1" ? "online" : "offline";
    }
}