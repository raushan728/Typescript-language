# TypeScript Learning Pack

A comprehensive collection of TypeScript programming examples covering fundamental to advanced concepts. This repository contains 31+ TypeScript source files that demonstrate various aspects of the TypeScript language, from basic syntax to advanced features like generics, promises, and modules.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Topics Covered](#topics-covered)
- [Running the Examples](#running-the-examples)
- [File Organization](#file-organization)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## Overview

This TypeScript Learning Pack is designed for developers who want to learn or improve their TypeScript skills. Each file focuses on a specific concept with practical examples and clear explanations. The examples progress from basic language constructs to advanced TypeScript features.

## Prerequisites

Before running these examples, ensure you have the following installed:

- **Node.js 14 or higher**
- **TypeScript compiler (tsc)**
- **npm or yarn package manager**
- **Code editor** (VS Code recommended) or any TypeScript-compatible IDE

### Checking Prerequisites

```bash
# Check Node.js version
node --version

# Check TypeScript compiler
tsc --version

# Check npm version
npm --version
```

## Installation

### Option 1: Using VS Code (Recommended)

1. Clone the repository:
   ```bash
   git clone https://github.com/raushan728/Typescript-language.git
   cd TypeScript-learning
   ```

2. Open VS Code
3. Install the recommended extensions:
   - TypeScript and JavaScript Language Features
   - Code Runner (optional for easy execution)

### Option 2: Using Command Line

1. Clone the repository:
   ```bash
   git clone https://github.com/raushan728/Typescript-language.git
   cd TypeScript-learning
   ```

2. Install TypeScript compiler if not already installed:

#### Windows
Check if you have package managers installed:
```bash
# Check for winget (Windows Package Manager)
winget --version

# Check for Chocolatey
choco --version
```

**Install via winget (recommended):**
```bash
# Install Node.js
winget install OpenJS.NodeJS

# Install TypeScript globally
npm install -g typescript
```

**Install via Chocolatey:**
```bash
# Install Node.js
choco install nodejs

# Install TypeScript globally
npm install -g typescript
```

**Manual installation:**
- Download Node.js from [nodejs.org](https://nodejs.org)
- Install TypeScript globally: `npm install -g typescript`

#### macOS
```bash
# Install via Homebrew
brew install node

# Install TypeScript globally
npm install -g typescript
```

#### Linux
```bash
# Install Node.js via package manager
# Ubuntu/Debian:
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Fedora:
sudo dnf install nodejs

# Arch Linux:
sudo pacman -S nodejs npm

# Install TypeScript globally
sudo npm install -g typescript
```

## Usage

### Running Individual Files

#### Using VS Code with Code Runner
1. Install Code Runner extension
2. Right-click on any `.ts` file
3. Select "Run Code" or use keyboard shortcut

#### Using Command Line
```bash
# Compile a TypeScript file
tsc filename.ts

# Run the compiled JavaScript
node filename.js

# Example:
tsc 01_Comments_And_Syntax.ts
node 01_Comments_And_Syntax.js
```

#### Using ts-node (Alternative)
```bash
# Install ts-node globally
npm install -g ts-node

# Run TypeScript files directly
ts-node filename.ts

# Example:
ts-node 01_Comments_And_Syntax.ts
```

### Running Multiple Files
```bash
# Create tsconfig.json for project compilation
tsc --init

# Compile all TypeScript files
tsc

# Run specific compiled files
node dist/filename.js
```

## Topics Covered

The repository is organized to cover TypeScript concepts in a progressive manner:

### Basic Concepts
- **01_Comments_And_Syntax.ts** - Comments, basic syntax, and code structure
- **02_Variables_And_Types.ts** - Variable declarations and basic types
- **03_Type_Inference_And_Annotations.ts** - Type inference and explicit annotations
- **04_Operators.ts** - Arithmetic, comparison, and logical operators

### Control Flow
- **05_Conditionals.ts** - if-else statements and switch cases
- **06_Loops.ts** - For, while, and do-while loops

### Functions and Data Structures
- **07_Functions.ts** - Function declarations, parameters, and return types
- **08_Arrays.ts** - Array operations and methods
- **09_Tuples.ts** - Tuple types and usage

### Type System
- **10_Enums.ts** - Enum types and their applications
- **11_Objects.ts** - Object types and structures
- **12_Any_Unknown.ts** - any and unknown type differences
- **13_Type_Aliases.ts** - Creating custom type aliases
- **14_Union_Intersection.ts** - Union and intersection types
- **15_Literal_Types.ts** - Literal type constraints
- **16_Null_Undefined.ts** - Handling null and undefined
- **17_Type_Assertions.ts** - Type assertions and casting

### Object-Oriented Programming
- **18_Interfaces.ts** - Interface declarations and implementations
- **19_Classes.ts** - Class definitions and instances
- **20_Objects_with_Interface.ts** - Using interfaces with objects
- **21_Readonly_Optional.ts** - Readonly and optional properties
- **22_Constructor_Public_Private.ts** - Access modifiers in classes
- **23_Static_Properties_Methods.ts** - Static class members
- **24_Inheritance.ts** - Class inheritance patterns
- **25_Abstract_Class.ts** - Abstract classes and methods
- **26_Interface_vs_Type.ts** - Interface vs Type alias comparison
- **31_Extends_Keyword.ts** - extends keyword usage

### Advanced Features
- **27_Generics.ts** - Generic types and functions
- **28_Promises.ts** - Promise handling and async/await
- **29_Modules.ts** - Module import/export patterns
- **30_Practice_Questions.ts** - Practical coding exercises

## Running the Examples

Each file is self-contained and can be run independently. The files include:

1. **Main code** - Practical examples demonstrating each concept
2. **Comments** - Detailed explanations of TypeScript features
3. **Type annotations** - Comprehensive type definitions
4. **Best practices** - Industry-standard coding patterns

### Quick Start

1. **Start with basics**: Begin with `01_Comments_And_Syntax.ts` and progress sequentially
2. **Experiment**: Modify the code and observe type checking behavior
3. **Practice**: Create your own variations of the examples
4. **Reference**: Use files as reference for your own TypeScript projects

## File Organization

The repository contains 31 TypeScript files organized sequentially from basic to advanced concepts. Each file is numbered and focuses on a specific TypeScript topic, making it easy to follow the learning progression.

## Contributing

Contributions are welcome! If you find any issues or want to add more examples:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-example`)
3. Commit your changes (`git commit -am 'Add new example'`)
4. Push to the branch (`git push origin feature/new-example`)
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Raushan Kumar**

- [Email](mailto:raushansinghrajpoot687@gmail.com)
- [Twitter](https://x.com/Raushan_090)

---

## Additional Resources

- [TypeScript Official Documentation](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [TypeScript Playground](https://www.typescriptlang.org/play)
- [Definitely Typed](https://github.com/DefinitelyTyped/DefinitelyTyped) - Type definitions for JavaScript libraries

Happy Learning!
