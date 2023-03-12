declare const _sfc_main: import("vue").DefineComponent<{
    window: {
        type: null;
        required: true;
    };
}, {
    system: import("vtron/distlib/src/packages/feature/system/System").System | null;
    pathJoin: (...paths: string[]) => string;
    createInput: import("vue").Ref<string>;
    creating: import("vue").Ref<boolean>;
    creatingEditEnd: () => void;
    createFolder: () => void;
    router_url: import("vue").Ref<string>;
    refersh: (newVal: string) => Promise<void>;
    isVia: (newVal: string, alert?: boolean) => Promise<boolean>;
    currentList: import("vue").Ref<any[]>;
    openFolder: (item: any) => void;
    showMenu: (item: any, index: number, ev: MouseEvent) => void;
    backFolder: () => void;
    compu: import("vue").Ref<null>;
    readFileList: (list: FileList | undefined) => Promise<void>;
    path_state: import("vue").Ref<string>;
    start_input: () => void;
    end_input: () => void;
    readonly foldericon: string;
    readonly unknownicon: string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    window: {
        type: null;
        required: true;
    };
}>>, {}>;
export default _sfc_main;
