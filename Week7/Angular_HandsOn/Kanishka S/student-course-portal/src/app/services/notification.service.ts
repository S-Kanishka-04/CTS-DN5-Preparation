import { Injectable } from '@angular/core';

/**
 * NotificationService — HOL 6 Task 2.
 *
 * This service is intentionally NOT `providedIn: 'root'`. Instead it is
 * listed in NotificationComponent's own `providers: [NotificationService]`
 * array, which creates a NEW, separate instance scoped to that component
 * (and any of its children) rather than sharing the app-wide singleton.
 * This is useful whenever a component needs isolated state — e.g. each
 * <app-notification> instance keeping its own message list.
 */
@Injectable()
export class NotificationService {
  private messages: string[] = [];

  addMessage(message: string): void {
    this.messages.push(message);
  }

  getMessages(): string[] {
    return [...this.messages];
  }

  clear(): void {
    this.messages = [];
  }
}
