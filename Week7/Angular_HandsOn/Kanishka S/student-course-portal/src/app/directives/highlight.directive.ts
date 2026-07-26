import { Directive, ElementRef, HostListener, Input } from '@angular/core';

/**
 * HighlightDirective — HOL 3 Task 3.
 * Adds a configurable background highlight to its host element on
 * mouseenter, and removes it on mouseleave. @HostListener wires up
 * the DOM events without needing to manually add/remove listeners —
 * Angular manages cleanup automatically.
 *
 * Usage: <app-course-card appHighlight="lightblue">
 */
@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  /** Configurable colour; defaults to yellow when no value is passed. */
  @Input() appHighlight = 'yellow';

  constructor(private el: ElementRef<HTMLElement>) {}

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.setBackgroundColor(this.appHighlight || 'yellow');
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.setBackgroundColor('');
  }

  private setBackgroundColor(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
