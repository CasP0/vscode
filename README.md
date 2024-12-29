# Visual Studio Code - Open Source ("Code - OSS")
[![Feature Requests](https://img.shields.io/github/issues/microsoft/vscode/feature-request.svg)](https://github.com/microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Afeature-request+sort%3Areactions-%2B1-desc)
[![Bugs](https://img.shields.io/github/issues/microsoft/vscode/bug.svg)](https://github.com/microsoft/vscode/issues?utf8=✓&q=is%3Aissue+is%3Aopen+is%3Aissue+label%3Abug)
[![Gitter](https://img.shields.io/badge/chat-on%20gitter-yellow.svg)](https://gitter.im/Microsoft/vscode)

## The Repository

This repository ("`Code - OSS`") is where we (Microsoft) develop the [Visual Studio Code](https://code.visualstudio.com) product together with the community. Not only do we work on code and issues here, we also publish our [roadmap](https://github.com/microsoft/vscode/wiki/Roadmap), [monthly iteration plans](https://github.com/microsoft/vscode/wiki/Iteration-Plans), and our [endgame plans](https://github.com/microsoft/vscode/wiki/Running-the-Endgame). This source code is available to everyone under the standard [MIT license](https://github.com/microsoft/vscode/blob/main/LICENSE.txt).

## Visual Studio Code

<p align="center">
  <img alt="VS Code in action" src="https://user-images.githubusercontent.com/35271042/118224532-3842c400-b438-11eb-923d-a5f66fa6785a.png">
</p>

[Visual Studio Code](https://code.visualstudio.com) is a distribution of the `Code - OSS` repository with Microsoft-specific customizations released under a traditional [Microsoft product license](https://code.visualstudio.com/License/).

[Visual Studio Code](https://code.visualstudio.com) combines the simplicity of a code editor with what developers need for their core edit-build-debug cycle. It provides comprehensive code editing, navigation, and understanding support along with lightweight debugging, a rich extensibility model, and lightweight integration with existing tools.

Visual Studio Code is updated monthly with new features and bug fixes. You can download it for Windows, macOS, and Linux on [Visual Studio Code's website](https://code.visualstudio.com/Download). To get the latest releases every day, install the [Insiders build](https://code.visualstudio.com/insiders).

## Contributing

There are many ways in which you can participate in this project, for example:
* [Submit bugs and feature requests](https://github.com/microsoft/vscode/issues), and help us verify as they are checked in
* Review [source code changes](https://github.com/microsoft/vscode/pulls)
* Review the [documentation](https://github.com/microsoft/vscode-docs) and make pull requests for anything from typos to additional and new content

If you are interested in fixing issues and contributing directly to the code base,
please see the document [How to Contribute](https://github.com/microsoft/vscode/wiki/How-to-Contribute), which covers the following:

* [How to build and run from source](https://github.com/microsoft/vscode/wiki/How-to-Contribute)
* [The development workflow, including debugging and running tests](https://github.com/microsoft/vscode/wiki/How-to-Contribute#debugging)
* [Coding guidelines](https://github.com/microsoft/vscode/wiki/Coding-Guidelines)
* [Submitting pull requests](https://github.com/microsoft/vscode/wiki/How-to-Contribute#pull-requests)
* [Finding an issue to work on](https://github.com/microsoft/vscode/wiki/How-to-Contribute#where-to-contribute)
* [Contributing to translations](https://aka.ms/vscodeloc)

## Feedback

* Ask a question on [Stack Overflow](https://stackoverflow.com/questions/tagged/vscode)
* [Request a new feature](CONTRIBUTING.md)
* Upvote [popular feature requests](https://github.com/microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Afeature-request+sort%3Areactions-%2B1-desc)
* [File an issue](https://github.com/microsoft/vscode/issues)
* Follow [@code](https://twitter.com/code) and let us know what you think!

See our [wiki](https://github.com/microsoft/vscode/wiki/Feedback-Channels) for a description of each of these channels and information on some other available community-driven channels.

## Related Projects

Many of the core components and extensions to VS Code live in their own repositories on GitHub. For example, the [node debug adapter](https://github.com/microsoft/vscode-node-debug) and the [mono debug adapter](https://github.com/microsoft/vscode-mono-debug) repositories are separate from each other. For a complete list, please visit the [Related Projects](https://github.com/microsoft/vscode/wiki/Related-Projects) page on our [wiki](https://github.com/microsoft/vscode/wiki).

## Bundled Extensions

VS Code includes a set of built-in extensions located in the [extensions](extensions) folder, including grammars and snippets for many languages. Extensions that provide rich language support (code completion, Go to Definition) for a language have the suffix `language-features`. For example, the `json` extension provides coloring for `JSON` and the `json-language-features` extension provides rich language support for `JSON`.

## Development Container

This repository includes a Visual Studio Code Remote - Containers / GitHub Codespaces development container.

- For [Remote - Containers](https://aka.ms/vscode-remote/download/containers), use the **Remote-Containers: Clone Repository in Container Volume...** command which creates a Docker volume for better disk I/O on macOS and Windows.
     - If you already have VS Code and Docker installed, you can also click [here](https://vscode.dev/redirect?url=vscode://ms-vscode-remote.remote-containers/cloneInVolume?url=https://github.com/microsoft/vscode) to get started. This will cause VS Code to automatically install the Remote - Containers extension if needed, clone the source code into a container volume, and spin up a dev container for use.
- For Codespaces, install the [GitHub Codespaces](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces) extension in VS Code, and use the **Codespaces: Create New Codespace** command.

Docker / the Codespace should have at least **4 Cores and 6 GB of RAM (8 GB recommended)** to run full build. See the [development container README](.devcontainer/README.md) for more information.

## Code of Conduct

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## License

Copyright (c) Microsoft Corporation. All rights reserved.

Licensed under the [MIT](LICENSE.txt) license.

## TURISMO

The "TURISMO" feature or module provides a set of tools and functionalities to enhance the user experience in the Visual Studio Code environment. It includes various utilities and extensions that improve productivity and streamline the development process.

### Usage Instructions

1. Install the "TURISMO" extension from the Visual Studio Code marketplace.
2. Open the command palette (Ctrl+Shift+P) and type "TURISMO" to see the available commands.
3. Select the desired command and follow the on-screen instructions to use the feature.

### Configuration Options

The "TURISMO" feature or module can be customized using the following configuration options:

- `turismo.enable`: Enable or disable the TURISMO feature. Default is `true`.
- `turismo.theme`: Set the theme for the TURISMO feature. Available options are `light` and `dark`. Default is `light`.
- `turismo.shortcuts`: Configure custom keyboard shortcuts for TURISMO commands. Default is an empty object `{}`.

## Cloning the Repository

To clone the repository, follow these steps:

1. Open a terminal or command prompt.
2. Navigate to the directory where you want to clone the repository.
3. Run the following command:

```bash
gh repo clone CasP0/vscode
```

This will create a local copy of the repository on your machine.

## Quick start - local

1. Install Docker Desktop or Docker for Linux on your local machine. (See [docs](https://aka.ms/vscode-remote/containers/getting-started) for additional details.)

2. **Important**: Docker needs at least **4 Cores and 6 GB of RAM (8 GB recommended)** to run full build. If you on macOS, or using the old Hyper-V engine for Windows, update these values for Docker Desktop by right-clicking on the Docker status bar item, going to **Preferences/Settings > Resources > Advanced**.

    > **Note:** The [Resource Monitor](https://marketplace.visualstudio.com/items?itemName=mutantdino.resourcemonitor) extension is included in the container so you can keep an eye on CPU/Memory in the status bar.

3. Install [Visual Studio Code Stable](https://code.visualstudio.com/) or [Insiders](https://code.visualstudio.com/insiders/) and the [Remote - Containers](https://aka.ms/vscode-remote/download/containers) extension.

    ![Image of Remote - Containers extension](https://microsoft.github.io/vscode-remote-release/images/remote-containers-extn.png)

    > Note that the Remote - Containers extension requires the Visual Studio Code distribution of Code - OSS. See the [FAQ](https://aka.ms/vscode-remote/faq/license) for details.

4. Press <kbd>Ctrl/Cmd</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd> and select **Remote-Containers: Clone Repository in Container Volume...**.

    > **Tip:** While you can use your local source tree instead, operations like `yarn install` can be slow on macOS or using the Hyper-V engine on Windows. We recommend the "clone repository in container" approach instead since it uses "named volume" rather than the local filesystem.

5. Type `https://github.com/microsoft/vscode` (or a branch or PR URL) in the input box and press <kbd>Enter</kbd>.

6. After the container is running, open a web browser and go to [http://localhost:6080](http://localhost:6080) or use a [VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/) to connect to `localhost:5901` and enter `vscode` as the password.

Anything you start in VS Code or the integrated terminal will appear here.

Next: **[Try it out!](#try-it)**

## Quick start - GitHub Codespaces

> **IMPORTANT:** You need to use a "Standard" sized codespace or larger (4-core, 8GB) since VS Code needs 6GB of RAM to compile. This is now the default for GitHub Codespaces, but do not downgrade to "Basic" unless you do not intend to compile.

1. From the [microsoft/vscode GitHub repository](https://github.com/microsoft/vscode), click on the **Code** dropdown, select **Open with Codespaces**, and the **New codespace**

    > Note that you will not see these options if you are not in the beta yet.

2. After the codespace is up and running in your browser, press <kbd>F1</kbd> and select **Ports: Focus on Ports View**.

3. You should see port `6080` under **Forwarded Ports**. Select the line and click on the globe icon to open it in a browser tab.

    > If you do not see port `6080`, press <kbd>F1</kbd>, select **Forward a Port** and enter port `6080`.

4. In the new tab, you should see noVNC. Click **Connect** and enter `vscode` as the password.

Anything you start in VS Code or the integrated terminal will appear here.

Next: **[Try it out!](#try-it)**

### Using VS Code with GitHub Codespaces

You will likely see better performance when accessing the codespace you created from VS Code since you can use a[VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/). Here's how to do it.

1. [Create a codespace](#quick-start---github-codespaces) if you have not already.

2. Set up [VS Code for use with GitHub Codespaces](https://docs.github.com/github/developing-online-with-codespaces/using-codespaces-in-visual-studio-code)

3. After the VS Code is up and running, press <kbd>F1</kbd>, choose **Codespaces: Connect to Codespace**, and select the codespace you created.

4. After you've connected to the codespace, use a [VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/) to connect to `localhost:5901` and enter `vscode` as the password.

5. Anything you start in VS Code or the integrated terminal will appear here.

Next: **[Try it out!](#try-it)**

## Try it!

This container uses the [Fluxbox](http://fluxbox.org/) window manager to keep things lean. **Right-click on the desktop** to see menu options. It works with GNOME and GTK applications, so other tools can be installed if needed.

Note you can also set the resolution from the command line by typing `set-resolution`.

To start working with Code - OSS, follow these steps:

1. In your local VS Code, open a terminal (<kbd>Ctrl/Cmd</kbd> + <kbd>Shift</kbd> + <kbd>\`</kbd>) and type the following commands:

    ```bash
    yarn install
    bash scripts/code.sh
    ```

    Note that a previous run of `yarn install`  will already be cached, so this step should simply pick up any recent differences.

2. After the build is complete, open a web browser or a [VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/) to the desktop environnement as described in the quick start and enter `vscode` as the password.

3. You should now see Code - OSS!

Next, let's try debugging.

1. Shut down Code - OSS by clicking the box in the upper right corner of the Code - OSS window through your browser or VNC viewer.

2. Go to your local VS Code client, and use Run / Debug view to launch the **VS Code** configuration. (Typically the default, so you can likely just press <kbd>F5</kbd>).

    > **Note:** If launching times out, you can increase the value of `timeout` in the "VS Code", "Attach Main Process", "Attach Extension Host", and "Attach to Shared Process" configurations in [launch.json](../.vscode/launch.json). However, running `scripts/code.sh` first will set up Electron which will usually solve timeout issues.

3. After a bit, Code - OSS will appear with the debugger attached!

Enjoy!
