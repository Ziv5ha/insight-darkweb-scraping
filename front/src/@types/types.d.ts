declare interface Paste {
  author: string;
  title: string;
  content: string;
  date: Date;
}
declare interface AnalyticsType {
  total: number;
  porn: number;
  dataleaks: number;
  currency: number;
  other: number;
}
declare interface AnalyticsWithoutTotal {
  total?: number;
  porn: number;
  dataleaks: number;
  currency: number;
  other: number;
}
