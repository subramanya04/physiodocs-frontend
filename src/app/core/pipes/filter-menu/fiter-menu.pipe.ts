import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../models';

@Pipe({
  name: 'fiterMenu'
})
export class FiterMenuPipe implements PipeTransform {
  transform(menus: any[], ...args: unknown[]): unknown {
    const [user] = args;
    if (!user) {
      return menus;
    }

    const fileredMenu = menus.filter(
      (menu) =>
        !menu.userRoles || menu.userRoles?.includes((user as User).userRole)
    );
    return fileredMenu;
  }
}
