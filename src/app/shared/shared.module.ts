import { NgModule } from "@angular/core";
import { Module } from "module";
import { PipeModule } from "./pipes/pipe.module";

@NgModule({
    imports: [ PipeModule ],
    exports: [ PipeModule ]
})
export class SharedModule {

}