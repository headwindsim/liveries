import { ExecTask, TaskOfTasks } from "@flybywiresim/igniter";

export default new TaskOfTasks("all", [
    // A339X Livery Package Task
    new TaskOfTasks("a339x-livery-package", [
        // Prepare the out folder and any other pre tasks.
        // Currently, these can be run in parallel but in the future, we may need to run them in sequence if there are any dependencies.
        new TaskOfTasks("preparation", [
            new ExecTask("copy-base-files", "npm run build-a339x-livery-package:copy-base-files")
        ], true),
        new TaskOfTasks("dist", [
            new ExecTask("manifests", "npm run build-a339x-livery-package:manifest")
        ])
    ]),
    new TaskOfTasks("su95x-livery-package", [
        // Prepare the out folder and any other pre tasks.
        // Currently, these can be run in parallel but in the future, we may need to run them in sequence if there are any dependencies.
        new TaskOfTasks("preparation", [
            new ExecTask("copy-base-files", "npm run build-su95x-livery-package:copy-base-files")
        ], true),
        new TaskOfTasks("dist", [
            new ExecTask("manifests", "npm run build-su95x-livery-package:manifest")
        ])
    ])
]);