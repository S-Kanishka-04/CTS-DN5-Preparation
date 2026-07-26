import { CanDeactivateFn } from '@angular/router';

/**
 * Any component that can be protected by unsavedChangesGuard must
 * expose a `hasUnsavedChanges()` method (e.g. returns `form.dirty`).
 */
export interface CanComponentDeactivate {
  hasUnsavedChanges: () => boolean;
}

/**
 * unsavedChangesGuard — HOL 7 Task 2.
 * Prevents accidental loss of form data: if the form is dirty, prompts
 * the user with a confirm dialog before allowing navigation away.
 */
export const unsavedChangesGuard: CanDeactivateFn<CanComponentDeactivate> = (component) => {
  if (component.hasUnsavedChanges()) {
    return window.confirm('You have unsaved changes. Leave?');
  }
  return true;
};
