import { Pane } from "tweakpane";

import StatsJs from "./Stats";

const tabList: string[] = ["General", "Stats"];

export default class Debug {
  private gui: Pane;
  private stats: StatsJs;
  private debugFolders: { [key: string]: any };
  private tabs: { [key: string]: any };

  constructor() {
    this.gui = new Pane();
    this.stats = new StatsJs();

    this.debugFolders = {};
    this.tabs = {};

    this.initTab();
  }

  setFolder(folderLabel: string, tabLabel: string = tabList[0], expanded: boolean = true) {
    const l = folderLabel.toLowerCase();
    const tab = this.getTab(tabLabel);
    this.debugFolders[l] = tab.addFolder({
      title: folderLabel,
      expanded: expanded,
    });
  }

  getFolder(folderLabel: string) {
    const l = folderLabel.toLowerCase();
    return this.debugFolders[l];
  }

  initTab() {
    const pages: { title: string }[] = [];
    tabList.forEach((tab) => {
      pages.push({ title: tab });
    });

    this.tabs = this.gui.addTab({
      pages: pages,
    });
  }

  private getTab(tabLabel: string) {
    const checkIndex = tabList.indexOf(tabLabel);
    if (checkIndex == -1)
      console.warn(`Tab '${tabLabel}' doesn't exist ❗️ \n Setting folder in tab 'General' per default`);

    const index = checkIndex == -1 ? 0 : checkIndex;
    return this.tabs.pages[index];
  }

  destroy() {
    this.gui.dispose();
    this.stats.destroy();
  }
}
