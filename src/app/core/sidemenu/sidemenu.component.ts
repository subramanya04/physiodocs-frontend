import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models';
import { menus } from './menu-element';

@Component({
  selector: 'cdk-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  @Input() user: User | undefined;
  @Input() iconOnly: boolean = false;
  @Input() set departments(departments: any[]) {
    this.updateMenu(departments);
  }
  public menus: any[];

  constructor() {}

  ngOnInit() {
    this.menus = menus;
  }

  updateMenu(departments): void {
    this.menus = [...menus];
    const menu = menus.find((menu) => menu.name === 'Doctors');
    if (!menu) {
      return;
    }
    const [subMenu] = menu.sub ?? [];
    subMenu.sub = (subMenu.sub as any[])?.concat(
      (departments ?? []).map(({ deptName: name, deptId }) => ({
        name,
        link: `physio/${deptId}`,
        icon: 'list',
        chip: false,
        open: false
      }))
    );

    this.menus = [...this.menus];
  }
}
