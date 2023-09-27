import { AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { IconSetService } from '../icon-set';
import { IconSize, IIcon } from './icon.interface';
import * as i0 from "@angular/core";
export declare class IconComponent implements IIcon, AfterViewInit {
    private renderer;
    private elementRef;
    private sanitizer;
    private iconSet;
    attributes: any;
    content?: string | string[] | any[];
    size: IconSize;
    title?: string;
    use: string;
    customClasses?: string | string[] | Set<string> | {
        [klass: string]: any;
    };
    width?: string;
    height?: string;
    name: string;
    set viewBox(viewBox: string);
    get viewBox(): string;
    private _viewBox;
    svgElementRef: ElementRef;
    get innerHtml(): SafeHtml;
    constructor(renderer: Renderer2, elementRef: ElementRef, sanitizer: DomSanitizer, iconSet: IconSetService);
    ngAfterViewInit(): void;
    get titleCode(): string;
    get code(): string | string[] | undefined;
    get scale(): string;
    get computedSize(): Exclude<IconSize, 'custom'> | undefined;
    get computedClasses(): any;
    toCamelCase(str: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<IconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IconComponent, "c-icon", never, { "attributes": { "alias": "attributes"; "required": false; }; "content": { "alias": "content"; "required": false; }; "size": { "alias": "size"; "required": false; }; "title": { "alias": "title"; "required": false; }; "use": { "alias": "use"; "required": false; }; "customClasses": { "alias": "customClasses"; "required": false; }; "width": { "alias": "width"; "required": false; }; "height": { "alias": "height"; "required": false; }; "name": { "alias": "name"; "required": false; }; "viewBox": { "alias": "viewBox"; "required": false; }; }, {}, never, never, true, never>;
    static ngAcceptInputType_name: string;
}
