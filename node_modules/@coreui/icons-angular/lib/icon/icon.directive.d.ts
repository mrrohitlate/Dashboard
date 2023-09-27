import { ElementRef, Renderer2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IconSetService } from '../icon-set';
import { IconSize, IIcon } from './icon.interface';
import * as i0 from "@angular/core";
export declare class IconDirective implements IIcon {
    private renderer;
    private elementRef;
    private sanitizer;
    private iconSet;
    content?: string | string[] | any[];
    size: IconSize;
    title?: string;
    customClasses?: string | string[] | Set<string> | {
        [klass: string]: any;
    };
    width?: string;
    height?: string;
    name: string;
    set viewBox(viewBox: string);
    get viewBox(): string;
    private _viewBox;
    xmlns: string;
    pointerEvents: string;
    role: string;
    get hostClasses(): string | {
        [klass: string]: any;
    };
    get innerHtml(): import("@angular/platform-browser").SafeHtml;
    constructor(renderer: Renderer2, elementRef: ElementRef, sanitizer: DomSanitizer, iconSet: IconSetService);
    get titleCode(): string;
    get code(): string | string[] | undefined;
    get scale(): string;
    get computedSize(): Exclude<IconSize, 'custom'> | undefined;
    get computedClasses(): any;
    toCamelCase(str: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<IconDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<IconDirective, "svg[cIcon]", ["cIcon"], { "content": { "alias": "cIcon"; "required": false; }; "size": { "alias": "size"; "required": false; }; "title": { "alias": "title"; "required": false; }; "customClasses": { "alias": "customClasses"; "required": false; }; "width": { "alias": "width"; "required": false; }; "height": { "alias": "height"; "required": false; }; "name": { "alias": "name"; "required": false; }; "viewBox": { "alias": "viewBox"; "required": false; }; "xmlns": { "alias": "xmlns"; "required": false; }; "pointerEvents": { "alias": "pointer-events"; "required": false; }; "role": { "alias": "role"; "required": false; }; }, {}, never, never, true, never>;
    static ngAcceptInputType_name: string;
}
