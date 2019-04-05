import { Component, OnInit } from '@angular/core';
import { DateUntilService } from '../date-until.service';

@Component({
    selector: 'app-timelines',
    templateUrl: './timelines.component.html',
    styleUrls: ['./timelines.component.scss']
})
export class TimelinesComponent implements OnInit {
    output = '';
    constructor(private dateUntilService: DateUntilService) { }

ngOnInit() {
}

onChange(value) {
    this.output = this.dateUntilService.getDiffToNow(value);
}

}