# Task
Go [Here](Task/README.MD) to read the task.


# Launching project in Visual Studio 2017

## Required tools

1. Visual Studio 2017  
   Version: 15.8 or above  
   Edition: Community (free) / Professional / Enterprise  
   Language: English  
   Download link: https://www.visualstudio.com/downloads/
2. .NET Core 2.1 SDK  
   Download link: https://www.microsoft.com/net/download

## Project launch

1. Open **Team Explorer** (Ctrl + \, Ctrl + M).
2. If another repository is currently active click **Manage Connections**.
3. In **Local Git Repositories** section click **Clone**.
4. Enter repository url and target path and click **Clone**.
5. After cloning repository, Visual Studio will open **Solution Explorer - Folder View**. Double click on the solution (`*.sln`) to access the project.

# Launching project in Visual Studio Code

## Required tools

1. Visual Studio Code  
   Version: 1.27 or above  
   Download link: https://www.visualstudio.com/downloads/
2. .NET Core 2.1 SDK  
   Download link: https://www.microsoft.com/net/download

## Project launch

To clone and launch project, execute following commands in preferred shell (Command Prompt, PowerShell, bash, etc.):

```
git clone <Repository Url>
cd .\WebInt-Frontend2\Frontend2\
dotnet restore
cd ..
code .
```

Note: on UNIX systems use `./WebInt-Frontend2/Frontend2` path format.

On the first launch on Visual Studio Code it could require some additional extensions:

1. C# for Visual Studio Code
   1. Open **Extensions** (Ctrl+Shift+X)
   2. Type **C#** in search field
   3. Select **C# for Visual Studio Code** from Microsoft and click **Install**
   4. After installation, click **Enable** and restart Visual Studio Code
2. .NET Core Debugger
   1. Press Ctrl+Shift+P
   2. Start typing: **Download .NET Core Debugger**
   3. After this entry appears in search field - select it
   4. Restart Visual Studio Code just in case
