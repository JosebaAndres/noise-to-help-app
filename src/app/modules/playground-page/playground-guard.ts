import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class PlaygroundGuard implements CanActivate {
  canActivate(): boolean {
    return environment.playground;
  }
}
