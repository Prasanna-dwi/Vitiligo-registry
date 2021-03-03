export default class TabRoute {
  public label: string;
  public caption: string;
  public link: string;
  public icon: string;
  constructor(params: TabRoute = {} as TabRoute) {
    const {
      label = '',
      caption = '',
      link = '',
      icon = ''
    } = params;
    this.label = label as string
    this.caption = caption as string
    this.link = link as string
    this.icon = icon as string
  }
}