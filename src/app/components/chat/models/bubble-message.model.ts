export interface BubbleMessage {
  id: number;
  type: string;
  content: string;
  isUserSender?: boolean;
}

export interface BubbleMessages {
  bubbleMessages: BubbleMessage[];
}
