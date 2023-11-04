Here's some information on how you can provide metadata for various items on the archive, given this currently isn't fantastically straight-forward.

To figure out where the metadata should go, first determine the folder it needs to go under. This can be grabbed by fetching the URL for a given file.

The indexer has three targets it handles, the target location (this is where all HTML and links are generated), a source location (this is where the data is actually pulled from) and finally a metadata location.

When the indexer handles the metadata location, it operates off of the resulting target names rather than the original source names. This means spaces and other various characters are stripped, for simplicity, which is something that needs to be accounted for when handling the metadata.

![img.png](img.png)

`x.sources` lets you specify where a file came from. The file is expected to feature either a URL or name.

`x.desc` lets you specify the description for a file, which will let you give some context. This is parsed as a block of text, so you can set the following for instance.

There are some rules I recommend for `.desc` files;
1. If you're quoting someone, make it obvious.
2. Try and provide a citation if/when possible. If the file already has a source pointing to where the citation is from, that might be sufficient but otherwise, include it.
