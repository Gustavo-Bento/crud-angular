import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes =[
  {
    path: '', redirectTo: 'courses', pathMatch:'full'},
    {
      path: 'courses',
      loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
    }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
