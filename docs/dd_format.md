# .dd Format

## Global

### `;`
Resolves as a comment which will be ignored.

### `html-<group>>>`

Provides a basic description for the generated HTML page. It will be copied into the HTML page 1:1, so feel free to insert your own HTML into the mix.

The `group` can be any of the following, which will change where it appears on the page.

- `desc`; this will be displayed near the top as the description for the given page.

### `html-<group><<`

Closes the HTML block.

### `link <url> "<description>"`

## Directory

The following only work for directories, i.e. `directory.dd`.

### `dir-dev "<name>"`

Name of the developer can be specified here.

### `dir-pub "<name>"`

### `dir-type <type>`
Specifies the type of directory for the indexer, and this is turn changes what type of collection it falls under.

Currently supports the following arguments.
- `game`
- `software`

If it's not specified, this currently defaults to `game`.

### `dir-status`

This is usually pulled for the name of the directory.

- `unknown`
- `pending`
- `cancelled`
- `released`

## File

Checked for by `<filename>.dd` - this includes the extension of the file too. If one is provided for the specific file, it will also generate a HTML page for the given file too.

### `file-type`

Specific type of file. This is usually automatically determined by the indexer.

Accepts the following arguments.
- `image`
- `video`
- `sound`
- `archive`
- `document`
- `executable`

In future these may be narrowed into more specific types (i.e. Windows executable vs. Linux executable).

### `file-subtype`

Again, this is usually automatically determined by the folder the file is placed under. It accepts the following arguments.

- `distro`
- `artwork`
- `screenshot`
- `video`
- `other`
