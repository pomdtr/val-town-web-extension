export type Config = {
  token?: string;
  contextMenus: MenuItem[];
};

export type MenuItem = {
  title: string;
  url?: string;
  children?: MenuItem[];
};

export const defaultConfig = {
  "contextMenus": [
    {
      title: "Copy Markdown Link",
      url: "https://esm.town/v/pomdtr/copy_markdown_link",
    },
  ],
};
