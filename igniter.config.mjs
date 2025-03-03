import { ExecTask, TaskOfTasks } from "@flybywiresim/igniter";

export default new TaskOfTasks("all", [
    // A339X Livery Package Task
    new TaskOfTasks("a339x-livery-package", [
        new TaskOfTasks("preparation", [
            new ExecTask("copy-base-files", "npm run build-a339x-livery-package:copy-base-files")
        ], true),
        new TaskOfTasks("dist", [
            new ExecTask("manifests", "npm run build-a339x-livery-package:manifest")
        ])
    ]),
    new TaskOfTasks("su95x-livery-package", [
        new TaskOfTasks("preparation", [
            new ExecTask("copy-base-files", "npm run build-su95x-livery-package:copy-base-files")
        ], true),
        new TaskOfTasks("dist", [
            new ExecTask("manifests", "npm run build-su95x-livery-package:manifest")
        ])
    ]),
    new TaskOfTasks("hues-a339x-cfg", [
        new TaskOfTasks("preparation", [
            new ExecTask("copy-base-files (8K)", "npm run build-hues-a339x-cfg:copy-base-package-8k"),
            new ExecTask("copy-base-files (4K)", "npm run build-hues-a339x-cfg:copy-base-package-4k")
        ], true),
        new TaskOfTasks("dist", [
            new ExecTask("manifests", "npm run build-hues-a339x-cfg:manifest")
        ])
    ]),
    new TaskOfTasks("hues-a339x-dal", [
        new TaskOfTasks("preparation", [
            new ExecTask("copy-base-files (8K)", "npm run build-hues-a339x-dal:copy-base-package-8k"),
            new ExecTask("copy-base-files (4K)", "npm run build-hues-a339x-dal:copy-base-package-4k")
        ], true),
        new TaskOfTasks("dist", [
            new ExecTask("manifests", "npm run build-hues-a339x-dal:manifest")
        ])
    ]),
    new TaskOfTasks("hues-a339x-vir", [        
        new TaskOfTasks("preparation", [
            new ExecTask("copy-base-files (8K)", "npm run build-hues-a339x-vir:copy-base-package-8k"),
            new ExecTask("copy-base-files (4K)", "npm run build-hues-a339x-vir:copy-base-package-4k")
        ], true),
        new TaskOfTasks("dist", [
            new ExecTask("manifests", "npm run build-hues-a339x-vir:manifest")
        ])
    ]),
    new TaskOfTasks("hues-a339x-vkg", [
        new TaskOfTasks("preparation", [
            new ExecTask("copy-base-files (8K)", "npm run build-hues-a339x-vkg:copy-base-package-8k"),
            new ExecTask("copy-base-files (4K)", "npm run build-hues-a339x-vkg:copy-base-package-4k")
        ], true),
        new TaskOfTasks("dist", [
            new ExecTask("manifests", "npm run build-hues-a339x-vkg:manifest")
        ])
    ])
]);
