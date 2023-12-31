# Chrome Extension for Val Town

Run vals from the browser context menu.

![demo](./doc/screenshot.png)

## Installation

1. Download the latest release from the [releases page](https://github.com/pomdtr/val-town-web-extension/releases/latest).
2. Unzip the file.
3. Open the [extensions page](chrome://extensions) in Chrome.
4. Enable developer mode.
5. Click "Load unpacked" and select the unzipped folder.

## Usage

Create a new val in val.town containing client-side javascript.

```javascript
import { extractValInfo } from "https://esm.town/v/pomdtr/extractValInfo";

// @ts-ignore
const { url } = window.valtown; // the extension will pass a context object to the val
const { author, name } = extractValInfo(url);
await navigator.clipboard.writeText(`[@${author}/${name}](${location.href})`);
```

Then, click on the extension icon to open the options, and add your item to the `contextMenus` list.

```jsonc
{
  "token": "your_token", // required
  "actions": [
    {
      "title": "Copy Markdown Link",
      "url": "https://esm.town/v/pomdtr/copy_markdown_link",
    }
  ]
}
```

The context menu actions will appear on all val links (`https://www.val.town/v/*`).

The following properties are available:

- `title`: The title of the context menu item.
- `url`: The url of the script to run.
- `config`: The config to pass to the script.
- `children`: An array of child context menu items. Cannot be used with `url` or `config`.

## Context

The following properties are available on the context object passed to the val:

- `url`: The url of the val.
- `token`: The valtown token configured in the extension options.
- `config`: The config passed to the val in the extension options.

## Why is my val not working on (Twitter / Github / ...) ?

This extension inject a script in the page head when a context menu item is clicked. This script reference the esm.town url of the val. If the website you are trying to run the val on does not allow scripts from esm.town, the val will not work.
