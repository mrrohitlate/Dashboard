import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebCamImageComponent } from './web-cam-image/web-cam-image.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'screens',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'web-cam-image',
      },
      {
        path: 'web-cam-image',
        component: WebCamImageComponent,
        data: {
          title: 'Web-Cam-image',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreensRoutingModule { }
