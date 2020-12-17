import { NgModule } from "@angular/core";
import { PipeModule } from "./pipes/pipe.module";

@NgModule({
    imports: [ PipeModule ],
    exports: [ PipeModule ]
})
export class SharedModule {

}