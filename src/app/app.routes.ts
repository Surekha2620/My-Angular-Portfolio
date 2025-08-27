import { Routes } from '@angular/router';
import { Body } from './body/body';
import { About } from './about/about';
import { Project } from './project/project';
import { Skill } from './skill/skill';

export const routes: Routes = [
    {path:'', component: Body},
    {path:'about', component: About},
    {path:'project', component: Project},
    {path:'skill', component: Skill}
];
