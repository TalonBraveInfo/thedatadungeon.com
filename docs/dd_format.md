# .dd Format

## Syntax

### Comments

Use `;` for a single line comment. Only these are supported at this time.

### Simple Variable

`<name> <value>`

#### Example

`myVar "This is a test"`.

### Block Variable

```
<name>>>
<value>
<<
```

#### Example

```
exampleBlock>>
This is a lot of text which will just
be pulled in as-is. You can literally
put whatever you want in here.
<<
```

## `config.dd`

### `directories`

This should be a list of directory names each seperated by a new line.
This is what the indexer will use as reference when looking up locations to index.

### `web-title`

This resolved as the title used for your generated website. 
For example, we use "The Data Dungeon", so all pages throughout use "The Data Dungeon" at the start
of the websites title.

### `web-url`

The base URL used for the website.

### `web-description`

Currently used for RSS feed generation.

### `web-contact-email`

Currently used for RSS feed generation.

### `web-contact-name`

Currently used for RSS feed generation.

### `html:description`

This is the description that gets used at the top of the website. 
As described, you can insert any HTML here.

## `directory.dd`

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
