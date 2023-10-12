import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'app-web-cam-image',
  templateUrl: './web-cam-image.component.html',
  styleUrls: ['./web-cam-image.component.scss'],
})
export class WebCamImageComponent {
  stream: any = null;
  status: any = null;
  trigger: Subject<void> = new Subject();
  previewImage: string = '';
  btnLabel: string = 'Capture image';

  get $trigger(): Observable<void> {
    return this.trigger.asObservable();
  }

  snapshot(event: WebcamImage) {
    console.log(event);
    this.previewImage = event.imageAsDataUrl;
    this.btnLabel = 'Re capture image';
  }
  checkPermissions() {
    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: 500,
          height: 500,
        },
      })
      .then((res) => {
        console.log('response', res);
        this.stream = res;
        this.status = 'My camera is accessing';
        this.btnLabel = 'Capture image';
      })
      .catch((err) => {
        console.log(err);
        if (err?.message === 'Permission denied') {
          this.status =
            'Permission denied please try again by approving the access';
        } else {
          this.status =
            'You may not having camera system, Please try again ...';
        }
      });
  }

  captureImage() {
    this.trigger.next();
  }

  proceed() {
    console.log(this.previewImage);
  }
}
