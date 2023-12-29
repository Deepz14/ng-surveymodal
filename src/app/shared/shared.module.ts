import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NotificationPromptComponent } from './notification-prompt/notification-prompt.component';

@NgModule({
    declarations: [NotificationPromptComponent],
    imports: [CommonModule],
    exports: [NotificationPromptComponent]
})
export class SharedModule {}